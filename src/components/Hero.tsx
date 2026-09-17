import Image from 'next/image'

/**
 * Hero a sangre completa: foto de fondo, degradado oscuro encima y el contenido
 * sobre eso. El degradado no es decoración — es lo que garantiza contraste
 * legible sobre una foto que no controlamos.
 */
export function Hero({
  imagen,
  alt,
  prioridad = false,
  altura = 'grande',
  deriva = false,
  children,
}: {
  imagen: string
  alt: string
  prioridad?: boolean
  altura?: 'grande' | 'media'
  /** Zoom lentísimo de la foto de fondo: da vida sin distraer del texto. */
  deriva?: boolean
  children: React.ReactNode
}) {
  return (
    <section
      className={`relative isolate flex items-end overflow-hidden bg-[var(--color-verde-profundo)] ${
        altura === 'grande'
          ? 'min-h-[88svh] md:min-h-[92svh]'
          : 'min-h-[52svh] md:min-h-[58svh]'
      }`}
    >
      <Image
        src={imagen}
        alt={alt}
        fill
        priority={prioridad}
        sizes="100vw"
        className={`-z-10 object-cover ${deriva ? 'animacion-deriva' : ''}`}
      />
      {/* Doble capa: una general para bajar el brillo, otra desde abajo para
          anclar el texto. Juntas dan contraste AA sin apagar la foto. */}
      <div className="absolute inset-0 -z-10 bg-[var(--color-negro)]/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[var(--color-verde-profundo)] via-[var(--color-verde-profundo)]/75 to-transparent" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[var(--color-verde-profundo)]/80 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-32 md:pb-24">
        {children}
      </div>
    </section>
  )
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-verde-hoja)]">
      {children}
    </p>
  )
}
