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
  aporta: z.array(z.string()).min(1),
  recibe: z.array(z.string()).min(1),
  aCargoDeKlegium: z.array(z.string()).min(1),
})

const redSchema = z.object({
  modalidades: z.array(modalidadSchema).min(1),
  loQueNoEs: z.array(z.string()).min(1),
})

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
