import { getFaq } from '@/lib/datos'
import { Revelar } from '@/components/Revelar'

/**
 * Preguntas frecuentes.
 *
 * Usa `<details>` nativo: sin JavaScript, accesible por teclado de fábrica, y
 * el navegador lo puede encontrar con Ctrl+F aunque esté cerrado. Ninguna
 * librería de acordeón hace esto mejor.
 */
export function Faq({ grupos }: { grupos?: string[] }) {
  const todos = getFaq()
  const secciones = grupos ? todos.filter((g) => grupos.includes(g.grupo)) : todos

  return (
    <div className="space-y-16">
      {secciones.map((seccion, s) => (
        <div key={seccion.grupo}>
          <Revelar>
            <h2 className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-bosque)]">
              {seccion.grupo}
            </h2>
          </Revelar>

          <div className="mt-6 border-t border-[var(--color-verde-bosque)]/25">
            {seccion.preguntas.map((q, i) => (
              <Revelar key={q.p} retraso={(s * 2 + i) * 40}>
                <details className="group border-b border-[var(--color-verde-bosque)]/25">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-semibold transition-colors hover:text-[var(--color-verde-bosque)] [&::-webkit-details-marker]:hidden">
                    <span>{q.p}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-xl leading-none text-[var(--color-verde-bosque)] transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-7 leading-relaxed">{q.r}</p>
                </details>
              </Revelar>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

/** JSON-LD de FAQPage: hace que las preguntas puedan salir en buscadores. */
export function FaqJsonLd({ grupos }: { grupos?: string[] }) {
  const todos = getFaq()
  const secciones = grupos ? todos.filter((g) => grupos.includes(g.grupo)) : todos

  const datos = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: secciones.flatMap((s) =>
      s.preguntas.map((q) => ({
        '@type': 'Question',
        name: q.p,
        acceptedAnswer: { '@type': 'Answer', text: q.r },
      }))
    ),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }}
    />
  )
}
