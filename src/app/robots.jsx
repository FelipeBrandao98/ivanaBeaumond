export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/ib-login/',
    },
    sitemap: 'https://www.ivanabeaumond.com/sitemap.xml',
  }
}
