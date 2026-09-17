import type { MetadataRoute } from 'next'
import { SITIO } from '@/lib/sitio'

/**
 * Se permite explícitamente a los rastreadores de IA. El sitio está pensado
 * para ser legible por ellos: el contenido viaja en el HTML, no detrás de JS.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
    ],
    sitemap: `${SITIO.url}/sitemap.xml`,
    host: SITIO.url,
  }
}
