import { Hono } from 'hono'

const sitemap = new Hono()

// XML Sitemap
sitemap.get('/sitemap.xml', (c) => {
  const baseUrl = 'https://orua-organics.pages.dev'
  
  const pages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/products/moringa', priority: '0.9', changefreq: 'monthly' },
    { url: '/products/turmeric', priority: '0.9', changefreq: 'monthly' },
    { url: '/products/baobab', priority: '0.9', changefreq: 'monthly' },
    { url: '/products/soursop', priority: '0.9', changefreq: 'monthly' },
    { url: '/products/ginger', priority: '0.9', changefreq: 'monthly' },
    { url: '/products/noni', priority: '0.9', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms', priority: '0.5', changefreq: 'yearly' }
  ]
  
  const currentDate = new Date().toISOString().split('T')[0]
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`
  
  c.header('Content-Type', 'application/xml')
  return c.text(sitemapXml)
})

// JSON-LD Structured Data for products
sitemap.get('/structured-data.json', (c) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Orua Organics",
    "description": "Premium organic wellness products from Liberian soil, crafted with care in Atlanta, Georgia.",
    "url": "https://orua-organics.pages.dev",
    "logo": "https://orua-organics.pages.dev/static/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-ORUA-ORG",
      "contactType": "Customer Service",
      "email": "hello@oruaorganics.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Atlanta",
      "addressRegion": "Georgia",
      "addressCountry": "USA"
    },
    "founder": {
      "@type": "Organization",
      "name": "Orua Organics"
    },
    "products": [
      {
        "@type": "Product",
        "name": "Organic Moringa",
        "description": "The miracle tree packed with vitamins, minerals, and antioxidants",
        "category": "Health Supplements",
        "brand": "Orua Organics"
      },
      {
        "@type": "Product", 
        "name": "Organic Turmeric",
        "description": "Golden spice with powerful anti-inflammatory properties",
        "category": "Health Supplements",
        "brand": "Orua Organics"
      },
      {
        "@type": "Product",
        "name": "Organic Baobab",
        "description": "Superfruit from the Tree of Life rich in vitamin C",
        "category": "Health Supplements", 
        "brand": "Orua Organics"
      },
      {
        "@type": "Product",
        "name": "Organic Soursop", 
        "description": "Tropical fruit known for its immune-boosting properties",
        "category": "Health Supplements",
        "brand": "Orua Organics"
      },
      {
        "@type": "Product",
        "name": "Organic Ginger",
        "description": "Warming spice for digestion and circulation support", 
        "category": "Health Supplements",
        "brand": "Orua Organics"
      },
      {
        "@type": "Product",
        "name": "Organic Noni",
        "description": "Traditional healing fruit with adaptogenic properties",
        "category": "Health Supplements",
        "brand": "Orua Organics"
      }
    ]
  }
  
  return c.json(structuredData)
})

export default sitemap