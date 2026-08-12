import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.bsquyen108.com/sitemap.xml',
    host: 'https://www.bsquyen108.com',
  }
}
