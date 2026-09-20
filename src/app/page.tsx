import Image from 'next/image'
import Link from 'next/link'
import { VideoFondo } from '@/components/VideoFondo'
import { Revelar } from '@/components/Revelar'
import { Instituciones } from '@/components/Instituciones'
import { Fuentes } from '@/components/Fuentes'
import { getRed } from '@/lib/datos'

const PILARES = [
  'Cultivo sostenible',
  'Agricultura industrial',
  'Innovación y desarrollo',
  'Materiales y construcción',
  'Visión global',
]

export default function PaginaInicio() {
  const { propuesta, impactos } = getRed()

  return (
    <>
      {/* ------------------------------------------------------------- hero */}
      <section className="relative isolate flex min-h-[92svh] items-center justify-center overflow-hidden bg-[var(--color-verde-profundo)]">
        <VideoFondo
          src="/video/cultivo.mp4"
          poster="/fotos/cultivo-video-poster.jpg"
          className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[var(--color-negro)]/45" />
        <div className="vineta absolute inset-0 -z-10" />
        {/* Degradado inferior: funde el video con la sección siguiente en vez
            de cortarlo con una línea dura. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-b from-transparent to-[var(--color-verde-profundo)]"
        />

        <div
          aria-hidden="true"
          className="cine-telon-arriba absolute inset-x-0 top-0 z-10 h-1/2 bg-[var(--color-verde-profundo)]"
        />
        <div
          aria-hidden="true"
          className="cine-telon-abajo absolute inset-x-0 bottom-0 z-10 h-1/2 bg-[var(--color-verde-profundo)]"
        />

        <div className="relative z-20 px-4 text-center">
          <Image
            src="/marca/isotipo-claro.png"
            alt=""
            aria-hidden="true"
            width={384}
            height={457}
            priority
            className="cine-marca mx-auto mb-10 h-24 w-auto sm:h-32"
          />
          <h1 className="cine-titulo text-[clamp(2.5rem,12vw,9rem)] font-semibold leading-none text-[var(--color-beige)]">
            KLEGIUM
          </h1>
          <p className="cine-lema mt-8 text-balance text-lg text-[var(--color-verde-hoja)] sm:text-2xl">
            Cultivamos el presente, construimos el futuro.
          </p>
        </div>
      </section>

      {/* ----------------------------------------------------------- origen */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-32">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-hoja)]">
              Nuestro origen
            </p>
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

      {/* ------------------------------------ la propuesta: reactivación */}
      <section className="relative isolate overflow-hidden bg-[var(--color-beige)]">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
              {propuesta.eyebrow}
            </p>
            <h2 className="mt-6 max-w-4xl text-balance text-[clamp(2rem,5.5vw,3.5rem)] font-semibold leading-[1.06]">
              {propuesta.titulo}
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed">
              {propuesta.entrada}
            </p>
          </Revelar>

          <Revelar retraso={150}>
            <ol className="mt-14 grid gap-px bg-[var(--color-verde-bosque)]/20 sm:grid-cols-3 lg:grid-cols-6">
              {propuesta.cadena.map((etapa, i) => (
                <li key={etapa} className="bg-[var(--color-beige)] px-4 py-7 text-center">
                  <span className="block text-xs tabular-nums tracking-widest text-[var(--color-verde-bosque)]/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="mt-2 block font-semibold">{etapa}</span>
                </li>
              ))}
            </ol>
          </Revelar>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {impactos.slice(0, 2).map((im, i) => (
              <Revelar key={im.id} retraso={i * 140} className="h-full">
                <article className="h-full rounded-sm bg-[var(--color-salvia)]/30 p-8">
                  <h3 className="text-2xl font-semibold text-[var(--color-verde-bosque)]">
                    {im.titulo}
                  </h3>
                  <p className="mt-3 leading-relaxed">{im.resumen}</p>
                </article>
              </Revelar>
            ))}
          </div>

          <Revelar retraso={280}>
            <Link
              href="/red"
              className="mt-12 inline-block rounded-sm bg-[var(--color-verde-bosque)] px-8 py-4 font-semibold text-[var(--color-beige)] transition-transform duration-300 hover:-translate-y-1"
            >
              Conocer la propuesta
            </Link>
          </Revelar>
        </div>
      </section>

      {/* ------------------------------ por qué el cáñamo: ambiental */}
      <section className="relative isolate overflow-hidden bg-[var(--color-negro)] text-[var(--color-beige)]">
        <Image
          src="/fotos/cultivo-verde.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-25"
        />
        <div className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-hoja)]">
              Por qué el cáñamo
            </p>
            <h2 className="mt-6 max-w-3xl text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              Una alternativa a los materiales de construcción convencionales
            </h2>
          </Revelar>

          <div className="mt-14 grid gap-14 md:grid-cols-[auto_1fr] md:items-start md:gap-20">
            <Revelar desde="izquierda">
              <p className="text-[clamp(5rem,18vw,11rem)] font-semibold leading-[0.8] tracking-tight text-[var(--color-verde-hoja)]">
                37%
              </p>
            </Revelar>

            <Revelar desde="derecha" retraso={150}>
              <div className="max-w-xl">
                <p className="text-2xl leading-snug">
                  de las emisiones globales de CO₂ provienen de la industria de
                  la construcción, que además concentra cerca de la mitad de la
                  extracción mundial de materiales.
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
                    , frente a las 2 a 6 toneladas anuales que captura una
                    hectárea de bosque.
                  </p>
                  <p className="mt-4 leading-relaxed text-[var(--color-salvia)]">
                    Una de nuestras líneas de desarrollo es el aprovechamiento de
                    la cañamiza en paneles y materiales constructivos, sujeto a
                    los requisitos técnicos y regulatorios aplicables.
                  </p>
                </div>
              </div>
            </Revelar>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- producto */}
      <section className="bg-[var(--color-beige)]">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
              Línea comercial
            </p>
          </Revelar>

          <Revelar retraso={120}>
            <Link
              href="/canamiza"
              className="group mt-12 grid overflow-hidden rounded-sm bg-[var(--color-salvia)]/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:grid-cols-2"
            >
              <div className="recorte-limpio relative aspect-[16/10] overflow-hidden md:aspect-auto">
                <Image
                  src="/fotos/canamiza-material.jpg"
                  alt="Cañamiza de cáñamo industrial triturada, destinada a cama animal"
                  fill
                  sizes="(max-width: 768px) 100vw, 576px"
                  className="scale-[1.01] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-verde-bosque)]">
                  Caballerizas · Fincas · Agroveterinarias
                </p>
                <h3 className="mt-4 text-4xl font-semibold">Cañamiza triturada</h3>
                <p className="mt-5 leading-relaxed">
                  Material de cama para animales, cultivado y procesado en San
                  Ramón, con trazabilidad documentada de cada lote.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--color-verde-bosque)]">
                  Ver el producto
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </span>
              </div>
            </Link>
          </Revelar>
        </div>
      </section>

      <Fuentes grupo="ambiental" fondo="claro" />
      <Instituciones fondo="claro" />
    </>
  )
}
