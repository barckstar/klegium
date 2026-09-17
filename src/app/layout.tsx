import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { SITIO } from '@/lib/sitio'
import './globals.css'

// next/font descarga y autohospeda la fuente en build: cero peticiones a Google
// en tiempo de ejecución, y la IP del visitante no sale del sitio.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const viewport: Viewport = {
  themeColor: SITIO.colorTema,
  colorScheme: 'light',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITIO.url),
  title: {
    default: `${SITIO.nombre} — ${SITIO.lema}`,
    template: `%s | ${SITIO.nombre}`,
  },
  description: SITIO.descripcion,
  applicationName: SITIO.nombre,
  authors: [{ name: SITIO.nombre }],
  creator: SITIO.nombre,
  publisher: SITIO.nombre,
  keywords: [...SITIO.palabrasClave],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    url: SITIO.url,
    siteName: SITIO.nombre,
    title: `${SITIO.nombre} — ${SITIO.lema}`,
    description: SITIO.descripcion,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITIO.nombre} — ${SITIO.lema}`,
    description: SITIO.descripcion,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'agriculture',
  formatDetection: { telephone: false, address: false, email: false },
}

/** Datos estructurados de la organización, una sola vez, en el layout. */
function OrganizacionJsonLd() {
  const datos = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITIO.nombre,
    url: SITIO.url,
    logo: `${SITIO.url}/marca/logo-completo.png`,
    image: `${SITIO.url}/opengraph-image.jpg`,
    description: SITIO.descripcion,
    slogan: SITIO.lema,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Isidro de San Ramón',
      addressRegion: 'Alajuela',
      addressCountry: 'CR',
    },
    areaServed: { '@type': 'Country', name: 'Costa Rica' },
    knowsAbout: [...SITIO.palabrasClave],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }}
    />
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CR" className={montserrat.variable}>
      <body className="font-sans antialiased">
        <OrganizacionJsonLd />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-[var(--color-verde-hoja)] focus:px-4 focus:py-2 focus:font-semibold focus:text-[var(--color-verde-profundo)]"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido" className="pt-[68px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
