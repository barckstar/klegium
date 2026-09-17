import Image from 'next/image'
import Link from 'next/link'

const PILARES = [
  { titulo: 'Cultivo sostenible', detalle: 'Manejo con extractos naturales, sin agroquímicos de alta toxicidad.' },
  { titulo: 'Agricultura industrial', detalle: 'Cáñamo de variedades certificadas, bajo autorización del MAG.' },
  { titulo: 'Innovación y desarrollo', detalle: 'Investigación aplicada sobre nuestro propio cultivo.' },
  { titulo: 'Materiales y construcción', detalle: 'Cañamiza para materiales de construcción de baja huella.' },
  { titulo: 'Visión global', detalle: 'Un modelo que empieza en San Ramón y puede crecer.' },
]

const PUERTAS = [
  {
    href: '/canamiza',
    titulo: 'Cañamiza triturada',
    para: 'Caballerizas, fincas y agroveterinarias',
    detalle: 'Cama natural de cáñamo, con trazabilidad hasta la parcela.',
    cta: 'Ver el producto',
  },
  {
    href: '/red',
    titulo: 'Red de agricultores',
    para: 'Dueños de terreno en San Ramón',
    detalle: 'Ponga su tierra a producir, con o sin involucrarse en el cultivo.',
    cta: 'Cómo funciona',
  },
  {
    href: '/semilla',
    titulo: 'Semilla certificada',
    para: 'Permisionarios de cáñamo',
    detalle: 'Futura 75 y Fedora 17, con trazabilidad documental completa.',
    cta: 'Conocer más',
  },
]

export default function PaginaInicio() {
  return (
    <>
      {/* ---------------------------------------------------------------- hero */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-5xl font-semibold tracking-[0.2em] sm:text-6xl">
              KLEGIUM
            </h1>
            <p className="mt-4 text-lg text-[var(--color-verde-hoja)] sm:text-xl">
              Cultivamos el presente, construimos el futuro.
            </p>
            <p className="mt-8 max-w-lg text-lg leading-relaxed">
              Cáñamo industrial cultivado en San Isidro de San Ramón, Costa Rica,
              con autorización del Ministerio de Agricultura y Ganadería y
              trazabilidad completa desde la semilla.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/canamiza"
                className="rounded bg-[var(--color-verde-hoja)] px-7 py-3 font-semibold text-[var(--color-verde-profundo)] transition-opacity hover:opacity-90"
              >
                Cañamiza para cama animal
              </Link>
              <Link
                href="/red"
                className="rounded border border-[var(--color-salvia)] px-7 py-3 font-semibold transition-colors hover:border-[var(--color-verde-hoja)] hover:text-[var(--color-verde-hoja)]"
              >
                Red de agricultores
              </Link>
            </div>
          </div>

          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg">
            <Image
              src="/fotos/rotulo-parcela.jpeg"
              alt="Parcela de cáñamo industrial preparada en San Ramón, con el rótulo de autorización del MAG y el cantón al fondo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- origen */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-verde-bosque)]">
          Nuestro origen
        </h2>
        <p className="mt-8 text-xl leading-relaxed sm:text-2xl">
          Klegium nace de la unión de personas con una visión común. Cada uno
          aporta su talento, su esfuerzo y su compromiso. Juntos cultivamos
          oportunidades y construimos un legado que trascienda generaciones.
        </p>
      </section>

      {/* ------------------------------------------------------------ problema */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-6xl font-semibold text-[var(--color-verde-hoja)] sm:text-7xl">
              37%
            </p>
            <p className="mt-4 text-xl">
              de las emisiones globales de CO₂ vienen de la industria de la
              construcción.
            </p>
            <p className="mt-3 text-sm text-[var(--color-salvia)]">
              UNEP / GlobalABC — Global Status Report for Buildings and
              Construction 2025-2026. El mismo informe atribuye al sector casi
              la mitad de la extracción global de materiales.
            </p>
          </div>

          <div className="border-l-2 border-[var(--color-verde-hoja)] pl-6">
            <p className="text-lg leading-relaxed">
              El cáñamo captura entre <strong>8 y 15 toneladas de CO₂ por
              hectárea</strong>. Un bosque captura entre 2 y 6 al año.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-salvia)]">
              Esa diferencia es la razón por la que este proyecto existe: no
              sembrar una planta más, sino construir con ella una cadena
              productiva que sustituya materiales de alta huella.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- pilares */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-3xl font-semibold">En qué trabajamos</h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILARES.map((p) => (
            <li
              key={p.titulo}
              className="rounded-lg border border-[var(--color-salvia)] bg-white/40 p-6"
            >
              <h3 className="font-semibold text-[var(--color-verde-bosque)]">
                {p.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed">{p.detalle}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* -------------------------------------------------------------- puertas */}
      <section className="bg-[var(--color-salvia)]/40">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-3xl font-semibold">Cómo trabajar con nosotros</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PUERTAS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex flex-col rounded-lg border border-[var(--color-verde-bosque)]/30 bg-[var(--color-beige)] p-7 transition-colors hover:border-[var(--color-verde-hoja)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-verde-bosque)]">
                  {p.para}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{p.titulo}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed">{p.detalle}</p>
                <span className="mt-6 font-semibold text-[var(--color-verde-bosque)] group-hover:text-[var(--color-verde-hoja)]">
                  {p.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
