import type { Metadata } from 'next'
import Image from 'next/image'
import { Formulario } from '@/features/formulario/Formulario'

export const metadata: Metadata = {
  title: 'Semilla de cáñamo industrial certificada',
  description:
    'Semilla de cáñamo industrial de variedades Futura 75 y Fedora 17, importada por la vía legal completa y con trazabilidad documental de cada lote.',
}

const TRAZABILIDAD = [
  {
    titulo: 'Origen certificado',
    detalle:
      'Variedades certificadas en la Unión Europea, importadas con certificado fitosanitario de la autoridad del país de origen.',
  },
  {
    titulo: 'Importación legal completa',
    detalle:
      'Registro de importador de productos de origen vegetal ante el Servicio Fitosanitario del Estado, con todos los trámites aduanales al día.',
  },
  {
    titulo: 'Cadena documentada',
    detalle:
      'De la variedad al lote, y del lote a la parcela. Cada movimiento queda registrado.',
  },
  {
    titulo: 'Respaldo ante una inspección',
    detalle:
      'Quien nos compra puede demostrar de dónde salió su material. Eso protege su propio permiso.',
  },
]

export default function PaginaSemilla() {
  return (
    <>
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold sm:text-5xl">
              Semilla con trazabilidad
            </h1>
            <p className="mt-6 text-lg leading-relaxed">
              Variedades <strong>Futura 75</strong> y <strong>Fedora 17</strong>,
              certificadas en la Unión Europea e ingresadas a Costa Rica por la
              vía legal completa.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-salvia)]">
              En un mercado donde el comprador se juega su propio permiso en cada
              compra, la trazabilidad no es un adorno: es lo que hace que la
              compra sea segura.
            </p>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg">
            <Image
              src="/fotos/siembra-bandejas.jpeg"
              alt="Siembra de semilla de cáñamo en bandejas de germinación bajo malla de sombra"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold">Qué respalda nuestra semilla</h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {TRAZABILIDAD.map((t) => (
            <li
              key={t.titulo}
              className="rounded-lg border border-[var(--color-salvia)] bg-white/40 p-6"
            >
              <h3 className="font-semibold text-[var(--color-verde-bosque)]">
                {t.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed">{t.detalle}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Sin el permiso de venta de semilla de la ONS no se puede vender. La
          página informa y recoge interés; no ofrece precio ni compra. */}
      <section className="bg-[var(--color-salvia)]/40">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-2xl font-semibold">
            Todavía no estamos vendiendo semilla
          </h2>
          <p className="mt-4 leading-relaxed">
            La venta de semilla para siembra es un régimen aparte, a cargo de la
            Oficina Nacional de Semillas, y ese permiso está en trámite. Hasta
            que salga, no vendemos semilla ni damos precios.
          </p>
          <p className="mt-4 leading-relaxed">
            Si le interesa, déjenos sus datos y le avisamos en cuanto podamos
            vender. Antes de cualquier venta revisamos el permiso del comprador
            —así lo exige la ley y así lo hacemos.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold">Avíseme cuando esté disponible</h2>
        <div className="mt-10">
          <Formulario
            asunto="Interés en semilla"
            textoBoton="Dejar mis datos"
            mensajeExito="Listo. Le avisamos en cuanto tengamos el permiso de venta de la ONS."
            campos={[
              { nombre: 'nombre', etiqueta: 'Nombre', requerido: true },
              { nombre: 'contacto', etiqueta: 'Correo o teléfono', requerido: true },
              {
                nombre: 'permiso',
                etiqueta: '¿Tiene permiso para comprar semilla de cáñamo?',
                tipo: 'select',
                opciones: ['Sí', 'No', 'En trámite'],
                ayuda:
                  'No pedimos el número acá. La validación la hacemos después, directamente con usted.',
              },
              { nombre: 'mensaje', etiqueta: 'Mensaje', tipo: 'area' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
