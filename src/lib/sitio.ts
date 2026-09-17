import type { Metadata } from 'next'

/**
 * Identidad del sitio en un solo lugar.
 *
 * Los metadatos de cada página se derivan de acá. Si el dominio cambia, se
 * cambia una vez: la URL canónica, el sitemap, el JSON-LD y las tarjetas de
 * redes salen todos de esta constante.
 */
export const SITIO = {
  nombre: 'Klegium',
  lema: 'Cáñamo industrial en Costa Rica',
  url: 'https://klegium.com',
  colorTema: '#1D2A1E',
  descripcion:
    'Cáñamo industrial cultivado en San Ramón, Costa Rica, con autorización del MAG y trazabilidad completa. Cañamiza, red de agricultores y semilla certificada.',
  palabrasClave: [
    'cáñamo industrial',
    'cáñamo Costa Rica',
    'cañamiza',
    'hemp hurd',
    'cama para caballos',
    'cama animal natural',
    'semilla de cáñamo',
    'Futura 75',
    'San Ramón',
    'hempcrete',
    'Ley 10113',
  ],
} as const

/** Rutas del sitio, con su prioridad para el sitemap. */
export const RUTAS = [
  { ruta: '/', prioridad: 1.0 },
  { ruta: '/canamiza', prioridad: 0.9 },
  { ruta: '/red', prioridad: 0.9 },
  { ruta: '/semilla', prioridad: 0.8 },
  { ruta: '/nosotros', prioridad: 0.7 },
  { ruta: '/preguntas', prioridad: 0.7 },
  { ruta: '/contacto', prioridad: 0.6 },
  { ruta: '/privacidad', prioridad: 0.2 },
] as const

/**
 * Construye los metadatos de una página.
 *
 * Existe porque en Next el `openGraph` de una página **reemplaza** al del
 * layout en vez de fusionarse: definir solo `title` ahí deja la página sin
 * `og:image`. Pasando por esta función es imposible olvidarlo.
 */
export function metadatosDe({
  titulo,
  descripcion,
  ruta,
}: {
  titulo: string
  descripcion: string
  ruta: string
}): Metadata {
  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: ruta },
    openGraph: {
      type: 'website',
      locale: 'es_CR',
      siteName: SITIO.nombre,
      title: `${titulo} | ${SITIO.nombre}`,
      description: descripcion,
      url: ruta,
      images: [{ url: '/opengraph-image.jpg', width: 1200, height: 630, alt: SITIO.nombre }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${titulo} | ${SITIO.nombre}`,
      description: descripcion,
      images: ['/twitter-image.jpg'],
    },
  }
}
