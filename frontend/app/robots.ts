import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/revalidate', '/subscribe'],
    },
    sitemap: 'https://www.sensiblelivingfoundation.org/sitemap.xml',
  }
}
