import type { Metadata } from 'next'
import { Hero, Eyebrow } from '@/components/Hero'
import Image from 'next/image'
import { Instituciones } from '@/components/Instituciones'
import { Revelar } from '@/components/Revelar'
import { Formulario } from '@/features/formulario/Formulario'

export const metadata: Metadata = {
  title: 'Semilla de cáñamo industrial certificada',
  description:
    'Semilla de cáñamo industrial Futura 75 y Fedora 17, certificada en la Unión Europea, ingresada a Costa Rica por la vía legal completa y con trazabilidad documental de cada lote.',
}

const TRAZABILIDAD = [
  {
    titulo: 'Origen certificado',
    detalle:
      'Variedades certificadas en la Unión Europea, con certificado fitosanitario emitido por la autoridad del país de origen.',
  },
  {
    titulo: 'Importación legal completa',
    detalle:
      'Registro de importador ante el Servicio Fitosanitario del Estado y trámites aduanales al día. Sin atajos.',
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
      <Hero
        imagen="/fotos/vivero-bolsas.jpg"
        alt="Vivero de Klegium con bolsas de almácigo de cáñamo industrial en San Ramón"
        prioridad
        deriva
      >
        <Eyebrow>Futura 75 · Fedora 17</Eyebrow>
        <h1 className="mt-6 max-w-3xl text-balance text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.02] text-[var(--color-beige)]">
          Semilla que se puede rastrear
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-beige)]/90">
          En un mercado donde el comprador se juega su propio permiso en cada
          compra, la trazabilidad no es un adorno: es lo que hace que la compra
          sea segura.
        </p>
      </Hero>

      {/* banda de variedades: el dato duro, grande y con color */}
      <section className="bg-[var(--color-verde-hoja)] text-[var(--color-verde-profundo)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-3">
          {[
            { dato: 'Futura 75', pie: 'Variedad certificada UE' },
            { dato: 'Fedora 17', pie: 'Variedad certificada UE' },
            { dato: '100%', pie: 'De los lotes con respaldo documental' },
          ].map((x, i) => (
            <Revelar key={x.dato} retraso={i * 110}>
              <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {x.dato}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] opacity-70">
                {x.pie}
              </p>
            </Revelar>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24">
        <Revelar>
          <Eyebrow>
            <span className="text-[var(--color-verde-bosque)]">
              Qué respalda nuestra semilla
            </span>
          </Eyebrow>
        </Revelar>

        <div className="mt-12 grid gap-px bg-[var(--color-verde-bosque)]/20 sm:grid-cols-2">
          {TRAZABILIDAD.map((t, i) => (
            <Revelar key={t.titulo} retraso={i * 100} className="h-full">
            <div className="h-full bg-[var(--color-beige)] p-8 transition-colors duration-300 hover:bg-[var(--color-salvia)]/30 sm:p-10">
              <span className="text-sm tabular-nums tracking-widest text-[var(--color-verde-bosque)]/60">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-[var(--color-verde-bosque)]">
                {t.titulo}
              </h3>
              <p className="mt-3 leading-relaxed">{t.detalle}</p>
            </div>
            </Revelar>
          ))}
        </div>
      </section>

      {/* Sin el permiso de venta de la ONS no se vende. La página informa y
          recoge interés: no da precio ni ofrece compra. */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-3xl px-4 py-24">
          <Eyebrow>Importante</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Todavía no estamos vendiendo semilla
          </h2>
          <p className="mt-8 text-lg leading-relaxed">
            La venta de semilla para siembra es un régimen aparte, a cargo de la
            Oficina Nacional de Semillas, y ese permiso está en trámite. Hasta
            que salga no vendemos semilla ni damos precios.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-salvia)]">
            Si le interesa, déjenos sus datos y le avisamos apenas podamos
            vender. Antes de cualquier venta revisamos el permiso del comprador
            —así lo exige la ley y así lo hacemos.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-salvia)]/30">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
              De esta semilla sale esto
            </p>
          </Revelar>
          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              ['/fotos/almacigo-bandeja.jpg', 'Bandeja de germinación con plántulas de cáñamo'],
              ['/fotos/planta-sana-1.jpg', 'Plántula de cáñamo sana en bolsa'],
              ['/fotos/planta-sana-2.jpg', 'Planta de cáñamo con hojas bien formadas'],
              ['/fotos/cultivo-verde.jpg', 'Cultivo de cáñamo establecido'],
            ].map(([src, alt], i) => (
              <Revelar key={src} retraso={i * 90} desde="escala">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-110"
                  />
                </div>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-24">
        <Eyebrow>
          <span className="text-[var(--color-verde-bosque)]">Lista de espera</span>
        </Eyebrow>
        <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
          Avíseme cuando esté disponible
        </h2>

        <div className="mt-12">
          <Formulario
            asunto="Interés en semilla"
            textoBoton="Dejar mis datos"
            mensajeExito="Listo. Le avisamos apenas tengamos el permiso de venta de la ONS."
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

      <Instituciones fondo="claro" />
    </>
  )
}
