import Image from 'next/image'
import Link from 'next/link'
import { Hero, Eyebrow } from '@/components/Hero'
import { Revelar } from '@/components/Revelar'
import { Instituciones } from '@/components/Instituciones'
import { Certificaciones } from '@/components/Certificaciones'

const PILARES = [
  'Cultivo sostenible',
  'Agricultura industrial',
  'Innovación y desarrollo',
  'Materiales y construcción',
  'Visión global',
]

const PUERTAS = [
  {
    href: '/canamiza',
    numero: '01',
    titulo: 'Cañamiza triturada',
    para: 'Caballerizas · Fincas · Agroveterinarias',
    detalle: 'Cama natural de cáñamo, con trazabilidad hasta la parcela.',
  },
  {
    href: '/semilla',
    numero: '02',
    titulo: 'Semilla certificada',
    para: 'Permisionarios de cáñamo',
    detalle: 'Futura 75 y Fedora 17, con respaldo documental de cada lote.',
  },
]

export default function PaginaInicio() {
  return (
    <>
      {/* ------------------------------------------------------------- hero */}
      <Hero
        imagen="/fotos/cultivo-video-poster.jpg"
        video="/video/cultivo.mp4"
        alt="Cultivo de cáñamo industrial de Klegium en San Isidro de San Ramón"
        prioridad
      >
        <Revelar desde="escala">
          <Image
            src="/marca/isotipo-claro.png"
            alt=""
            aria-hidden="true"
            width={384}
            height={457}
            priority
            className="mb-8 h-20 w-auto opacity-90 sm:h-24"
          />
        </Revelar>

        <Revelar retraso={120}>
          <h1 className="text-[clamp(2.75rem,11vw,7.5rem)] font-semibold leading-[0.95] tracking-[0.18em] text-[var(--color-beige)]">
            KLEGIUM
          </h1>
        </Revelar>

        <Revelar retraso={260}>
          <p className="mt-6 max-w-2xl text-balance text-xl leading-snug text-[var(--color-verde-hoja)] sm:text-2xl">
            Cultivamos el presente, construimos el futuro.
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-beige)]/90">
            Cáñamo industrial sembrado en San Isidro de San Ramón, Costa Rica.
            Con autorización del MAG y trazabilidad completa desde la semilla.
          </p>
        </Revelar>

        <Revelar retraso={400}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/canamiza"
              className="rounded-sm bg-[var(--color-verde-hoja)] px-8 py-4 font-semibold text-[var(--color-verde-profundo)] transition-transform duration-300 hover:-translate-y-1"
            >
              Cañamiza para cama animal
            </Link>
            <Link
              href="/red"
              className="rounded-sm border border-[var(--color-beige)]/40 px-8 py-4 font-semibold text-[var(--color-beige)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-verde-hoja)] hover:text-[var(--color-verde-hoja)]"
            >
              Tengo un terreno
            </Link>
          </div>
        </Revelar>
      </Hero>

      {/* ----------------------------------------------------------- origen */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-32">
          <Revelar>
            <Eyebrow>Nuestro origen</Eyebrow>
            <p className="mt-10 text-balance text-2xl font-light leading-[1.5] sm:text-[2rem]">
              Klegium nace de la unión de personas con una visión común. Cada uno
              aporta su talento, su esfuerzo y su compromiso.{' '}
              <span className="font-semibold text-[var(--color-verde-hoja)]">
                Juntos cultivamos oportunidades y construimos un legado que
                trascienda generaciones.
              </span>
            </p>
          </Revelar>

          <Revelar retraso={200}>
            <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--color-salvia)]/25 pt-8 text-sm uppercase tracking-[0.15em] text-[var(--color-salvia)]">
              {PILARES.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </Revelar>
        </div>
      </section>

      {/* --------------------------------------------------------- problema */}
      <section className="relative isolate overflow-hidden bg-[var(--color-negro)] text-[var(--color-beige)]">
        <Image
          src="/fotos/cultivo-verde.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="animacion-deriva -z-10 object-cover opacity-25"
        />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <Revelar>
            <Eyebrow>El problema que atacamos</Eyebrow>
          </Revelar>

          <div className="mt-12 grid gap-14 md:grid-cols-[auto_1fr] md:items-start md:gap-20">
            <Revelar desde="izquierda">
              <p className="text-[clamp(5rem,18vw,11rem)] font-semibold leading-[0.8] tracking-tight text-[var(--color-verde-hoja)]">
                37%
              </p>
            </Revelar>

            <Revelar desde="derecha" retraso={150}>
              <div className="max-w-xl">
                <p className="text-2xl leading-snug">
                  de las emisiones globales de CO₂ vienen de la industria de la
                  construcción. Y casi la mitad de toda la extracción de
                  materiales del planeta.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-[var(--color-salvia)]">
                  UNEP / GlobalABC — <i>Global Status Report for Buildings and
                  Construction 2025-2026</i>
                </p>

                <div className="mt-10 border-l-2 border-[var(--color-verde-hoja)] pl-6">
                  <p className="text-lg leading-relaxed">
                    El cáñamo captura entre{' '}
                    <strong className="text-[var(--color-verde-hoja)]">
                      8 y 15 toneladas de CO₂ por hectárea
                    </strong>
                    . Un bosque captura entre 2 y 6 al año.
                  </p>
                  <p className="mt-4 leading-relaxed text-[var(--color-salvia)]">
                    Por eso existe este proyecto: no sembrar una planta más, sino
                    construir con ella una cadena que sustituya materiales de
                    alta huella.
                  </p>
                </div>
              </div>
            </Revelar>
          </div>
        </div>
      </section>

      {/* ------------------------------------------ red de agricultores */}
      <section className="relative isolate overflow-hidden bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <Image
          src="/fotos/plantas-desde-abajo.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-verde-profundo)] via-[var(--color-verde-profundo)]/85 to-[var(--color-verde-profundo)]/40" />

        <div className="mx-auto max-w-6xl px-4 py-28 sm:py-36">
          <Revelar>
            <Eyebrow>Una invitación · San Ramón</Eyebrow>
            <h2 className="mt-6 max-w-3xl text-balance text-[clamp(2.25rem,6.5vw,4.25rem)] font-semibold leading-[1.03]">
              Su terreno puede volver a producir
            </h2>
            <p className="mt-8 max-w-xl text-xl leading-relaxed">
              Hay tierra parada en el cantón. Nosotros tenemos la autorización,
              la semilla y el conocimiento del cultivo.{' '}
              <span className="text-[var(--color-verde-hoja)]">
                Lo que falta es juntar las dos cosas.
              </span>
            </p>
          </Revelar>

          <div className="mt-16 grid gap-px bg-[var(--color-salvia)]/25 sm:grid-cols-2">
            {[
              {
                n: '01',
                t: 'Usted presta el terreno',
                d: 'Nosotros hacemos todo el trabajo. Usted recibe un pago por el uso de su tierra.',
              },
              {
                n: '02',
                t: 'Usted administra su terreno',
                d: 'Lleva el cultivo en su propia tierra y nosotros le damos todo: semilla, insumos, acompañamiento y la compra de la cosecha.',
              },
            ].map((m, i) => (
              <Revelar key={m.n} retraso={i * 140} className="h-full">
                <div className="h-full bg-[var(--color-verde-profundo)] p-8 sm:p-10">
                  <span className="text-sm tabular-nums tracking-widest text-[var(--color-salvia)]/60">
                    {m.n}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-[var(--color-verde-hoja)]">
                    {m.t}
                  </h3>
                  <p className="mt-4 leading-relaxed">{m.d}</p>
                </div>
              </Revelar>
            ))}
          </div>

          <Revelar retraso={280}>
            <Link
              href="/red"
              className="mt-12 inline-block rounded-sm bg-[var(--color-verde-hoja)] px-8 py-4 font-semibold text-[var(--color-verde-profundo)] transition-transform duration-300 hover:-translate-y-1"
            >
              Ver cómo funciona
            </Link>
          </Revelar>
        </div>
      </section>

      {/* ---------------------------------------------------------- puertas */}
      <section className="bg-[var(--color-beige)]">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
              Lo que vendemos
            </p>
          </Revelar>

          <div className="mt-12 border-t border-[var(--color-verde-bosque)]/25">
            {PUERTAS.map((p, i) => (
              <Revelar key={p.href} retraso={i * 120}>
                <Link
                  href={p.href}
                  className="group grid items-baseline gap-4 border-b border-[var(--color-verde-bosque)]/25 py-10 transition-colors duration-300 hover:bg-[var(--color-salvia)]/25 md:grid-cols-[5rem_1fr_auto] md:gap-10"
                >
                  <span className="text-sm tabular-nums tracking-widest text-[var(--color-verde-bosque)]/60">
                    {p.numero}
                  </span>
                  <div>
                    <h3 className="text-3xl font-semibold transition-colors duration-300 group-hover:text-[var(--color-verde-bosque)] sm:text-4xl">
                      {p.titulo}
                    </h3>
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--color-verde-bosque)]">
                      {p.para}
                    </p>
                    <p className="mt-4 max-w-md leading-relaxed">{p.detalle}</p>
                  </div>
                  <span className="text-2xl text-[var(--color-verde-bosque)] transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </Link>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      <Certificaciones />
      <Instituciones fondo="claro" />
    </>
  )
}
