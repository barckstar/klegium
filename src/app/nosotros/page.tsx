import type { Metadata } from 'next'
import Image from 'next/image'
import { Hero, Eyebrow } from '@/components/Hero'
import { Instituciones } from '@/components/Instituciones'
import { Certificaciones } from '@/components/Certificaciones'
import { Revelar } from '@/components/Revelar'
import { getPermisos } from '@/lib/datos'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Klegium cultiva cáñamo industrial en San Isidro de San Ramón con autorización del MAG. Quiénes somos, qué permisos tenemos y qué estamos investigando.',
}

const EQUIPO = [
  {
    nombre: 'Kevin Rodríguez',
    rol: 'Fundador',
    oficios: ['Empresario'],
    foto: null,
  },
  {
    nombre: 'Emanuel',
    rol: 'Cofundador',
    oficios: ['Empresario'],
    foto: null,
  },
  {
    nombre: 'Leonel Castro',
    rol: 'Cofundador',
    oficios: ['Empresario', 'Ingeniero en sistemas'],
    foto: null,
  },
] as { nombre: string; rol: string; oficios: string[]; foto: string | null }[]

/** Fotos del cultivo. Solo plantas sanas: una planta enferma en la web propia
 *  es un argumento en contra que nadie pidió. */
const GALERIA = [
  { src: '/fotos/planta-sana-1.jpg', alt: 'Planta de cáñamo industrial sana en bolsa de almácigo' },
  { src: '/fotos/planta-sana-2.jpg', alt: 'Plántula de cáñamo con hojas palmeadas bien formadas' },
  { src: '/fotos/planta-sana-3.jpg', alt: 'Plantas de cáñamo establecidas en el vivero' },
  { src: '/fotos/almacigo-bandeja.jpg', alt: 'Bandeja de germinación con plántulas de cáñamo' },
  { src: '/fotos/cultivo-verde.jpg', alt: 'Cultivo de cáñamo industrial en pleno crecimiento' },
  { src: '/fotos/vivero-bolsas.jpg', alt: 'Hileras de bolsas de almácigo en el vivero de San Ramón' },
]

const ESTADO = {
  otorgado: { texto: 'Otorgado', clase: 'text-[var(--color-verde-hoja)]' },
  'en-tramite': { texto: 'En trámite', clase: 'text-[var(--color-salvia)]' },
  pendiente: { texto: 'Pendiente', clase: 'text-[var(--color-salvia)]/60' },
} as const

export default function PaginaNosotros() {
  const permisos = getPermisos()
  const otorgados = permisos.filter((p) => p.estado === 'otorgado').length

  return (
    <>
      <Hero
        imagen="/fotos/terreno-san-ramon.jpg"
        alt="El terreno de cultivo en San Isidro de San Ramón, con el cantón al fondo"
        prioridad
        altura="media"
      >
        <Eyebrow>San Isidro de San Ramón, Alajuela</Eyebrow>
        <h1 className="mt-6 text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.02] text-[var(--color-beige)]">
          Nosotros
        </h1>
      </Hero>

      {/* -------------------------------------------------------- el símbolo */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-32">
          <Eyebrow>El símbolo</Eyebrow>
          <p className="mt-10 text-balance text-2xl font-light leading-[1.5] sm:text-[2rem]">
            Representa unión, crecimiento y propósito compartido. Las hojas
            reflejan la vida, la naturaleza y el cultivo responsable. Las formas
            circulares simbolizan el trabajo en equipo y la visión a largo plazo.{' '}
            <span className="font-semibold text-[var(--color-verde-hoja)]">
              No es solo una inicial, es la unión de personas que construyen algo
              más grande.
            </span>
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- el cultivo */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-2">
        <div>
          <Eyebrow>
            <span className="text-[var(--color-verde-bosque)]">El cultivo</span>
          </Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            5.000 m² autorizados, por seis años
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            El primer cultivo está en San Isidro de San Ramón, bajo la resolución{' '}
            <strong>RA-CA-MAG-DNEA-002-2026</strong> del Ministerio de
            Agricultura y Ganadería.
          </p>
          <p className="mt-4 leading-relaxed">
            Manejo integrado de plagas con extractos naturales —neem, ajo, chile,
            canela, jabón potásico—, riego por goteo desde una fuente natural del
            terreno y compostaje de los residuos. Sin agroquímicos de alta
            toxicidad.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src="/fotos/cultivo-hileras.jpg"
            alt="Hileras de bolsas de siembra de cáñamo ordenadas sobre el terreno autorizado en San Isidro de San Ramón"
            fill
            sizes="(max-width: 768px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </section>

      {/* ---------------------------------------------------------- permisos */}
      <section className="relative isolate overflow-hidden bg-[var(--color-negro)] text-[var(--color-beige)]">
        <Image
          src="/fotos/hero-terreno-atardecer.jpg"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="-z-10 object-cover opacity-20"
        />
        <div className="mx-auto max-w-4xl px-4 py-24">
          <Eyebrow>Marco regulatorio</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            <span className="text-[var(--color-verde-hoja)]">{otorgados} de las 9</span>{' '}
            actividades reguladas
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[var(--color-salvia)]">
            La ley del cáñamo en Costa Rica regula nueve actividades. Nuestra
            autorización cubre siete. Las dos que faltan están identificadas y en
            camino.
          </p>

          <ul className="mt-12 divide-y divide-[var(--color-salvia)]/20 border-y border-[var(--color-salvia)]/20">
            {permisos.map((p) => {
              const e = ESTADO[p.estado]
              return (
                <li key={p.numero} className="flex items-center gap-4 py-5">
                  <span className="w-8 shrink-0 tabular-nums text-sm opacity-40">
                    0{p.numero}
                  </span>
                  <span className="flex-1 text-lg">{p.actividad}</span>
                  <span className="hidden w-32 shrink-0 text-sm opacity-50 sm:block">
                    {p.entidad}
                  </span>
                  <span className={`w-24 shrink-0 text-right text-sm font-semibold ${e.clase}`}>
                    {e.texto}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------- galería */}
      <section className="bg-[var(--color-beige)]">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
              El cultivo, por dentro
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-semibold sm:text-4xl">
              De la bandeja de germinación a la planta establecida
            </h2>
          </Revelar>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {GALERIA.map((g, i) => (
              <Revelar key={g.src} retraso={i * 80} desde="escala">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-sm">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[var(--color-verde-profundo)]/0 transition-colors duration-500 group-hover:bg-[var(--color-verde-profundo)]/25" />
                </div>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      <Certificaciones />
      <Instituciones fondo="claro" />

      {/* ------------------------------------------------------------ equipo */}
      <section className="bg-[var(--color-salvia)]/30">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Eyebrow>
            <span className="text-[var(--color-verde-bosque)]">El equipo</span>
          </Eyebrow>
          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {EQUIPO.map((persona, i) => (
              <Revelar key={persona.nombre} retraso={i * 120} className="h-full">
                <li className="group h-full overflow-hidden rounded-sm bg-[var(--color-beige)] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-verde-profundo)]">
                    {persona.foto ? (
                      <Image
                        src={persona.foto}
                        alt={persona.nombre}
                        fill
                        sizes="(max-width: 640px) 100vw, 380px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-3">
                        <Image
                          src="/marca/isotipo-claro.png"
                          alt=""
                          aria-hidden="true"
                          width={384}
                          height={457}
                          className="h-16 w-auto opacity-30"
                        />
                        <span className="text-[0.65rem] uppercase tracking-[0.25em] text-[var(--color-salvia)]/60">
                          Foto pendiente
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--color-verde-hoja)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="p-6">
                    <p className="text-2xl font-semibold">{persona.nombre}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--color-verde-bosque)]">
                      {persona.rol}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {persona.oficios.map((o) => (
                        <li
                          key={o}
                          className="rounded-full border border-[var(--color-verde-bosque)]/30 px-3 py-1 text-xs"
                        >
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Revelar>
            ))}
          </ul>
        </div>
      </section>

      {/* ----------------------------------------------------- investigación */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-4xl px-4 py-24">
          <Eyebrow>Investigación</Eyebrow>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Queremos que lo que decimos se pueda medir
          </h2>
          <p className="mt-8 text-lg leading-relaxed">
            Un investigador de la Universidad de Costa Rica está desarrollando
            una tesis alrededor de nuestro cultivo.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-salvia)]">
            Los datos que salgan de ese trabajo —captura de carbono,
            comportamiento del suelo, rendimiento— son los que van a respaldar lo
            que publiquemos, en vez de repetir cifras de folleto.
          </p>
        </div>
      </section>
    </>
  )
}
