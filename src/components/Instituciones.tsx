import Image from 'next/image'
import { getInstituciones, getPermisos } from '@/lib/datos'
import { Revelar } from '@/components/Revelar'

/**
 * Muro institucional.
 *
 * Cuidado con el texto: estas instituciones **regulan y acompañan**, no
 * patrocinan ni avalan comercialmente a Klegium. El Ministerio emitió una
 * autorización, que no es lo mismo que un respaldo. Por eso cada institución va
 * con la relación real escrita al lado, en vez de un genérico "nos apoyan", y
 * la aclaración queda impresa al pie de la sección.
 *
 * Las actividades autorizadas se listan aquí, y no en una sección aparte,
 * porque son lo que le da peso al bloque: dos logos sueltos se leen como un
 * espacio vacío. Nunca se publica cuántos permisos hay ni cuáles faltan.
 */
export function Instituciones({ fondo = 'claro' }: { fondo?: 'claro' | 'oscuro' }) {
  const instituciones = getInstituciones()
  const permisos = getPermisos()
  const oscuro = fondo === 'oscuro'

  return (
    <section
      className={
        oscuro
          ? 'bg-[var(--color-verde-profundo)] text-[var(--color-beige)]'
          : 'bg-[var(--color-beige)]'
      }
    >
      <div className="mx-auto max-w-6xl px-4 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start lg:gap-20">
          {/* ------------------------------------------------- lado izquierdo */}
          <Revelar desde="izquierda">
            <p
              className={`text-xs font-semibold uppercase tracking-[0.35em] ${
                oscuro
                  ? 'text-[var(--color-verde-hoja)]'
                  : 'text-[var(--color-verde-bosque)]'
              }`}
            >
              Marco institucional
            </p>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              Operamos bajo autorización y acompañamiento de instituciones
              públicas
            </h2>

            <p className="mt-8 max-w-md leading-relaxed opacity-80">
              {permisos.resumen}
            </p>

            {/* Las actividades autorizadas, no su cantidad: dicen lo mismo sin
                dejar a la vista cuántas quedan fuera. */}
            <ul
              className={`mt-10 border-t ${
                oscuro
                  ? 'border-[var(--color-salvia)]/25'
                  : 'border-[var(--color-verde-bosque)]/25'
              }`}
            >
              {permisos.actividades.map((a) => (
                <li
                  key={a}
                  className={`border-b py-4 text-lg font-semibold ${
                    oscuro
                      ? 'border-[var(--color-salvia)]/15 text-[var(--color-verde-hoja)]'
                      : 'border-[var(--color-verde-bosque)]/15 text-[var(--color-verde-bosque)]'
                  }`}
                >
                  {a}
                </li>
              ))}
            </ul>
          </Revelar>

          {/* -------------------------------------------------- lado derecho */}
          <ul className="grid gap-5 sm:grid-cols-2">
            {instituciones.map((i, n) => (
              <Revelar key={i.id} desde="derecha" retraso={n * 140} className="h-full">
                <li
                  className={`flex h-full flex-col rounded-sm ${
                    oscuro ? 'bg-white/95 text-[var(--color-negro)]' : 'bg-white'
                  }`}
                >
                  {/* Caja de alto fijo: los dos logos tienen proporciones muy
                      distintas y sin ella uno queda al doble que el otro. */}
                  <div className="flex h-28 items-center justify-center px-8">
                    {i.logo ? (
                      <Image
                        src={i.logo}
                        alt={i.nombre}
                        width={i.logoAncho ?? 200}
                        height={i.logoAlto ?? 64}
                        className="max-h-12 w-auto max-w-[200px] object-contain"
                      />
                    ) : (
                      <span className="text-center text-lg font-semibold leading-snug text-[var(--color-verde-bosque)]">
                        {i.nombre}
                      </span>
                    )}
                  </div>

                  <div className="border-t border-[var(--color-verde-bosque)]/15 px-8 py-7">
                    <p className="font-semibold leading-snug text-[var(--color-verde-bosque)]">
                      {i.nombre}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-negro)]/70">
                      {i.relacion}
                    </p>
                  </div>
                </li>
              </Revelar>
            ))}
          </ul>
        </div>

        <p
          className={`mt-14 border-t pt-6 text-xs leading-relaxed opacity-60 ${
            oscuro
              ? 'border-[var(--color-salvia)]/25'
              : 'border-[var(--color-verde-bosque)]/25'
          }`}
        >
          Los emblemas identifican a las instituciones que regulan y acompañan la
          actividad. Su presencia refleja la relación descrita en cada caso y no
          constituye patrocinio, aval comercial ni recomendación de Klegium.
        </p>
      </div>
    </section>
  )
}
