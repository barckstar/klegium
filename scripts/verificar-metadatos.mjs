/**
 * Verifica que cada página del sitio tenga sus metadatos completos y que los
 * iconos existan.
 *
 * Corre sobre el HTML ya generado en `.next/server/app`, así que comprueba lo
 * que de verdad se sirve, no lo que dice el código fuente.
 *
 * Uso:  npm run build && npm run verificar
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const RAIZ = process.cwd()
const SALIDA = join(RAIZ, '.next', 'server', 'app')

const ICONOS = [
  'src/app/favicon.ico',
  'src/app/icon.png',
  'src/app/apple-icon.png',
  'src/app/opengraph-image.jpg',
  'src/app/twitter-image.jpg',
]

/** Longitudes que usan los buscadores antes de recortar. */
const LIMITES = {
  titulo: { min: 15, max: 65 },
  descripcion: { min: 70, max: 165 },
}

const fallos = []
const avisos = []

function exigir(condicion, mensaje) {
  if (!condicion) fallos.push(mensaje)
}

// ---------------------------------------------------------------- iconos
for (const icono of ICONOS) {
  const ruta = join(RAIZ, icono)
  exigir(existsSync(ruta), `Falta el icono: ${icono}`)
  if (existsSync(ruta)) {
    exigir(statSync(ruta).size > 500, `El icono está vacío o es inválido: ${icono}`)
  }
}

// ------------------------------------------------------- páginas generadas
function buscarHtml(dir, encontrados = []) {
  if (!existsSync(dir)) return encontrados
  for (const entrada of readdirSync(dir, { withFileTypes: true })) {
    const ruta = join(dir, entrada.name)
    if (entrada.isDirectory()) buscarHtml(ruta, encontrados)
    else if (entrada.name.endsWith('.html')) encontrados.push(ruta)
  }
  return encontrados
}

// Se excluyen las páginas internas de Next (error global, 404 por defecto):
// no son rutas del sitio y no se indexan.
const INTERNAS = ['_not-found', '_global-error', '_error']
const paginas = buscarHtml(SALIDA).filter((p) => !INTERNAS.some((i) => p.includes(i)))

if (paginas.length === 0) {
  console.error('\n✖ No hay HTML generado. Corré `npm run build` primero.\n')
  process.exit(1)
}

function extraer(html, expresion) {
  const m = html.match(expresion)
  return m ? m[1] : null
}

for (const archivo of paginas) {
  const html = readFileSync(archivo, 'utf8')
  const nombre = archivo.replace(SALIDA, '').replace(/\\/g, '/').replace('.html', '') || '/'

  const titulo = extraer(html, /<title>([^<]*)<\/title>/)
  const descripcion = extraer(html, /<meta name="description" content="([^"]*)"/)
  const canonical = extraer(html, /<link rel="canonical" href="([^"]*)"/)
  const ogTitulo = extraer(html, /<meta property="og:title" content="([^"]*)"/)
  const ogDesc = extraer(html, /<meta property="og:description" content="([^"]*)"/)
  const ogImagen = extraer(html, /<meta property="og:image" content="([^"]*)"/)
  const twitter = extraer(html, /<meta name="twitter:card" content="([^"]*)"/)
  const lang = extraer(html, /<html lang="([^"]*)"/)
  const h1 = (html.match(/<h1[\s>]/g) || []).length

  exigir(titulo, `${nombre}: sin <title>`)
  exigir(descripcion, `${nombre}: sin meta description`)
  exigir(canonical, `${nombre}: sin URL canónica`)
  exigir(ogTitulo, `${nombre}: sin og:title`)
  exigir(ogDesc, `${nombre}: sin og:description`)
  exigir(ogImagen, `${nombre}: sin og:image`)
  exigir(twitter, `${nombre}: sin twitter:card`)
  exigir(lang, `${nombre}: sin atributo lang en <html>`)
  exigir(h1 === 1, `${nombre}: debe tener exactamente un <h1>, tiene ${h1}`)

  if (titulo && (titulo.length < LIMITES.titulo.min || titulo.length > LIMITES.titulo.max)) {
    avisos.push(
      `${nombre}: título de ${titulo.length} caracteres (recomendado ${LIMITES.titulo.min}-${LIMITES.titulo.max})`
    )
  }
  if (
    descripcion &&
    (descripcion.length < LIMITES.descripcion.min || descripcion.length > LIMITES.descripcion.max)
  ) {
    avisos.push(
      `${nombre}: descripción de ${descripcion.length} caracteres (recomendado ${LIMITES.descripcion.min}-${LIMITES.descripcion.max})`
    )
  }

  // Imágenes sin alt: las decorativas llevan alt="" y aria-hidden, y esas pasan.
  const sinAlt = (html.match(/<img(?![^>]*\salt=)[^>]*>/g) || []).length
  exigir(sinAlt === 0, `${nombre}: ${sinAlt} imagen(es) sin atributo alt`)
}

// -------------------------------------------------------------- resultado
console.log(`\nMetadatos — ${paginas.length} páginas revisadas\n`)

if (avisos.length) {
  console.log('Avisos:')
  for (const a of avisos) console.log(`  · ${a}`)
  console.log('')
}

if (fallos.length) {
  console.error('✖ Fallos:')
  for (const f of fallos) console.error(`  · ${f}`)
  console.error('')
  process.exit(1)
}

console.log('✓ Todas las páginas tienen título, descripción, canónica, Open Graph,')
console.log('  Twitter Card, idioma declarado, un solo h1 y todas las imágenes con alt.')
console.log('✓ Los cinco iconos existen.\n')
