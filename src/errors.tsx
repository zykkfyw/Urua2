import { Hono } from 'hono'

const errors = new Hono()

// 404 Not Found Page
errors.notFound((c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Page Not Found | Orua Organics</title>
        <meta name="robots" content="noindex, nofollow">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/style.css" rel="stylesheet">
        <script>
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
        </script>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    </head>
    <body class="bg-orua-light font-body text-gray-800 min-h-screen flex flex-col">
        <!-- Navigation -->
        <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <a href="/" class="flex items-center">
                            <img src="/static/logo.svg" alt="Orua Organics" class="h-10 w-auto">
                            <span class="ml-2 text-xl font-orua font-semibold text-orua-dark">Orua Organics</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 404 Content -->
        <main class="flex-1 flex items-center justify-center">
            <div class="text-center px-4 sm:px-6 lg:px-8">
                <div class="bg-gradient-to-br from-green-100 to-green-200 rounded-full w-32 h-32 mx-auto mb-8 flex items-center justify-center">
                    <i class="fas fa-seedling text-6xl text-green-600"></i>
                </div>
                
                <h1 class="text-4xl md:text-5xl font-orua font-bold text-orua-dark mb-4">Page Not Found</h1>
                <p class="text-xl text-gray-600 mb-8 max-w-md mx-auto">
                    Oops! The page you're looking for seems to have wandered off into the African wilderness.
                </p>
                
                <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                    <a href="/" class="block sm:inline-block bg-orua-green text-white px-8 py-3 rounded-lg hover:bg-orua-dark transition-colors">
                        <i class="fas fa-home mr-2"></i>
                        Go Home
                    </a>
                    <a href="/#products" class="block sm:inline-block border-2 border-orua-green text-orua-green px-8 py-3 rounded-lg hover:bg-orua-green hover:text-white transition-colors">
                        <i class="fas fa-leaf mr-2"></i>
                        Browse Products
                    </a>
                </div>
                
                <div class="mt-12">
                    <h2 class="text-lg font-semibold text-orua-dark mb-4">Popular Pages</h2>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                        <a href="/products/moringa" class="text-orua-green hover:text-orua-dark transition-colors">
                            <i class="fas fa-seedling mr-1"></i>Moringa
                        </a>
                        <a href="/products/turmeric" class="text-orua-green hover:text-orua-dark transition-colors">
                            <i class="fas fa-fire mr-1"></i>Turmeric
                        </a>
                        <a href="/products/baobab" class="text-orua-green hover:text-orua-dark transition-colors">
                            <i class="fas fa-tree mr-1"></i>Baobab
                        </a>
                        <a href="/#about" class="text-orua-green hover:text-orua-dark transition-colors">
                            <i class="fas fa-heart mr-1"></i>About Us
                        </a>
                        <a href="/#contact" class="text-orua-green hover:text-orua-dark transition-colors">
                            <i class="fas fa-envelope mr-1"></i>Contact
                        </a>
                        <a href="/#sustainability" class="text-orua-green hover:text-orua-dark transition-colors">
                            <i class="fas fa-leaf mr-1"></i>Sustainability
                        </a>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="bg-orua-dark text-white py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="flex items-center justify-center mb-4">
                    <img src="/static/logo.svg" alt="Orua Organics" class="h-6 w-auto">
                    <span class="ml-2 text-lg font-orua font-semibold">Orua Organics</span>
                </div>
                <p class="text-gray-300">&copy; 2024 Orua Organics. Rooted in Africa. Grown for the World.</p>
            </div>
        </footer>
    </body>
    </html>
  `, 404)
})

// Custom error handler for other errors
errors.onError((err, c) => {
  console.error('Application Error:', err)
  
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error | Orua Organics</title>
        <meta name="robots" content="noindex, nofollow">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    </head>
    <body class="bg-gray-100 min-h-screen flex items-center justify-center">
        <div class="text-center px-4">
            <div class="bg-red-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <i class="fas fa-exclamation-triangle text-4xl text-red-600"></i>
            </div>
            <h1 class="text-3xl font-bold text-gray-800 mb-4">Something Went Wrong</h1>
            <p class="text-gray-600 mb-6">We're experiencing some technical difficulties. Please try again later.</p>
            <a href="/" class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                <i class="fas fa-home mr-2"></i>
                Return Home
            </a>
        </div>
    </body>
    </html>
  `, 500)
})

export default errors