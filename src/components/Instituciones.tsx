import Image from 'next/image'
import { getInstituciones } from '@/lib/datos'

/**
 * Muro institucional.
 *
 * Cuidado con el texto: estas instituciones **regulan y acompañan**, no
 * patrocinan ni avalan comercialmente a Klegium. El MAG emitió una
 * autorización, que no es lo mismo que un respaldo. Por eso cada logo va con
 * la relación real escrita al lado, en vez de un genérico "nos apoyan".
 *
 * Mientras no haya archivos de logo —ni permiso de uso— se muestra la sigla
 * en una placa. Se ve intencional y no compromete a nadie.
 */
export function Instituciones({ fondo = 'claro' }: { fondo?: 'claro' | 'oscuro' }) {
  const instituciones = getInstituciones()
  const oscuro = fondo === 'oscuro'

  return (
    <section
      className={
        oscuro
          ? 'bg-[var(--color-verde-profundo)] text-[var(--color-beige)]'
          : 'bg-[var(--color-beige)]'
      }
    >
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.35em] ${
            oscuro ? 'text-[var(--color-verde-hoja)]' : 'text-[var(--color-verde-bosque)]'
          }`}
        >
          Marco institucional
        </p>
        <h2 className="mt-4 max-w-2xl text-2xl font-semibold sm:text-3xl">
          Operamos bajo autorización y acompañamiento de instituciones públicas
        </h2>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm bg-current/15 sm:grid-cols-2 lg:grid-cols-4">
          {instituciones.map((i) => (
            <li
              key={i.id}
              className={`flex flex-col items-center gap-4 p-8 text-center ${
                oscuro ? 'bg-[var(--color-verde-profundo)]' : 'bg-[var(--color-beige)]'
              }`}
            >
              <div className="flex h-16 items-center justify-center">
                {i.logo ? (
                  <Image
                    src={i.logo}
                    alt={i.nombre}
                    width={140}
                    height={64}
                    className="h-16 w-auto object-contain"
                  />
                ) : (
                  <span
                    className={`text-2xl font-semibold tracking-[0.15em] ${
                      oscuro
                        ? 'text-[var(--color-salvia)]'
                        : 'text-[var(--color-verde-bosque)]'
                    }`}
                  >
                    {i.sigla}
                  </span>
                )}
              </div>

              <div>
                <p className="text-sm font-semibold leading-snug">{i.nombre}</p>
                <p className="mt-2 text-xs leading-relaxed opacity-70">
                  {i.relacion}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
