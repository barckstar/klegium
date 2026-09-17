import Image from 'next/image'
import Link from 'next/link'

const ENLACES = [
  { href: '/canamiza', texto: 'Cañamiza' },
  { href: '/red', texto: 'Red de agricultores' },
  { href: '/semilla', texto: 'Semilla' },
  { href: '/nosotros', texto: 'Nosotros' },
  { href: '/contacto', texto: 'Contacto' },
  { href: '/privacidad', texto: 'Privacidad' },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-verde-profundo)] text-[var(--color-beige)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2">
        <div>
          <Image
            src="/marca/isotipo-claro.png"
            alt=""
            aria-hidden="true"
            width={384}
            height={457}
            className="mb-4 h-12 w-auto opacity-80"
          />
          <p className="text-lg font-semibold tracking-[0.25em]">KLEGIUM</p>
          <p className="mt-3 text-sm text-[var(--color-salvia)]">
            Cultivamos el presente, construimos el futuro.
          </p>
          <p className="mt-6 text-sm leading-relaxed">
            Cáñamo industrial
            <br />
            San Isidro de San Ramón, Alajuela
            <br />
            Costa Rica
          </p>
          <p className="mt-4 text-sm text-[var(--color-salvia)]">
            Autorización MAG RA-CA-MAG-DNEA-002-2026
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-3 text-sm sm:justify-items-end">
          {ENLACES.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="transition-colors hover:text-[var(--color-verde-hoja)]"
            >
              {e.texto}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-[var(--color-salvia)]">
          © {new Date().getFullYear()} Klegium
        </p>
      </div>
    </footer>
  )
}
