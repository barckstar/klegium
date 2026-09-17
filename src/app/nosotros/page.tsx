import type { Metadata } from 'next'
import Image from 'next/image'
import { getPermisos } from '@/lib/datos'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Klegium cultiva cáñamo industrial en San Isidro de San Ramón con autorización del MAG. Quiénes somos, qué permisos tenemos y en qué estamos investigando.',
}

const EQUIPO = [
  { nombre: 'Kevin Rodríguez', rol: 'Fundador' },
  { nombre: 'Emanuel', rol: 'Cofundador' },
  { nombre: 'Leonel Castro', rol: 'Cofundador' },
]

const ETIQUETA_ESTADO = {
  otorgado: { texto: 'Otorgado', clase: 'text-[var(--color-verde-bosque)]' },
  'en-tramite': { texto: 'En trámite', clase: 'opacity-70' },
  pendiente: { texto: 'Pendiente', clase: 'opacity-70' },
} as const

export default function PaginaNosotros() {
  const permisos = getPermisos()
  const otorgados = permisos.filter((p) => p.estado === 'otorgado').length

  return (
    <>
      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h1 className="text-4xl font-semibold sm:text-5xl">Nosotros</h1>
          <p className="mt-10 text-xl leading-relaxed">
            El símbolo representa unión, crecimiento y propósito compartido. Las
            hojas reflejan la vida, la naturaleza y el cultivo responsable. Las
            formas circulares simbolizan el trabajo en equipo y la visión a largo
            plazo. No es solo una inicial, es la unión de personas que construyen
            algo más grande.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Un cultivo real, en San Ramón</h2>
          <p className="mt-6 text-lg leading-relaxed">
            El primer cultivo está en San Isidro de San Ramón, sobre 5.000 m²
            autorizados por el Ministerio de Agricultura y Ganadería mediante la
            resolución <strong>RA-CA-MAG-DNEA-002-2026</strong>, con vigencia de
            seis años.
          </p>
          <p className="mt-4 leading-relaxed">
            Trabajamos con manejo integrado de plagas a base de extractos
            naturales —neem, ajo, chile, canela, jabón potásico—, riego por goteo
            desde una fuente natural del terreno y compostaje de los residuos del
            cultivo. Sin agroquímicos de alta toxicidad.
          </p>
        </div>

        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg">
          <Image
            src="/fotos/rotulo-parcela.jpeg"
            alt="La parcela autorizada en San Ramón, con el rótulo oficial de cáñamo industrial"
            fill
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-[var(--color-salvia)]/40">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-3xl font-semibold">
            {otorgados} de las 9 actividades reguladas
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed">
            La ley del cáñamo en Costa Rica regula nueve actividades. Nuestra
            autorización cubre siete. Las dos que faltan están identificadas y en
            camino.
          </p>

          <ul className="mt-10 divide-y divide-[var(--color-verde-bosque)]/20 border-y border-[var(--color-verde-bosque)]/20">
            {permisos.map((p) => {
              const estado = ETIQUETA_ESTADO[p.estado]
              return (
                <li
                  key={p.numero}
                  className="flex items-center gap-4 py-4 text-sm sm:text-base"
                >
                  <span className="w-6 shrink-0 tabular-nums opacity-50">
                    {p.numero}
                  </span>
                  <span className="flex-1 font-semibold">{p.actividad}</span>
                  <span className="hidden w-28 shrink-0 opacity-60 sm:block">
                    {p.entidad}
                  </span>
                  <span className={`w-24 shrink-0 text-right font-semibold ${estado.clase}`}>
                    {estado.texto}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-semibold">El equipo</h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {EQUIPO.map((p) => (
            <li
              key={p.nombre}
              className="rounded-lg border border-[var(--color-salvia)] bg-white/40 p-6"
            >
              <p className="text-lg font-semibold">{p.nombre}</p>
              <p className="mt-1 text-sm text-[var(--color-verde-bosque)]">{p.rol}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-3xl font-semibold">Investigación</h2>
          <p className="mt-6 text-lg leading-relaxed">
            Un investigador de la Universidad de Costa Rica está desarrollando una
            tesis alrededor de nuestro cultivo.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--color-salvia)]">
            Nos interesa que lo que decimos se pueda medir. Los datos que salgan
            de ese trabajo —captura de carbono, comportamiento del suelo,
            rendimiento— son los que van a respaldar lo que publiquemos, en vez de
            repetir cifras de folleto.
          </p>
        </div>
      </section>
    </>
  )
}
