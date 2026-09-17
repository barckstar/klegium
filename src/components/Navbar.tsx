'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

/** Debajo de esta altura el navbar nunca se esconde. */
const ALTURA_MINIMA = 150
/** Movimientos menores a esto son temblor de trackpad, no intención. */
const UMBRAL = 6

const ENLACES = [
  { href: '/canamiza', texto: 'Cañamiza' },
  { href: '/red', texto: 'Red de agricultores' },
  { href: '/semilla', texto: 'Semilla' },
  { href: '/nosotros', texto: 'Nosotros' },
]

export function Navbar() {
  const [oculto, setOculto] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const scrollPrevio = useRef(0)

  useEffect(() => {
    function alHacerScroll() {
      const actual = window.scrollY

      if (menuAbierto || actual <= ALTURA_MINIMA) {
        setOculto(false)
        scrollPrevio.current = actual
        return
      }

      const delta = actual - scrollPrevio.current
      if (Math.abs(delta) < UMBRAL) return

      setOculto(delta > 0)
      scrollPrevio.current = actual
    }

    window.addEventListener('scroll', alHacerScroll, { passive: true })
    return () => window.removeEventListener('scroll', alHacerScroll)
  }, [menuAbierto])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[var(--color-verde-profundo)]/95 text-[var(--color-beige)] backdrop-blur transition-transform duration-300 ${
        oculto ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.25em]"
          onClick={() => setMenuAbierto(false)}
        >
          KLEGIUM
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          {ENLACES.map((e) => (
            <Link
              key={e.href}
              href={e.href}
              className="transition-colors hover:text-[var(--color-verde-hoja)]"
            >
              {e.texto}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="rounded bg-[var(--color-verde-hoja)] px-4 py-2 font-semibold text-[var(--color-verde-profundo)] transition-opacity hover:opacity-90"
          >
            Contacto
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Menú"
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto((v) => !v)}
          className="text-2xl leading-none md:hidden"
        >
          {menuAbierto ? '✕' : '☰'}
        </button>
      </div>

      {menuAbierto && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-4 pb-4 md:hidden">
          {[...ENLACES, { href: '/contacto', texto: 'Contacto' }].map((e) => (
            <Link
              key={e.href}
              href={e.href}
              onClick={() => setMenuAbierto(false)}
              className="py-3 transition-colors hover:text-[var(--color-verde-hoja)]"
            >
              {e.texto}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
