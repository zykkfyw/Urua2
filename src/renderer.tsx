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
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
