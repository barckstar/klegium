import Image from 'next/image'
import Link from 'next/link'

/**
 * Enlaces agrupados por tema y en columna.
 *
 * Antes iban en una rejilla de dos columnas alineada a la derecha, lo que
 * dejaba huecos enormes entre elementos. Una lista vertical con encabezado
 * se lee de corrido y ordena el pie sin esfuerzo.
 */
const SECCIONES = [
  {
    titulo: 'Actividad',
    enlaces: [
      { href: '/canamiza', texto: 'Cañamiza' },
      { href: '/red', texto: 'Red de agricultores' },
      { href: '/nosotros', texto: 'Nosotros' },
    ],
  },
  {
    titulo: 'Información',
    enlaces: [
      { href: '/preguntas', texto: 'Preguntas frecuentes' },
      { href: '/contacto', texto: 'Contacto' },
      { href: '/privacidad', texto: 'Privacidad' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="sm:col-span-2 md:col-span-1">
          <Image
            src="/marca/isotipo-claro.png"
            alt=""
            aria-hidden="true"
            width={384}
            height={457}
            className="mb-5 h-12 w-auto opacity-80"
          />
          <p className="text-lg font-semibold tracking-[0.25em]">KLEGIUM</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--color-salvia)]">
            Cultivamos el presente, construimos el futuro.
          </p>
          <p className="mt-8 text-sm leading-relaxed">
            Cáñamo industrial
            <br />
            San Isidro de San Ramón, Alajuela
            <br />
            Costa Rica
          </p>
        </div>

        {SECCIONES.map((seccion) => (
          <nav key={seccion.titulo} aria-label={seccion.titulo}>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-verde-hoja)]">
              {seccion.titulo}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {seccion.enlaces.map((e) => (
                <li key={e.href}>
                  <Link
                    href={e.href}
                    className="transition-colors hover:text-[var(--color-verde-hoja)]"
                  >
                    {e.texto}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-[var(--color-salvia)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Klegium</p>
          <p>Autorizados por el Ministerio de Agricultura y Ganadería</p>
        </div>
      </div>
    </footer>
  )
}
