import Image from 'next/image'
import { getInstituciones } from '@/lib/datos'

/**
 * Muro institucional.
 *
 * Cuidado con el texto: estas instituciones **regulan y acompañan**, no
 * patrocinan ni avalan comercialmente a Klegium. El Ministerio emitió una
 * autorización, que no es lo mismo que un respaldo. Por eso cada institución va
 * con la relación real escrita al lado, en vez de un genérico "nos apoyan".
 *
 * Mientras no haya archivos de logo —ni permiso de uso— se muestra el nombre
 * completo. Nunca la sigla: el nombre entero es más claro y más respetuoso.
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

        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm bg-current/15 sm:grid-cols-2">
          {instituciones.map((i) => (
            <li
              key={i.id}
              className={`flex flex-col items-center gap-4 p-8 text-center ${
                oscuro ? 'bg-[var(--color-verde-profundo)]' : 'bg-[var(--color-beige)]'
              }`}
            >
              <div className="flex min-h-16 items-center justify-center">
                {i.logo ? (
                  <Image
                    src={i.logo}
                    alt={i.nombre}
                    width={140}
                    height={64}
                    className="h-16 w-auto object-contain"
                  />
                ) : (
                  <Image
                    src="/marca/isotipo-claro.png"
                    alt=""
                    aria-hidden="true"
                    width={384}
                    height={457}
                    className={`h-10 w-auto ${oscuro ? 'opacity-40' : 'opacity-0'}`}
                  />
                )}
              </div>

              <div>
                <p className="text-lg font-semibold leading-snug text-[var(--color-verde-bosque)]">{i.nombre}</p>
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
