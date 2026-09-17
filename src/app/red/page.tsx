import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero, Eyebrow } from '@/components/Hero'
import { getRed } from '@/lib/datos'
import { BloqueFormulario } from '@/features/formulario/BloqueFormulario'

export const metadata: Metadata = {
  title: 'Red de agricultores',
  description:
    'Su terreno de San Ramón puede volver a producir. Dos formas de sumarse a la red de cáñamo industrial de Klegium: préstelo y cobre, o adminístrelo usted con acompañamiento y la cosecha vendida.',
}

export default function PaginaRed() {
  const { modalidades, loQueNoEs } = getRed()

  return (
    <>
      <Hero
        imagen="/fotos/trabajo-en-campo.jpg"
        alt="Trabajo de preparación del terreno de cáñamo en San Ramón, con las montañas al fondo"
        prioridad
      >
        <Eyebrow>Una invitación a los dueños de tierra de San Ramón</Eyebrow>
        <h1 className="mt-6 max-w-3xl text-balance text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.02] text-[var(--color-beige)]">
          Su terreno puede volver a producir
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-beige)]/90">
          Hay tierra parada en el cantón. Nosotros tenemos la autorización, la
          semilla y el conocimiento del cultivo. Lo que falta es juntar las dos
          cosas.
        </p>
        <a
          href="#conversemos"
          className="mt-10 inline-block rounded-sm bg-[var(--color-verde-hoja)] px-8 py-4 font-semibold text-[var(--color-verde-profundo)] transition-transform hover:-translate-y-0.5"
        >
          Conversemos
        </a>
      </Hero>

      {/* -------------------------------------------------------- invitación */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-4xl px-4 py-24 text-balance">
          <p className="text-2xl font-light leading-[1.5] sm:text-[1.75rem]">
            No buscamos comprar tierra ni alquilar por alquilar. Buscamos{' '}
            <span className="font-semibold text-[var(--color-verde-hoja)]">
              gente del cantón que quiera que su finca vuelva a dar
            </span>
            , y una actividad nueva que deje trabajo, capacitación y movimiento
            en San Ramón.
          </p>
          <p className="mt-8 text-lg leading-relaxed text-[var(--color-salvia)]">
            Empezamos con pocas parcelas, para hacerlo bien. Si le interesa,
            preferimos hablarlo con calma antes que apurar a nadie.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------- modalidades */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <Eyebrow>
          <span className="text-[var(--color-verde-bosque)]">
            Dos formas de participar
          </span>
        </Eyebrow>
        <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
          Según cuánto quiera meterse en el cultivo
        </h2>

        <div className="mt-14 grid gap-px bg-[var(--color-verde-bosque)]/20 lg:grid-cols-2">
          {modalidades.map((m, indice) => (
            <article key={m.id} className="flex flex-col bg-[var(--color-beige)] p-8 sm:p-10">
              <span className="text-sm tabular-nums tracking-widest text-[var(--color-verde-bosque)]/60">
                0{indice + 1}
              </span>
              <h3 className="mt-4 text-3xl font-semibold text-[var(--color-verde-bosque)]">
                {m.nombre}
              </h3>
              <p className="mt-4 text-lg leading-relaxed">{m.resumen}</p>

              <div className="mt-10 space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-verde-bosque)]">
                    Usted aporta
                  </p>
                  <ul className="mt-4 space-y-3 leading-relaxed">
                    {m.aporta.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span aria-hidden="true" className="text-[var(--color-salvia)]">
                          —
                        </span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-verde-bosque)]">
                    Usted recibe
                  </p>
                  <ul className="mt-4 space-y-3 leading-relaxed">
                    {m.recibe.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span aria-hidden="true" className="text-[var(--color-verde-hoja)]">
                          ✓
                        </span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 border-t border-[var(--color-verde-bosque)]/20 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-verde-bosque)]">
                  Klegium pone
                </p>
                <p className="mt-3 leading-relaxed opacity-80">
                  {m.aCargoDeKlegium.join(' · ')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Claro y a la vista, no en letra chica: es lo que evita que alguien
          entre creyendo que va a poder cultivar por su cuenta. */}
      <section className="relative isolate overflow-hidden bg-[var(--color-negro)] text-[var(--color-beige)]">
        <Image
          src="/fotos/vivero-bolsas.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-20"
        />
        <div className="mx-auto max-w-3xl px-4 py-24">
          <Eyebrow>Para que quede claro</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold">Qué no es esto</h2>
          <ul className="mt-10 space-y-6">
            {loQueNoEs.map((x) => (
              <li
                key={x}
                className="border-l-2 border-[var(--color-verde-hoja)] pl-6 text-lg leading-relaxed"
              >
                {x}
              </li>
            ))}
          </ul>
          <p className="mt-10 leading-relaxed text-[var(--color-salvia)]">
            Lo decimos de frente a propósito. El cáñamo industrial en Costa Rica
            es una actividad regulada, y preferimos que quien se acerque sepa
            exactamente dónde se está metiendo.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------- conversemos */}
      <section id="conversemos" className="scroll-mt-20 bg-[var(--color-beige)]">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Eyebrow>
            <span className="text-[var(--color-verde-bosque)]">Sin compromiso</span>
          </Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            ¿Tiene terreno en San Ramón?
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">
            Escríbanos y conversamos. No hay inscripción ni contrato de entrada:
            primero vemos si el terreno sirve y cuál de las dos formas le
            conviene más.
          </p>

          <div className="mt-12">
            <BloqueFormulario
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
                  ayuda: 'En metros o hectáreas, aunque sea a ojo',
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
        </div>
      </section>
    </>
  )
}
