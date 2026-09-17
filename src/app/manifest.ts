import type { MetadataRoute } from 'next'
import { SITIO } from '@/lib/sitio'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITIO.nombre} — ${SITIO.lema}`,
    short_name: SITIO.nombre,
    description: SITIO.descripcion,
    start_url: '/',
    display: 'standalone',
    background_color: SITIO.colorTema,
    theme_color: SITIO.colorTema,
    lang: 'es-CR',
    icons: [
      { src: '/icon.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
