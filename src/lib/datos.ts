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

const modalidadSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  resumen: z.string(),
  precio: z
    .object({
      monto: z.number().positive(),
      moneda: z.literal('CRC'),
      etiqueta: z.string(),
      incluye: z.string(),
    })
    .nullable(),
  aporta: z.array(z.string()).min(1),
  recibe: z.array(z.string()).min(1),
  aCargoDeKlegium: z.array(z.string()).min(1),
})

const redSchema = z.object({
  modalidades: z.array(modalidadSchema).min(1),
  /** Interruptor único: en false, ningún precio de la red se muestra. */
  publicarPrecio: z.boolean(),
  loQueNoEs: z.array(z.string()).min(1),
  responsabilidad: z.object({
    titulo: z.string(),
    entrada: z.string(),
    puntos: z.array(z.object({ titulo: z.string(), detalle: z.string() })).min(1),
    cierre: z.string(),
  }),
})

/** Formato de colones costarricenses, sin decimales. */
export function colones(monto: number): string {
  return new Intl.NumberFormat('es-CR', {
    style: 'currency',
    currency: 'CRC',
    maximumFractionDigits: 0,
  }).format(monto)
}

export type Modalidad = z.infer<typeof modalidadSchema>
export type Red = z.infer<typeof redSchema>

export function getRed(): Red {
  return cargar('red.json', redSchema)
}

/* ------------------------------------------------------------------ permisos */

const permisoSchema = z.object({
  numero: z.number().int().min(1).max(9),
  actividad: z.string(),
  estado: z.enum(['otorgado', 'en-tramite', 'pendiente']),
  entidad: z.string(),
})

export type Permiso = z.infer<typeof permisoSchema>

export function getPermisos(): Permiso[] {
  return cargar('permisos.json', z.array(permisoSchema).length(9))
}

/* -------------------------------------------------------------- instituciones */

const institucionSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  sigla: z.string(),
  /** La relación real, no un genérico "nos apoyan". */
  relacion: z.string(),
  logo: z.string().nullable(),
})

export type Institucion = z.infer<typeof institucionSchema>

export function getInstituciones(): Institucion[] {
  return cargar('instituciones.json', z.array(institucionSchema).min(1))
}

/* ----------------------------------------------------------- certificaciones */

const certificacionSchema = z.object({
  id: z.string(),
  nombre: z.string(),
  estado: z.enum(['en-proceso', 'obtenida', 'por-definir']),
  detalle: z.string(),
})

export type Certificacion = z.infer<typeof certificacionSchema>

export function getCertificaciones(): Certificacion[] {
  return cargar('certificaciones.json', z.array(certificacionSchema).min(1))
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

/* ------------------------------------------------------ requisitos terreno */

const requisitoSchema = z.object({
  numero: z.string(),
  titulo: z.string(),
  obligatorio: z.boolean(),
  detalle: z.string(),
  comoSaber: z.string(),
})

export type Requisito = z.infer<typeof requisitoSchema>

export function getRequisitos(): Requisito[] {
  return cargar('requisitos-terreno.json', z.array(requisitoSchema).min(1))
}
