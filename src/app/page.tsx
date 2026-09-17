import Image from 'next/image'
import Link from 'next/link'
import { Hero, Eyebrow } from '@/components/Hero'
import { Instituciones } from '@/components/Instituciones'

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
    href: '/red',
    numero: '02',
    titulo: 'Red de agricultores',
    para: 'Dueños de terreno en San Ramón',
    detalle: 'Su tierra produciendo, con o sin que usted entre al cultivo.',
  },
  {
    href: '/semilla',
    numero: '03',
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
        imagen="/fotos/hero-terreno-atardecer.jpg"
        alt="El terreno de cultivo de cáñamo en San Isidro de San Ramón al atardecer, con el valle al fondo"
        prioridad
      >
        <h1 className="text-[clamp(2.75rem,11vw,7.5rem)] font-semibold leading-[0.95] tracking-[0.18em] text-[var(--color-beige)]">
          KLEGIUM
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-xl leading-snug text-[var(--color-verde-hoja)] sm:text-2xl">
          Cultivamos el presente, construimos el futuro.
        </p>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-beige)]/90">
          Cáñamo industrial sembrado en San Isidro de San Ramón, Costa Rica.
          Con autorización del MAG y trazabilidad completa desde la semilla.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/canamiza"
            className="rounded-sm bg-[var(--color-verde-hoja)] px-8 py-4 font-semibold text-[var(--color-verde-profundo)] transition-transform hover:-translate-y-0.5"
          >
            Cañamiza para cama animal
          </Link>
          <Link
            href="/red"
            className="rounded-sm border border-[var(--color-beige)]/40 px-8 py-4 font-semibold text-[var(--color-beige)] backdrop-blur-sm transition-colors hover:border-[var(--color-verde-hoja)] hover:text-[var(--color-verde-hoja)]"
          >
            Tengo un terreno
          </Link>
        </div>
      </Hero>

      {/* ----------------------------------------------------------- origen */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-32">
          <Eyebrow>Nuestro origen</Eyebrow>
          <p className="mt-10 text-balance text-2xl font-light leading-[1.5] sm:text-[2rem]">
            Klegium nace de la unión de personas con una visión común. Cada uno
            aporta su talento, su esfuerzo y su compromiso.{' '}
            <span className="font-semibold text-[var(--color-verde-hoja)]">
              Juntos cultivamos oportunidades y construimos un legado que
              trascienda generaciones.
            </span>
          </p>

          <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-[var(--color-salvia)]/25 pt-8 text-sm uppercase tracking-[0.15em] text-[var(--color-salvia)]">
            {PILARES.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* --------------------------------------------------------- problema */}
      <section className="relative isolate overflow-hidden bg-[var(--color-negro)] text-[var(--color-beige)]">
        <Image
          src="/fotos/cultivo-verde.jpg"
          alt="Cultivo de cáñamo industrial en crecimiento"
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-25"
        />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <Eyebrow>El problema que atacamos</Eyebrow>

          <div className="mt-12 grid gap-14 md:grid-cols-[auto_1fr] md:items-start md:gap-20">
            <p className="text-[clamp(5rem,18vw,11rem)] font-semibold leading-[0.8] tracking-tight text-[var(--color-verde-hoja)]">
              37%
            </p>

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
                  construir con ella una cadena que sustituya materiales de alta
                  huella.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- puertas */}
      <section className="bg-[var(--color-beige)]">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Eyebrow>
            <span className="text-[var(--color-verde-bosque)]">
              Cómo trabajar con nosotros
            </span>
          </Eyebrow>

          <div className="mt-12 border-t border-[var(--color-verde-bosque)]/25">
            {PUERTAS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group grid items-baseline gap-4 border-b border-[var(--color-verde-bosque)]/25 py-10 transition-colors hover:bg-[var(--color-salvia)]/25 md:grid-cols-[5rem_1fr_auto] md:gap-10"
              >
                <span className="text-sm tabular-nums tracking-widest text-[var(--color-verde-bosque)]/60">
                  {p.numero}
                </span>

                <div>
                  <h3 className="text-3xl font-semibold transition-colors group-hover:text-[var(--color-verde-bosque)] sm:text-4xl">
                    {p.titulo}
                  </h3>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[var(--color-verde-bosque)]">
                    {p.para}
                  </p>
                  <p className="mt-4 max-w-md leading-relaxed">{p.detalle}</p>
                </div>

                <span className="text-2xl text-[var(--color-verde-bosque)] transition-transform group-hover:translate-x-2">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Instituciones fondo="claro" />
    </>
  )
}
