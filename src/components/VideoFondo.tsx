'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Video de fondo para el hero.
 *
 * Reglas que lo hacen aceptable y no un lastre:
 * - Arranca solo cuando el navegador ya tiene con qué reproducir; hasta entonces
 *   se ve el póster, que es un fotograma del mismo video. Nunca hay hueco negro.
 * - `prefers-reduced-motion`: no se carga el video, se queda el póster.
 * - Se pausa cuando la pestaña no está visible: no tiene sentido decodificar
 *   video para nadie.
 * - Sin audio, y con `playsInline` para que iOS no lo abra a pantalla completa.
 */
export function VideoFondo({
  src,
  poster,
  className = '',
}: {
  src: string
  poster: string
  className?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [conMovimiento, setConMovimiento] = useState(false)

  useEffect(() => {
    const prefiereQuieto = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefiereQuieto) return
    setConMovimiento(true)
  }, [])

  useEffect(() => {
    if (!conMovimiento) return
    const video = ref.current
    if (!video) return

    function alCambiarVisibilidad() {
      if (!video) return
      if (document.hidden) video.pause()
      else void video.play().catch(() => {})
    }

    document.addEventListener('visibilitychange', alCambiarVisibilidad)
    return () => document.removeEventListener('visibilitychange', alCambiarVisibilidad)
  }, [conMovimiento])

  if (!conMovimiento) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={poster} alt="" aria-hidden="true" className={className} />
  }

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
