import { getFuentes } from '@/lib/datos'

/**
 * Fuentes de lo que afirmamos.
 *
 * Cada fuente dice qué respalda, no solo su título. Una lista de enlaces al pie
 * no prueba nada; lo que da confianza es poder ver qué afirmación sale de dónde.
 */
export function Fuentes({
  grupo,
  fondo = 'claro',
}: {
  grupo: 'canamiza' | 'ambiental'
  fondo?: 'claro' | 'oscuro'
}) {
  const fuentes = getFuentes()[grupo]
  const oscuro = fondo === 'oscuro'

  return (
    <section
      className={
        oscuro
          ? 'bg-[var(--color-verde-profundo)] text-[var(--color-beige)]'
          : 'bg-[var(--color-beige)]'
      }
    >
      <div className="mx-auto max-w-4xl px-4 py-20">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.35em] ${
            oscuro ? 'text-[var(--color-verde-hoja)]' : 'text-[var(--color-verde-bosque)]'
          }`}
        >
          Fuentes
        </p>
        <h2 className="mt-5 max-w-2xl text-2xl font-semibold sm:text-3xl">
          Respaldo de la información publicada
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed opacity-80">
          Se publican las fuentes de cada dato para permitir su verificación. Las
          afirmaciones que no cuentan con respaldo documental no se incluyen.
        </p>

        <ol className="mt-12 space-y-px">
          {fuentes.map((f, i) => (
            <li
              key={f.url}
              className={`grid gap-2 py-6 sm:grid-cols-[2.5rem_1fr] ${
                oscuro
                  ? 'border-t border-[var(--color-salvia)]/20'
                  : 'border-t border-[var(--color-verde-bosque)]/20'
              }`}
            >
              <span className="text-sm tabular-nums opacity-40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="leading-relaxed">
                  <a
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-semibold underline decoration-2 underline-offset-4 transition-colors ${
                      oscuro
                        ? 'decoration-[var(--color-verde-hoja)]/50 hover:text-[var(--color-verde-hoja)]'
                        : 'decoration-[var(--color-verde-hoja)] hover:text-[var(--color-verde-bosque)]'
                    }`}
                  >
                    {f.titulo}
                  </a>
                  <span className="opacity-60"> — {f.autor}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed opacity-75">
                  Respalda: {f.respalda}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
