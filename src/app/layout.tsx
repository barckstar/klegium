import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

// next/font descarga y autohospeda la fuente en build: cero peticiones a Google
// en tiempo de ejecución, y la IP del visitante no sale del sitio.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://klegium.com'),
  title: {
    default: 'Klegium — Cáñamo industrial en Costa Rica',
    template: '%s | Klegium',
  },
  description:
    'Cáñamo industrial cultivado en San Ramón, Costa Rica, con autorización del MAG y trazabilidad completa. Cañamiza para cama animal, red de agricultores y semilla certificada.',
  openGraph: {
    type: 'website',
    locale: 'es_CR',
    siteName: 'Klegium',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="pt-[68px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
