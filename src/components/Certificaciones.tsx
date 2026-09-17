import { getCertificaciones } from '@/lib/datos'
import { Revelar } from '@/components/Revelar'
import { Eyebrow } from '@/components/Hero'

const ETIQUETA = {
  obtenida: 'Obtenida',
  'en-proceso': 'En proceso',
  'por-definir': 'Por definir',
} as const

/**
 * Certificaciones ambientales.
 *
 * Todas dicen su estado real. Ninguna está obtenida todavía, y el encabezado lo
 * dice antes que los nombres: mostrar sellos que no se tienen es la forma más
 * rápida de perder la credibilidad que el resto del sitio construye.
 */
export function Certificaciones() {
  const certificaciones = getCertificaciones()

  return (
    <section className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
      <div className="mx-auto max-w-6xl px-4 py-24">
        <Revelar>
          <Eyebrow>Hacia dónde vamos</Eyebrow>
          <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold sm:text-4xl">
            Estamos trabajando en obtener nuestras certificaciones ambientales
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-[var(--color-salvia)]">
            Ninguna está otorgada todavía. Las listamos porque son el camino que
            estamos siguiendo, no porque las tengamos.
          </p>
        </Revelar>

        <div className="mt-14 grid gap-px bg-[var(--color-salvia)]/20 sm:grid-cols-3">
          {certificaciones.map((c, i) => (
            <Revelar key={c.id} retraso={i * 110} className="h-full">
              <article className="flex h-full flex-col bg-[var(--color-verde-profundo)] p-8">
                <span
                  className={`self-start rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.15em] ${
                    c.estado === 'obtenida'
                      ? 'border-[var(--color-verde-hoja)] text-[var(--color-verde-hoja)]'
                      : 'border-[var(--color-salvia)]/50 text-[var(--color-salvia)]'
                  }`}
                >
                  {ETIQUETA[c.estado]}
                </span>
                <h3 className="mt-6 text-2xl font-semibold leading-snug">
                  {c.nombre}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-salvia)]">
                  {c.detalle}
                </p>
              </article>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}
