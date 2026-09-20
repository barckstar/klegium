import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { z } from 'zod'

const DIRECTORIO = join(process.cwd(), 'content', 'data')

/**
 * Lee un JSON de content/data y lo valida contra su esquema.
 * Si algo no cumple, revienta el build — que es lo que queremos: un dato mal
 * formado se descubre al compilar, no en producción.
 */
function cargar<T>(archivo: string, esquema: z.ZodType<T>): T {
  const crudo = readFileSync(join(DIRECTORIO, archivo), 'utf8')
  const resultado = esquema.safeParse(JSON.parse(crudo))

  if (!resultado.success) {
    const detalle = resultado.error.issues
      .map((i) => `  · ${i.path.join('.') || '(raíz)'}: ${i.message}`)
      .join('\n')
    throw new Error(`content/data/${archivo} no cumple su esquema:\n${detalle}`)
  }

  return resultado.data
}

/* ------------------------------------------------------------------ cañamiza */

const beneficioSchema = z.object({
  id: z.string(),
  titulo: z.string(),
  detalle: z.string(),
  /** true = afirmación todavía sin fuente. No se publica. */
  requiereFuente: z.boolean(),
})

const animalSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  contexto: z.string(),
  ventajas: z.array(z.string()).min(1),
  /** Se publican. Decir las desventajas de frente es lo que hace creíbles las ventajas. */
  desventajas: z.array(z.string()).min(1),
  foto: z.string().nullable(),
})

const canamizaSchema = z.object({
  nombre: z.string(),
  nombreComercial: z.string(),
  /** true = todavía no está decidido. La web lo muestra como nombre de línea, no como marca registrada. */
  nombreComercialProvisional: z.boolean(),
  subtitulo: z.string(),
  descripcion: z.string(),
  beneficios: z.array(beneficioSchema).min(1),
  animales: z.array(animalSchema).min(1),
  canales: z.array(z.string()).min(1),
  notaHonestidad: z.string(),
})

export type Animal = z.infer<typeof animalSchema>

export type Beneficio = z.infer<typeof beneficioSchema>
export type Canamiza = z.infer<typeof canamizaSchema>

export function getCanamiza(): Canamiza {
  return cargar('canamiza.json', canamizaSchema)
}

/**
 * Solo los beneficios que hoy se pueden respaldar.
 *
 * Las afirmaciones cuantificadas y las de salud animal del flyer todavía no
 * tienen fuente. En un papel impreso el riesgo es bajo; en una página indexada
 * y citable por buscadores e IA, cualquiera las verifica. Se publican cuando
 * exista la fuente, cambiando el flag en canamiza.json.
 */
export function beneficiosPublicables(datos: Canamiza): Beneficio[] {
  return datos.beneficios.filter((b) => !b.requiereFuente)
}

/* ----------------------------------------------------------------------- red */

const impactoSchema = z.object({
  id: z.string(),
  titulo: z.string(),
  resumen: z.string(),
  puntos: z.array(z.string()).min(1),
})

const redSchema = z.object({
  propuesta: z.object({
    eyebrow: z.string(),
    titulo: z.string(),
    entrada: z.string(),
    cadena: z.array(z.string()).min(2),
    cierre: z.string(),
  }),
  impactos: z.array(impactoSchema).min(1),
  consulta: z.object({
    titulo: z.string(),
    entrada: z.string(),
    puntos: z.array(z.string()).min(1),
    cierre: z.string(),
  }),
  advertencia: z.string(),
})

export type Red = z.infer<typeof redSchema>

export function getRed(): Red {
  return cargar('red.json', redSchema)
}

/* ------------------------------------------------------------------ permisos */

const permisosSchema = z.object({
  otorgados: z.number().int().positive(),
  total: z.number().int().positive(),
  resumen: z.string(),
})

export function getPermisos() {
  return cargar('permisos.json', permisosSchema)
}

/* -------------------------------------------------------------- instituciones */

const institucionSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  /** La relación real, no un genérico "nos apoyan". */
  relacion: z.string(),
  logo: z.string().nullable(),
})

export type Institucion = z.infer<typeof institucionSchema>

export function getInstituciones(): Institucion[] {
  return cargar('instituciones.json', z.array(institucionSchema).min(1))
}

/* ----------------------------------------------------------------- fuentes */

const fuenteSchema = z.object({
  titulo: z.string(),
  autor: z.string(),
  url: z.string().url(),
  /** Qué afirmación concreta respalda. Sin esto, la lista de enlaces no prueba nada. */
  respalda: z.string(),
})

const fuentesSchema = z.object({
  canamiza: z.array(fuenteSchema).min(1),
  ambiental: z.array(fuenteSchema).min(1),
})

export type Fuente = z.infer<typeof fuenteSchema>

export function getFuentes() {
  return cargar('fuentes.json', fuentesSchema)
}

/* --------------------------------------------------------------------- faq */

const faqSchema = z.array(
  z.object({
    grupo: z.string(),
    preguntas: z.array(z.object({ p: z.string(), r: z.string() })).min(1),
  })
).min(1)

export type GrupoFaq = z.infer<typeof faqSchema>[number]

export function getFaq(): GrupoFaq[] {
  return cargar('faq.json', faqSchema)
}


/* ------------------------------------------------------------------- equipo */

const personaSchema = z.object({
  nombre: z.string(),
  rol: z.string(),
  oficios: z.array(z.string()),
})

const equipoSchema = z.object({
  fundadores: z.array(personaSchema).min(1),
  /** Asesoría especializada en cáñamo. Vacío mientras no haya nombres
   *  confirmados: la sección no se renderiza si está vacía. */
  expertos: z.array(personaSchema),
})

export function getEquipo() {
  return cargar('equipo.json', equipoSchema)
}
