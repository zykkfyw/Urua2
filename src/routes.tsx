import { Hono } from 'hono'

const routes = new Hono()

// Product detail pages
routes.get('/products/:product', (c) => {
  const product = c.req.param('product')
  
  const products: Record<string, any> = {
    moringa: {
      name: 'Moringa',
      description: 'The "miracle tree" packed with vitamins, minerals, and antioxidants',
      benefits: ['Rich in Vitamin A, C, and E', 'High in protein and iron', 'Anti-inflammatory properties', 'Supports immune system'],
      forms: ['Organic Powder', 'Herbal Tea Blend', 'Cold-Pressed Oil'],
      origin: 'Sustainably harvested from Liberian farms',
      icon: 'fas fa-seedling',
      color: 'green'
    },
    turmeric: {
      name: 'Turmeric',
      description: 'Golden spice with powerful anti-inflammatory properties',
      benefits: ['Contains curcumin compound', 'Natural anti-inflammatory', 'Antioxidant properties', 'Supports joint health'],
      forms: ['Organic Powder', 'Turmeric Tea', 'Healing Balm'],
      origin: 'Hand-harvested from organic Liberian gardens',
      icon: 'fas fa-fire',
      color: 'orange'
    },
    baobab: {
      name: 'Baobab',
      description: 'Superfruit from the "Tree of Life" rich in vitamin C',
      benefits: ['6x more Vitamin C than oranges', 'High in fiber and potassium', 'Supports digestive health', 'Natural energy boost'],
      forms: ['Fruit Powder', 'Wellness Tea', 'Nourishing Oil'],
      origin: 'From ancient baobab trees in rural Liberia',
      icon: 'fas fa-tree',
      color: 'amber'
    },
    soursop: {
      name: 'Soursop',
      description: 'Tropical fruit known for its immune-boosting properties',
      benefits: ['Rich in antioxidants', 'Supports immune system', 'Natural vitamin source', 'Traditional wellness fruit'],
      forms: ['Herbal Tea', 'Concentrated Extract'],
      origin: 'Wild-harvested from Liberian rainforests',
      icon: 'fas fa-apple-alt',
      color: 'emerald'
    },
    ginger: {
      name: 'Ginger',
      description: 'Warming spice for digestion and circulation support',
      benefits: ['Supports digestive health', 'Natural anti-nausea', 'Warming properties', 'Circulation support'],
      forms: ['Dried Root Powder', 'Ginger Tea', 'Warming Balm'],
      origin: 'Cultivated in mineral-rich Liberian soil',
      icon: 'fas fa-pepper-hot',
      color: 'orange'
    },
    noni: {
      name: 'Noni',
      description: 'Traditional healing fruit with adaptogenic properties',
      benefits: ['Adaptogenic properties', 'Traditional medicine', 'Supports overall wellness', 'Natural energy'],
      forms: ['Herbal Tea', 'Noni Extract'],
      origin: 'Traditionally harvested by Liberian communities',
      icon: 'fas fa-mortar-pestle',
      color: 'purple'
    }
  }
  
  const productData = products[product]
  if (!productData) {
    return c.notFound()
  }
  
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${productData.name} | Orua Organics</title>
        <meta name="description" content="${productData.description} - Premium organic ${productData.name} from Liberian soil.">
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
    <body class="bg-orua-light font-body text-gray-800">
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
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <a href="/" class="text-gray-600 hover:text-orua-green px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                            <a href="/#products" class="text-orua-dark hover:text-orua-green px-3 py-2 rounded-md text-sm font-medium transition-colors">Products</a>
                            <a href="/#about" class="text-gray-600 hover:text-orua-green px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                            <a href="/#contact" class="text-gray-600 hover:text-orua-green px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Product Detail -->
        <section class="py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Breadcrumb -->
                <nav class="mb-8">
                    <ol class="flex items-center space-x-2 text-sm text-gray-600">
                        <li><a href="/" class="hover:text-orua-green">Home</a></li>
                        <li><i class="fas fa-chevron-right text-xs"></i></li>
                        <li><a href="/#products" class="hover:text-orua-green">Products</a></li>
                        <li><i class="fas fa-chevron-right text-xs"></i></li>
                        <li class="text-orua-green font-medium">${productData.name}</li>
                    </ol>
                </nav>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <!-- Product Image/Icon -->
                    <div class="bg-gradient-to-br from-${productData.color}-100 to-${productData.color}-200 rounded-lg p-12 text-center">
                        <i class="${productData.icon} text-8xl text-${productData.color}-600 mb-6"></i>
                        <h1 class="text-4xl font-orua font-bold text-orua-dark mb-4">${productData.name}</h1>
                        <p class="text-lg text-gray-600">${productData.description}</p>
                    </div>

                    <!-- Product Info -->
                    <div>
                        <div class="mb-8">
                            <h2 class="text-2xl font-orua font-semibold text-orua-dark mb-4">Health Benefits</h2>
                            <ul class="space-y-3">
                                ${productData.benefits.map((benefit: string) => `
                                    <li class="flex items-start">
                                        <i class="fas fa-leaf text-orua-green mr-3 mt-1"></i>
                                        <span class="text-gray-700">${benefit}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        <div class="mb-8">
                            <h2 class="text-2xl font-orua font-semibold text-orua-dark mb-4">Available Forms</h2>
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                ${productData.forms.map((form: string) => `
                                    <div class="bg-white p-4 rounded-lg shadow-sm border border-orua-light">
                                        <i class="fas fa-check-circle text-orua-green mr-2"></i>
                                        <span class="text-gray-700">${form}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="mb-8">
                            <h2 class="text-2xl font-orua font-semibold text-orua-dark mb-4">Origin & Quality</h2>
                            <div class="bg-orua-light p-6 rounded-lg">
                                <div class="flex items-start">
                                    <i class="fas fa-globe-africa text-orua-green text-xl mr-3 mt-1"></i>
                                    <div>
                                        <h3 class="font-semibold text-orua-dark mb-2">Liberian Heritage</h3>
                                        <p class="text-gray-700">${productData.origin}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Shop Now Section -->
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h2 class="text-xl font-orua font-semibold text-orua-dark mb-4">Shop ${productData.name}</h2>
                            <p class="text-gray-600 mb-6">Choose your preferred shopping method to purchase premium ${productData.name} products.</p>
                            <div class="space-y-3">
                                <a href="#" class="block bg-green-500 text-white text-center py-3 px-6 rounded-lg hover:bg-green-600 transition-colors">
                                    <i class="fab fa-shopify mr-2"></i>
                                    Shop on Shopify Store
                                </a>
                                <a href="#" class="block bg-blue-500 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
                                    <i class="fab fa-square mr-2"></i>
                                    Shop on Square Store
                                </a>
                                <a href="tel:+1-555-ORUA-ORG" class="block bg-orua-green text-white text-center py-3 px-6 rounded-lg hover:bg-orua-dark transition-colors">
                                    <i class="fas fa-phone mr-2"></i>
                                    Call to Order: +1 (555) ORUA-ORG
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Related Products -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-orua font-bold text-orua-dark mb-4">Explore More Products</h2>
                    <p class="text-lg text-gray-600">Discover our complete range of African wellness products</p>
                </div>
                <div class="text-center">
                    <a href="/#products" class="bg-orua-green text-white px-8 py-3 rounded-lg hover:bg-orua-dark transition-colors">
                        <i class="fas fa-arrow-left mr-2"></i>
                        View All Products
                    </a>
                </div>
            </div>
        </section>

        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default routes