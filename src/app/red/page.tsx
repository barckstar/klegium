import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero, Eyebrow } from '@/components/Hero'
import { Revelar } from '@/components/Revelar'
import { Faq, FaqJsonLd } from '@/components/Faq'
import { getRed, getRequisitos, colones } from '@/lib/datos'
import { BloqueFormulario } from '@/features/formulario/BloqueFormulario'

export const metadata: Metadata = {
  title: 'Red de agricultores',
  description:
    'Su terreno de San Ramón puede volver a producir. Dos formas de sumarse a la red de cáñamo industrial de Klegium, con las reglas y los requisitos por delante.',
}

export default function PaginaRed() {
  const { modalidades, publicarPrecio, loQueNoEs, responsabilidad } = getRed()
  const requisitos = getRequisitos()

  return (
    <>
      <FaqJsonLd grupos={['Red de agricultores']} />

      <Hero
        imagen="/fotos/trabajo-en-campo.jpg"
        alt="Trabajo de preparación del terreno de cáñamo en San Ramón, con las montañas al fondo"
        prioridad
        deriva
      >
        <Revelar>
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
            className="mt-10 inline-block rounded-sm bg-[var(--color-verde-hoja)] px-8 py-4 font-semibold text-[var(--color-verde-profundo)] transition-transform duration-300 hover:-translate-y-1"
          >
            Conversemos
          </a>
        </Revelar>
      </Hero>

      {/* -------------------------------------------------------- invitación */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-4xl px-4 py-24 text-balance">
          <Revelar>
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
          </Revelar>
        </div>
      </section>

      {/* -------------------------------------------------------- modalidades */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <Revelar>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
            Dos formas de participar
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Según cuánto quiera meterse en el cultivo
          </h2>
        </Revelar>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {modalidades.map((m, indice) => (
            <Revelar key={m.id} retraso={indice * 140} className="h-full">
              <article className="flex h-full flex-col rounded-sm bg-[var(--color-salvia)]/25 p-8 ring-1 ring-[var(--color-verde-bosque)]/20 sm:p-10">
                <span className="text-sm tabular-nums tracking-widest text-[var(--color-verde-bosque)]/60">
                  0{indice + 1}
                </span>
                <h3 className="mt-4 text-3xl font-semibold text-[var(--color-verde-bosque)]">
                  {m.nombre}
                </h3>
                <p className="mt-4 text-lg leading-relaxed">{m.resumen}</p>

                {publicarPrecio && m.precio && (
                  <div className="mt-8 rounded-sm bg-[var(--color-verde-profundo)] p-6 text-[var(--color-beige)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-verde-hoja)]">
                      {m.precio.etiqueta}
                    </p>
                    <p className="mt-2 text-4xl font-semibold">
                      {colones(m.precio.monto)}
                    </p>
                    <p className="mt-2 text-sm text-[var(--color-salvia)]">
                      {m.precio.incluye}
                    </p>
                  </div>
                )}

                <div className="mt-8 space-y-8">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-verde-bosque)]">
                      Usted aporta
                    </p>
                    <ul className="mt-4 space-y-3 leading-relaxed">
                      {m.aporta.map((x) => (
                        <li key={x} className="flex gap-3">
                          <span aria-hidden="true" className="opacity-40">—</span>
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
                          <span aria-hidden="true" className="text-[var(--color-verde-hoja)]">✓</span>
                          <span>{x}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-[var(--color-verde-bosque)]/20 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-verde-bosque)]">
                    Klegium pone
                  </p>
                  <p className="mt-3 leading-relaxed opacity-80">
                    {m.aCargoDeKlegium.join(' · ')}
                  </p>
                </div>
              </article>
            </Revelar>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------- requisitos */}
      <section className="relative isolate overflow-hidden bg-[var(--color-negro)] text-[var(--color-beige)]">
        <Image
          src="/fotos/hero-terreno-atardecer.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-20"
        />
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Revelar>
            <Eyebrow>Antes de conversar</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
              Qué necesita su terreno
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-[var(--color-salvia)]">
              Tres condiciones que no se pueden saltar y una que ayuda mucho.
              Léalas antes de escribirnos: si su finca las cumple, la
              conversación empieza mucho más adelante.
            </p>
          </Revelar>

          <div className="mt-14 grid gap-px bg-[var(--color-salvia)]/20 sm:grid-cols-2">
            {requisitos.map((r, i) => (
              <Revelar key={r.numero} retraso={i * 110} className="h-full">
                <article className="flex h-full flex-col bg-[var(--color-negro)]/80 p-8 backdrop-blur-sm sm:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm tabular-nums tracking-widest opacity-50">
                      {r.numero}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] ${
                        r.obligatorio
                          ? 'border-[var(--color-verde-hoja)] text-[var(--color-verde-hoja)]'
                          : 'border-[var(--color-salvia)]/40 text-[var(--color-salvia)]'
                      }`}
                    >
                      {r.obligatorio ? 'Necesario' : 'Opcional'}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold">{r.titulo}</h3>
                  <p className="mt-4 flex-1 leading-relaxed">{r.detalle}</p>
                  <p className="mt-6 border-t border-[var(--color-salvia)]/20 pt-4 text-sm leading-relaxed text-[var(--color-salvia)]">
                    {r.comoSaber}
                  </p>
                </article>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- responsabilidad */}
      {/* Lo más importante de la página. Va antes del formulario a propósito:
          quien escriba después de leer esto, escribe sabiendo. */}
      <section className="bg-[var(--color-verde-hoja)] text-[var(--color-verde-profundo)]">
        <div className="mx-auto max-w-4xl px-4 py-24">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] opacity-70">
              Léalo antes de empezar
            </p>
            <h2 className="mt-5 text-balance text-3xl font-semibold sm:text-4xl">
              {responsabilidad.titulo}
            </h2>
            <p className="mt-8 text-lg leading-relaxed">{responsabilidad.entrada}</p>
          </Revelar>

          <div className="mt-12 space-y-10">
            {responsabilidad.puntos.map((p, i) => (
              <Revelar key={p.titulo} retraso={i * 120}>
                <div className="border-l-4 border-[var(--color-verde-profundo)]/70 pl-6">
                  <h3 className="text-xl font-semibold">{p.titulo}</h3>
                  <p className="mt-3 leading-relaxed">{p.detalle}</p>
                </div>
              </Revelar>
            ))}
          </div>

          <Revelar retraso={200}>
            <p className="mt-12 border-t border-[var(--color-verde-profundo)]/25 pt-8 leading-relaxed">
              {responsabilidad.cierre}
            </p>
          </Revelar>
        </div>
      </section>

      {/* ----------------------------------------------------------- qué no es */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-3xl px-4 py-24">
          <Revelar>
            <Eyebrow>Para que quede claro</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold">Qué no es esto</h2>
          </Revelar>
          <ul className="mt-10 space-y-6">
            {loQueNoEs.map((x, i) => (
              <Revelar key={x} retraso={i * 100}>
                <li className="border-l-2 border-[var(--color-verde-hoja)] pl-6 text-lg leading-relaxed">
                  {x}
                </li>
              </Revelar>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------------- faq */}
      <section className="mx-auto max-w-5xl px-4 py-24">
        <Revelar>
          <h2 className="text-3xl font-semibold sm:text-4xl">Preguntas frecuentes</h2>
        </Revelar>
        <div className="mt-12">
          <Faq grupos={['Red de agricultores']} />
        </div>
      </section>

      {/* -------------------------------------------------------- conversemos */}
      <section id="conversemos" className="scroll-mt-20 bg-[var(--color-salvia)]/30">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
              Sin compromiso
            </p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              ¿Tiene terreno en San Ramón?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">
              Escríbanos y conversamos. No hay inscripción ni contrato de
              entrada: primero vemos si el terreno cumple, cuál de las dos formas
              le conviene y si las reglas le calzan.
            </p>
          </Revelar>

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
