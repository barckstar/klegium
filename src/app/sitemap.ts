import type { MetadataRoute } from 'next'
import { SITIO, RUTAS } from '@/lib/sitio'

export default function sitemap(): MetadataRoute.Sitemap {
  const ahora = new Date()
  return RUTAS.map(({ ruta, prioridad }) => ({
    url: `${SITIO.url}${ruta === '/' ? '' : ruta}`,
    lastModified: ahora,
    changeFrequency: 'monthly',
    priority: prioridad,
  }))
}
