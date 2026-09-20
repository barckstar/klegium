import Image from 'next/image'
import { metadatosDe } from '@/lib/sitio'
import { Hero, Eyebrow } from '@/components/Hero'
import { Revelar } from '@/components/Revelar'
import { Instituciones } from '@/components/Instituciones'
import { getPermisos, getEquipo } from '@/lib/datos'

export const metadata = metadatosDe({
  titulo: 'Nosotros',
  descripcion:
    'Klegium cultiva cáñamo industrial en San Isidro de San Ramón, Costa Rica, con autorización del Ministerio de Agricultura y Ganadería.',
  ruta: '/nosotros',
})

/** Solo plantas sanas: una planta enferma en la web propia es un argumento
 *  en contra que nadie pidió. */
const GALERIA = [
  { src: '/fotos/planta-sana-1.jpg', alt: 'Planta de cáñamo industrial sana en bolsa de almácigo' },
  { src: '/fotos/planta-sana-2.jpg', alt: 'Plántula de cáñamo con hojas palmeadas bien formadas' },
  { src: '/fotos/planta-sana-3.jpg', alt: 'Plantas de cáñamo establecidas en el vivero' },
  { src: '/fotos/almacigo-bandeja.jpg', alt: 'Bandeja de germinación con plántulas de cáñamo' },
  { src: '/fotos/cultivo-verde.jpg', alt: 'Cultivo de cáñamo industrial en pleno crecimiento' },
  { src: '/fotos/vivero-bolsas.jpg', alt: 'Hileras de bolsas de almácigo en el vivero de San Ramón' },
]

export default function PaginaNosotros() {
  const permisos = getPermisos()
  const { fundadores, expertos } = getEquipo()

  return (
    <>
      <Hero
        imagen="/fotos/terreno-san-ramon.jpg"
        alt="El terreno de cultivo en San Isidro de San Ramón, con el cantón al fondo"
        prioridad
        altura="media"
      >
        <Revelar>
          <Eyebrow>San Isidro de San Ramón, Alajuela</Eyebrow>
          <h1 className="mt-6 text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.02] text-[var(--color-beige)]">
            Nosotros
          </h1>
        </Revelar>
      </Hero>

      {/* -------------------------------------------------------- el símbolo */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:py-32">
          <Revelar>
            <Eyebrow>El símbolo</Eyebrow>
            <p className="mt-10 text-balance text-2xl font-light leading-[1.5] sm:text-[2rem]">
              Representa unión, crecimiento y propósito compartido. Las hojas
              reflejan la vida, la naturaleza y el cultivo responsable. Las
              formas circulares simbolizan el trabajo en equipo y la visión a
              largo plazo.{' '}
              <span className="font-semibold text-[var(--color-verde-hoja)]">
                No es solo una inicial, es la unión de personas que construyen
                algo más grande.
              </span>
            </p>
          </Revelar>
        </div>
      </section>

      {/* ---------------------------------------------------------- el cultivo */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 md:grid-cols-2">
        <Revelar desde="izquierda">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
              El cultivo
            </p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Cultivo propio en San Ramón
            </h2>
            <p className="mt-6 text-lg leading-relaxed">
              El primer cultivo está en San Isidro de San Ramón, con autorización
              del Ministerio de Agricultura y Ganadería.
            </p>
            <p className="mt-4 leading-relaxed">
              Manejo integrado de plagas con extractos naturales —neem, ajo,
              chile, canela, jabón potásico—, riego por goteo desde una fuente
              natural del terreno y compostaje de los residuos. Sin agroquímicos
              de alta toxicidad.
            </p>
          </div>
        </Revelar>

        <Revelar desde="derecha" retraso={150}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <Image
              src="/fotos/cultivo-hileras.jpg"
              alt="Hileras de bolsas de siembra de cáñamo ordenadas sobre el terreno en San Isidro de San Ramón"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </Revelar>
      </section>

      {/* ---------------------------------------------------------- permisos */}
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center">
          <Revelar>
            <Eyebrow>Marco regulatorio</Eyebrow>
            <p className="mt-8 text-[clamp(3.5rem,12vw,7rem)] font-semibold leading-none text-[var(--color-verde-hoja)]">
              {permisos.otorgados}
            </p>
            <p className="mt-4 text-2xl font-semibold">
              permisos otorgados por el Gobierno de Costa Rica
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-salvia)]">
              {permisos.resumen}
            </p>
          </Revelar>
        </div>
      </section>

      <Instituciones fondo="claro" />

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
                <div className="group relative aspect-[3/4] overflow-hidden recorte-limpio rounded-sm">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover scale-[1.01] transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[var(--color-verde-profundo)]/0 transition-colors duration-500 group-hover:bg-[var(--color-verde-profundo)]/25" />
                </div>
              </Revelar>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ equipo */}
      <section className="bg-[var(--color-salvia)]/30">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <Revelar>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
              El equipo
            </p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Quiénes lo dirigen</h2>
          </Revelar>

          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            {fundadores.map((persona, i) => (
              <Revelar key={persona.nombre} retraso={i * 120} className="h-full">
                <li className="h-full rounded-sm bg-[var(--color-beige)] p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-2xl font-semibold">{persona.nombre}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--color-verde-bosque)]">
                    {persona.rol}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {persona.oficios.map((o) => (
                      <li
                        key={o}
                        className="rounded-full border border-[var(--color-verde-bosque)]/30 px-3 py-1 text-xs"
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                </li>
              </Revelar>
            ))}
          </ul>

          {expertos.length > 0 && (
            <>
              <Revelar>
                <h3 className="mt-20 text-2xl font-semibold sm:text-3xl">
                  Asesoría especializada en cáñamo
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed">
                  El cultivo de cáñamo industrial en clima tropical exige
                  criterio técnico. Contamos con el acompañamiento de personas
                  con experiencia comprobada en la materia.
                </p>
              </Revelar>

              <ul className="mt-10 grid gap-8 sm:grid-cols-3">
                {expertos.map((persona, i) => (
                  <Revelar key={persona.nombre} retraso={i * 120} className="h-full">
                    <li className="h-full rounded-sm border border-[var(--color-verde-bosque)]/30 bg-[var(--color-beige)]/60 p-8">
                      <p className="text-xl font-semibold">{persona.nombre}</p>
                      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--color-verde-bosque)]">
                        {persona.rol}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {persona.oficios.map((o) => (
                          <li
                            key={o}
                            className="rounded-full border border-[var(--color-verde-bosque)]/30 px-3 py-1 text-xs"
                          >
                            {o}
                          </li>
                        ))}
                      </ul>
                    </li>
                  </Revelar>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

    </>
  )
}
