import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? `${title} | Orua Organics` : 'Orua Organics | Africa\'s Natural Wellness'}</title>
        <meta name="description" content="Rooted in Africa. Grown for the World. Premium organic wellness products from Liberian soil, crafted with care in Atlanta, Georgia." />
        <meta name="keywords" content="organic, wellness, Africa, natural, moringa, turmeric, baobab, soursop, noni, ginger, sustainable, farm-to-home" />
        <meta name="author" content="Orua Organics" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://orua-organics.pages.dev/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orua-organics.pages.dev/" />
        <meta property="og:title" content="Orua Organics | Africa's Natural Wellness" />
        <meta property="og:description" content="Rooted in Africa. Grown for the World. Premium organic wellness products from Liberian soil, crafted with care in Atlanta, Georgia." />
        <meta property="og:image" content="https://orua-organics.pages.dev/static/og-image.jpg" />
        <meta property="og:site_name" content="Orua Organics" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://orua-organics.pages.dev/" />
        <meta property="twitter:title" content="Orua Organics | Africa's Natural Wellness" />
        <meta property="twitter:description" content="Rooted in Africa. Grown for the World. Premium organic wellness products from Liberian soil." />
        <meta property="twitter:image" content="https://orua-organics.pages.dev/static/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="theme-color" content="#2d5016" />
        <meta name="application-name" content="Orua Organics" />
        <meta name="msapplication-TileColor" content="#2d5016" />
        
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Orua Organics",
            "url": "https://orua-organics.pages.dev",
            "logo": "https://orua-organics.pages.dev/static/logo.svg",
            "description": "Premium organic wellness products from Liberian soil, crafted with care in Atlanta, Georgia.",
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
            }
          })
        }} />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        
        {/* Tailwind CSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Font Awesome Icons */}
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Custom Styles */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Tailwind Custom Config */}
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    'orua-green': '#2d5016',
                    'orua-gold': '#d4a574',
                    'orua-brown': '#8b4513',
                    'orua-light': '#f5f3f0',
                    'orua-dark': '#1a3508'
                  },
                  fontFamily: {
                    'orua': ['Playfair Display', 'serif'],
                    'body': ['Inter', 'sans-serif']
                  }
                }
              }
            }
          `
        }} />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body class="bg-orua-light font-body text-gray-800">
        {children}
        
        {/* Scripts */}
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/performance-monitor.js"></script>
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
