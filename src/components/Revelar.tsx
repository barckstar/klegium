'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Aparición al entrar en pantalla. Sube un poco y se desvanece hacia adentro.
 *
 * Usa IntersectionObserver en vez de escuchar el scroll: el navegador hace el
 * trabajo fuera del hilo principal, así que no cuesta fluidez.
 *
 * Respeta `prefers-reduced-motion`: a quien le molesta el movimiento le
 * aparece el contenido sin animación, no se le esconde.
 */
export function Revelar({
  children,
  retraso = 0,
  desde = 'abajo',
  className = '',
}: {
  children: React.ReactNode
  /** milisegundos */
  retraso?: number
  desde?: 'abajo' | 'izquierda' | 'derecha' | 'escala'
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true)
          observador.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )

    observador.observe(nodo)
    return () => observador.disconnect()
  }, [])

  const oculto = {
    abajo: 'translate-y-10 opacity-0',
    izquierda: '-translate-x-10 opacity-0',
    derecha: 'translate-x-10 opacity-0',
    escala: 'scale-[0.96] opacity-0',
  }[desde]

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${retraso}ms` }}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        visible ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : oculto
      } ${className}`}
    >
      {children}
    </div>
  )
}
