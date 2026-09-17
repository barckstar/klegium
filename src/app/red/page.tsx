import type { Metadata } from 'next'
import Image from 'next/image'
import { getRed } from '@/lib/datos'
import { Formulario } from '@/features/formulario/Formulario'

export const metadata: Metadata = {
  title: 'Red de agricultores',
  description:
    'Ponga su terreno de San Ramón a producir cáñamo industrial. Dos modalidades: arriende su tierra, o adminístrela usted con acompañamiento técnico y la cosecha ya vendida.',
}

export default function PaginaRed() {
  const { modalidades, loQueNoEs } = getRed()

  return (
    <>
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold sm:text-5xl">
              Red de agricultores
            </h1>
            <p className="mt-6 text-lg leading-relaxed">
              San Ramón tiene terrenos que podrían volver a producir. Nosotros
              tenemos la autorización, la semilla y el conocimiento del cultivo.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--color-salvia)]">
              La idea no es que crezca una finca: es que crezca la red.
            </p>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg">
            <Image
              src="/fotos/vivero-almacigo.jpeg"
              alt="Vivero con malla de sombra y bolsas de almácigo de cáñamo en el terreno de San Ramón"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold">Dos formas de participar</h2>
        <p className="mt-3 max-w-2xl">
          Según cuánto se quiera involucrar en el cultivo. Las dos empiezan con
          una conversación y un contrato.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {modalidades.map((m) => (
            <article
              key={m.id}
              className="flex flex-col rounded-lg border border-[var(--color-verde-bosque)]/30 bg-white/40 p-8"
            >
              <h3 className="text-2xl font-semibold text-[var(--color-verde-bosque)]">
                {m.nombre}
              </h3>
              <p className="mt-3 leading-relaxed">{m.resumen}</p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-verde-bosque)]">
                    Usted aporta
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                    {m.aporta.map((x) => (
                      <li key={x} className="border-l-2 border-[var(--color-salvia)] pl-3">
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-verde-bosque)]">
                    Usted recibe
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                    {m.recibe.map((x) => (
                      <li key={x} className="border-l-2 border-[var(--color-verde-hoja)] pl-3">
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-[var(--color-salvia)] pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-verde-bosque)]">
                  Klegium pone
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed">
                  {m.aCargoDeKlegium.map((x) => (
                    <li key={x}>· {x}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Esto no es letra chica escondida: es la parte que evita que alguien
          entre creyendo que va a poder cultivar cáñamo por su cuenta. */}
      <section className="bg-[var(--color-salvia)]/40">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-2xl font-semibold">Qué no es</h2>
          <ul className="mt-6 space-y-4">
            {loQueNoEs.map((x) => (
              <li
                key={x}
                className="border-l-4 border-[var(--color-verde-bosque)] bg-[var(--color-beige)] p-4 leading-relaxed"
              >
                {x}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed opacity-80">
            Lo decimos claro a propósito: el cáñamo industrial en Costa Rica es
            una actividad regulada, y queremos que quien se acerque sepa
            exactamente en qué se está metiendo.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold">¿Tiene terreno en San Ramón?</h2>
        <p className="mt-3 max-w-xl">
          Escríbanos y conversamos. No hay compromiso ni formulario de
          inscripción: primero vemos si su terreno sirve y qué modalidad le
          conviene.
        </p>
        <div className="mt-10">
          <Formulario
            asunto="Interés en la red de agricultores"
            textoBoton="Conversemos"
            mensajeExito="Recibimos sus datos. Nos ponemos en contacto para conversar sobre su terreno."
            campos={[
              { nombre: 'nombre', etiqueta: 'Nombre', requerido: true },
              { nombre: 'contacto', etiqueta: 'Correo o teléfono', requerido: true },
              {
                nombre: 'ubicacion',
                etiqueta: 'Dónde está el terreno',
                requerido: true,
                ayuda: 'Distrito o comunidad',
              },
              {
                nombre: 'area',
                etiqueta: 'Área aproximada',
                ayuda: 'En metros cuadrados o hectáreas, aunque sea un estimado',
              },
              {
                nombre: 'modalidad',
                etiqueta: 'Qué le interesa',
                tipo: 'select',
                opciones: [
                  'Prestar el terreno y recibir un pago',
                  'Administrarlo yo, con acompañamiento',
                  'Todavía no sé, quiero saber más',
                ],
              },
              { nombre: 'mensaje', etiqueta: 'Mensaje', tipo: 'area' },
            ]}
          />
        </div>
      </section>
    </>
  )
}
