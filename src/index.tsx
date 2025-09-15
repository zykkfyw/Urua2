import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Apply renderer to all routes
app.use(renderer)

// Home page
app.get('/', (c) => {
  return c.render(
    <div>
      {/* Navigation */}
      <nav class="bg-white shadow-sm fixed w-full top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <img src="/static/logo.svg" alt="Orua Organics" class="h-10 w-auto" />
              <span class="ml-2 text-xl font-orua font-semibold text-orua-dark">Orua Organics</span>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a href="#home" class="text-orua-dark hover:text-orua-green px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#about" class="text-gray-600 hover:text-orua-green px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#products" class="text-gray-600 hover:text-orua-green px-3 py-2 rounded-md text-sm font-medium transition-colors">Products</a>
                <a href="#sustainability" class="text-gray-600 hover:text-orua-green px-3 py-2 rounded-md text-sm font-medium transition-colors">Sustainability</a>
                <a href="#contact" class="text-gray-600 hover:text-orua-green px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                <a href="#shop" class="bg-orua-green text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orua-dark transition-colors">Shop Now</a>
              </div>
            </div>
            <div class="md:hidden">
              <button id="mobile-menu-button" class="text-gray-600 hover:text-orua-green focus:outline-none">
                <i class="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div id="mobile-menu" class="md:hidden hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" class="text-orua-dark hover:text-orua-green block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" class="text-gray-600 hover:text-orua-green block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#products" class="text-gray-600 hover:text-orua-green block px-3 py-2 rounded-md text-base font-medium">Products</a>
            <a href="#sustainability" class="text-gray-600 hover:text-orua-green block px-3 py-2 rounded-md text-base font-medium">Sustainability</a>
            <a href="#contact" class="text-gray-600 hover:text-orua-green block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            <a href="#shop" class="bg-orua-green text-white block mx-3 my-2 px-4 py-2 rounded-md text-base font-medium text-center">Shop Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" class="relative bg-gradient-to-br from-orua-light via-white to-orua-light pt-20 pb-16 min-h-screen flex items-center">
        <div class="absolute inset-0 bg-[url('/static/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-10"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="text-center">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-orua font-bold text-orua-dark mb-6">
              Africa's Natural Wellness
            </h1>
            <p class="text-xl md:text-2xl text-orua-green font-semibold mb-4">
              Rooted in Africa. Grown for the World.
            </p>
            <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Premium organic wellness products sourced from Liberian soil, 
              crafted with care and delivered to your doorstep. Experience the 
              healing power of nature's finest ingredients.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#shop" class="bg-orua-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orua-dark transition-colors transform hover:scale-105">
                <i class="fas fa-shopping-cart mr-2"></i>
                Shop Our Products
              </a>
              <a href="#about" class="border-2 border-orua-green text-orua-green px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orua-green hover:text-white transition-colors">
                Learn Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Heartbeat Section */}
      <section id="about" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-orua font-bold text-orua-dark mb-4">Our Heartbeat</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Four core values guide everything we do, from seed to shelf
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center group">
              <div class="bg-orua-light p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-orua-green transition-colors">
                <i class="fas fa-heart text-2xl text-orua-green group-hover:text-white"></i>
              </div>
              <h3 class="text-xl font-semibold text-orua-dark mb-2">Healing</h3>
              <p class="text-gray-600">Nature's remedies for modern wellness</p>
            </div>
            <div class="text-center group">
              <div class="bg-orua-light p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-orua-green transition-colors">
                <i class="fas fa-leaf text-2xl text-orua-green group-hover:text-white"></i>
              </div>
              <h3 class="text-xl font-semibold text-orua-dark mb-2">Sustainability</h3>
              <p class="text-gray-600">Protecting our planet for future generations</p>
            </div>
            <div class="text-center group">
              <div class="bg-orua-light p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-orua-green transition-colors">
                <i class="fas fa-history text-2xl text-orua-green group-hover:text-white"></i>
              </div>
              <h3 class="text-xl font-semibold text-orua-dark mb-2">Tradition</h3>
              <p class="text-gray-600">Ancient wisdom meets modern science</p>
            </div>
            <div class="text-center group">
              <div class="bg-orua-light p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-orua-green transition-colors">
                <i class="fas fa-award text-2xl text-orua-green group-hover:text-white"></i>
              </div>
              <h3 class="text-xl font-semibold text-orua-dark mb-2">Quality</h3>
              <p class="text-gray-600">Rigorous testing and pure ingredients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" class="py-16 bg-orua-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-orua font-bold text-orua-dark mb-4">Our Natural Treasury</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the gifts of African soil, carefully harvested and crafted into premium wellness products
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Moringa */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div class="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <i class="fas fa-seedling text-6xl text-green-600"></i>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-orua-dark mb-2">Moringa</h3>
                <p class="text-gray-600 mb-4">The "miracle tree" packed with vitamins, minerals, and antioxidants</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Teas</span>
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Oils</span>
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Powder</span>
                </div>
                <button class="w-full bg-orua-green text-white py-2 px-4 rounded hover:bg-orua-dark transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Turmeric */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div class="h-48 bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center">
                <i class="fas fa-fire text-6xl text-orange-500"></i>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-orua-dark mb-2">Turmeric</h3>
                <p class="text-gray-600 mb-4">Golden spice with powerful anti-inflammatory properties</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Teas</span>
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Balms</span>
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Powder</span>
                </div>
                <button class="w-full bg-orua-green text-white py-2 px-4 rounded hover:bg-orua-dark transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Baobab */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div class="h-48 bg-gradient-to-br from-amber-100 to-brown-200 flex items-center justify-center">
                <i class="fas fa-tree text-6xl text-amber-600"></i>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-orua-dark mb-2">Baobab</h3>
                <p class="text-gray-600 mb-4">Superfruit from the "Tree of Life" rich in vitamin C</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Teas</span>
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Powder</span>
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Oils</span>
                </div>
                <button class="w-full bg-orua-green text-white py-2 px-4 rounded hover:bg-orua-dark transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Soursop */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div class="h-48 bg-gradient-to-br from-emerald-100 to-teal-200 flex items-center justify-center">
                <i class="fas fa-apple-alt text-6xl text-emerald-600"></i>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-orua-dark mb-2">Soursop</h3>
                <p class="text-gray-600 mb-4">Tropical fruit known for its immune-boosting properties</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Teas</span>
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Extracts</span>
                </div>
                <button class="w-full bg-orua-green text-white py-2 px-4 rounded hover:bg-orua-dark transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Ginger */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div class="h-48 bg-gradient-to-br from-orange-100 to-red-200 flex items-center justify-center">
                <i class="fas fa-pepper-hot text-6xl text-orange-600"></i>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-orua-dark mb-2">Ginger</h3>
                <p class="text-gray-600 mb-4">Warming spice for digestion and circulation support</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Teas</span>
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Oils</span>
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Balms</span>
                </div>
                <button class="w-full bg-orua-green text-white py-2 px-4 rounded hover:bg-orua-dark transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            {/* Noni */}
            <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div class="h-48 bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center">
                <i class="fas fa-mortar-pestle text-6xl text-purple-600"></i>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold text-orua-dark mb-2">Noni</h3>
                <p class="text-gray-600 mb-4">Traditional healing fruit with adaptogenic properties</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Teas</span>
                  <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Extracts</span>
                </div>
                <button class="w-full bg-orua-green text-white py-2 px-4 rounded hover:bg-orua-dark transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Integration Section */}
      <section id="shop" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-orua font-bold text-orua-dark mb-4">Shop Our Products</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to shop our premium organic wellness products
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg text-center border-2 border-green-200 hover:border-orua-green transition-colors">
              <div class="bg-green-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i class="fab fa-shopify text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-orua-dark mb-2">Shopify Store</h3>
              <p class="text-gray-600 mb-4">Full product catalog with secure checkout</p>
              <a href="#" class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors inline-block">
                Visit Store
              </a>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
              <div class="bg-blue-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i class="fab fa-square text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-orua-dark mb-2">Square Store</h3>
              <p class="text-gray-600 mb-4">Alternative shopping experience</p>
              <a href="#" class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-block">
                Visit Store
              </a>
            </div>
            
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg text-center border-2 border-purple-200 hover:border-purple-500 transition-colors">
              <div class="bg-purple-500 text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i class="fas fa-phone text-2xl"></i>
              </div>
              <h3 class="text-xl font-semibold text-orua-dark mb-2">Phone Orders</h3>
              <p class="text-gray-600 mb-4">Speak with our wellness experts</p>
              <a href="tel:+1-555-ORUA-ORG" class="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors inline-block">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" class="py-16 bg-orua-light">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-orua font-bold text-orua-dark mb-4">Grown with Respect, Crafted with Care</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              From Liberian farms to Atlanta facilities, every step honors our commitment to sustainability and quality
            </p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="bg-orua-green text-white p-3 rounded-full mr-4 flex-shrink-0">
                    <i class="fas fa-globe-africa text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-orua-dark mb-2">Liberian Heritage</h3>
                    <p class="text-gray-600">Our ingredients are sourced directly from sustainable farms in Liberia, supporting local communities and preserving traditional farming methods.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="bg-orua-green text-white p-3 rounded-full mr-4 flex-shrink-0">
                    <i class="fas fa-leaf text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-orua-dark mb-2">Organic Certification</h3>
                    <p class="text-gray-600">All our products meet the highest organic standards, ensuring purity and potency in every package.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="bg-orua-green text-white p-3 rounded-full mr-4 flex-shrink-0">
                    <i class="fas fa-microscope text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-orua-dark mb-2">Quality Testing</h3>
                    <p class="text-gray-600">Every batch undergoes rigorous testing in our Atlanta facility to guarantee safety, purity, and effectiveness.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="bg-orua-green text-white p-3 rounded-full mr-4 flex-shrink-0">
                    <i class="fas fa-truck text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold text-orua-dark mb-2">Farm-to-Home Traceability</h3>
                    <p class="text-gray-600">Track your products from harvest to delivery with complete transparency in our supply chain.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-lg">
              <h3 class="text-2xl font-orua font-semibold text-orua-dark mb-6 text-center">Our Impact</h3>
              <div class="grid grid-cols-2 gap-6">
                <div class="text-center">
                  <div class="text-3xl font-bold text-orua-green mb-2">50+</div>
                  <div class="text-sm text-gray-600">Liberian Farmers Supported</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-orua-green mb-2">100%</div>
                  <div class="text-sm text-gray-600">Organic Ingredients</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-orua-green mb-2">0</div>
                  <div class="text-sm text-gray-600">Harmful Chemicals</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-orua-green mb-2">24hr</div>
                  <div class="text-sm text-gray-600">Quality Testing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-orua font-bold text-orua-dark mb-4">Get In Touch</h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or want to learn more about our mission? We'd love to hear from you.
            </p>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div class="bg-orua-light p-8 rounded-lg">
              <h3 class="text-xl font-semibold text-orua-dark mb-6">Send us a message</h3>
              <form id="contact-form" class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orua-green focus:border-orua-green" />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orua-green focus:border-orua-green" />
                </div>
                <div>
                  <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" id="subject" name="subject" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orua-green focus:border-orua-green" />
                </div>
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows="4" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orua-green focus:border-orua-green"></textarea>
                </div>
                <button type="submit" class="w-full bg-orua-green text-white py-3 px-4 rounded-md hover:bg-orua-dark transition-colors">
                  <i class="fas fa-paper-plane mr-2"></i>
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div class="space-y-8">
                <div>
                  <h3 class="text-xl font-semibold text-orua-dark mb-4">Contact Information</h3>
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <div class="bg-orua-green text-white p-3 rounded-full mr-4">
                        <i class="fas fa-phone"></i>
                      </div>
                      <div>
                        <div class="font-medium text-orua-dark">Phone</div>
                        <div class="text-gray-600">+1 (555) ORUA-ORG</div>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="bg-orua-green text-white p-3 rounded-full mr-4">
                        <i class="fas fa-envelope"></i>
                      </div>
                      <div>
                        <div class="font-medium text-orua-dark">Email</div>
                        <div class="text-gray-600">hello@oruaorganics.com</div>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="bg-orua-green text-white p-3 rounded-full mr-4">
                        <i class="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <div class="font-medium text-orua-dark">Location</div>
                        <div class="text-gray-600">Atlanta, Georgia, USA</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 class="text-xl font-semibold text-orua-dark mb-4">Follow Us</h3>
                  <div class="flex space-x-4">
                    <a href="#" class="bg-orua-green text-white p-3 rounded-full hover:bg-orua-dark transition-colors">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="bg-orua-green text-white p-3 rounded-full hover:bg-orua-dark transition-colors">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="bg-orua-green text-white p-3 rounded-full hover:bg-orua-dark transition-colors">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="bg-orua-green text-white p-3 rounded-full hover:bg-orua-dark transition-colors">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                
                <div class="bg-orua-light p-6 rounded-lg">
                  <h4 class="font-semibold text-orua-dark mb-2">Newsletter Signup</h4>
                  <p class="text-gray-600 mb-4">Stay updated with our latest products and wellness tips</p>
                  <form class="flex">
                    <input type="email" placeholder="Your email" class="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orua-green focus:border-orua-green" />
                    <button type="submit" class="bg-orua-green text-white px-4 py-2 rounded-r-md hover:bg-orua-dark transition-colors">
                      <i class="fas fa-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-orua-dark text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div class="flex items-center mb-4">
                <img src="/static/logo.svg" alt="Orua Organics" class="h-8 w-auto" />
                <span class="ml-2 text-xl font-orua font-semibold">Orua Organics</span>
              </div>
              <p class="text-gray-300 mb-4">Rooted in Africa. Grown for the World.</p>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-300 hover:text-orua-gold transition-colors">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="text-gray-300 hover:text-orua-gold transition-colors">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="text-gray-300 hover:text-orua-gold transition-colors">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="text-gray-300 hover:text-orua-gold transition-colors">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Products</h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-300 hover:text-orua-gold transition-colors">Moringa</a></li>
                <li><a href="#" class="text-gray-300 hover:text-orua-gold transition-colors">Turmeric</a></li>
                <li><a href="#" class="text-gray-300 hover:text-orua-gold transition-colors">Baobab</a></li>
                <li><a href="#" class="text-gray-300 hover:text-orua-gold transition-colors">Soursop</a></li>
                <li><a href="#" class="text-gray-300 hover:text-orua-gold transition-colors">Ginger</a></li>
                <li><a href="#" class="text-gray-300 hover:text-orua-gold transition-colors">Noni</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Company</h4>
              <ul class="space-y-2">
                <li><a href="#about" class="text-gray-300 hover:text-orua-gold transition-colors">About Us</a></li>
                <li><a href="#sustainability" class="text-gray-300 hover:text-orua-gold transition-colors">Sustainability</a></li>
                <li><a href="#contact" class="text-gray-300 hover:text-orua-gold transition-colors">Contact</a></li>
                <li><a href="#" class="text-gray-300 hover:text-orua-gold transition-colors">Privacy Policy</a></li>
                <li><a href="#" class="text-gray-300 hover:text-orua-gold transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-4">Contact</h4>
              <ul class="space-y-2 text-gray-300">
                <li><i class="fas fa-phone mr-2"></i>+1 (555) ORUA-ORG</li>
                <li><i class="fas fa-envelope mr-2"></i>hello@oruaorganics.com</li>
                <li><i class="fas fa-map-marker-alt mr-2"></i>Atlanta, Georgia, USA</li>
              </ul>
            </div>
          </div>
          <div class="border-t border-gray-700 mt-8 pt-8 text-center">
            <p class="text-gray-300">&copy; 2024 Orua Organics. All rights reserved. Grown with love in Liberia, crafted with care in Atlanta.</p>
          </div>
        </div>
      </footer>
    </div>
  )
})

// API Routes
app.post('/api/contact', async (c) => {
  try {
    const { name, email, subject, message } = await c.req.json()
    
    // Here you would integrate with your email service
    // For now, we'll just log and return success
    console.log('Contact form submission:', { name, email, subject, message })
    
    return c.json({ 
      success: true, 
      message: 'Thank you for your message. We\'ll get back to you soon!' 
    })
  } catch (error) {
    return c.json({ 
      success: false, 
      message: 'There was an error sending your message. Please try again.' 
    }, 500)
  }
})

// Newsletter signup
app.post('/api/newsletter', async (c) => {
  try {
    const { email } = await c.req.json()
    
    // Here you would integrate with your email marketing service
    console.log('Newsletter signup:', { email })
    
    return c.json({ 
      success: true, 
      message: 'Thank you for subscribing to our newsletter!' 
    })
  } catch (error) {
    return c.json({ 
      success: false, 
      message: 'There was an error with your subscription. Please try again.' 
    }, 500)
  }
})

export default app
