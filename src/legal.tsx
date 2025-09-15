import { Hono } from 'hono'

const legal = new Hono()

// Privacy Policy Page
legal.get('/privacy', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Privacy Policy | Orua Organics</title>
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
                </div>
            </div>
        </nav>

        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 class="text-4xl font-orua font-bold text-orua-dark mb-8">Privacy Policy</h1>
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-600 mb-6">Last updated: September 15, 2024</p>
                
                <h2 class="text-2xl font-semibold text-orua-dark mb-4">Information We Collect</h2>
                <p class="mb-6">We collect information you provide directly to us, such as when you contact us through our website forms or subscribe to our newsletter.</p>
                
                <h2 class="text-2xl font-semibold text-orua-dark mb-4">How We Use Your Information</h2>
                <ul class="list-disc pl-6 mb-6 space-y-2">
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To send you newsletters and marketing communications (with your consent)</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations</li>
                </ul>
                
                <h2 class="text-2xl font-semibold text-orua-dark mb-4">Information Sharing</h2>
                <p class="mb-6">We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
                
                <h2 class="text-2xl font-semibold text-orua-dark mb-4">Data Security</h2>
                <p class="mb-6">We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                
                <h2 class="text-2xl font-semibold text-orua-dark mb-4">Your Rights</h2>
                <p class="mb-6">You have the right to access, update, or delete your personal information. You may also unsubscribe from our communications at any time.</p>
                
                <h2 class="text-2xl font-semibold text-orua-dark mb-4">Contact Us</h2>
                <p class="mb-6">If you have any questions about this Privacy Policy, please contact us at:</p>
                <div class="bg-orua-light p-6 rounded-lg">
                    <p><strong>Email:</strong> hello@oruaorganics.com</p>
                    <p><strong>Phone:</strong> +1 (555) ORUA-ORG</p>
                    <p><strong>Address:</strong> Atlanta, Georgia, USA</p>
                </div>
            </div>
            
            <div class="mt-12">
                <a href="/" class="bg-orua-green text-white px-6 py-3 rounded-lg hover:bg-orua-dark transition-colors">
                    <i class="fas fa-arrow-left mr-2"></i>
                    Back to Home
                </a>
            </div>
        </div>
    </body>
    </html>
  `)
})

// Terms of Service Page
legal.get('/terms', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Terms of Service | Orua Organics</title>
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
                </div>
            </div>
        </nav>

        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 class="text-4xl font-orua font-bold text-orua-dark mb-8">Terms of Service</h1>
            <div class="prose prose-lg max-w-none">
                <p class="text-gray-600 mb-6">Last updated: September 15, 2024</p>
                
                <h2 class="text-2xl font-semibold text-orua-dark mb-4">Acceptance of Terms</h2>
                <p class="mb-6">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
                
                <h2 class="text-2xl font-semibold text-orua-dark mb-4">Use of Website</h2>
                <ul class="list-disc pl-6 mb-6 space-y-2">
                    <li>You may use our website for lawful purposes only</li>
                    <li>You agree not to use the website in any way that could damage or impair the website</li>
                    <li>You will not attempt to gain unauthorized access to any part of the website</li>
                </ul>
                
                <h2 class="text-2xl font-semibold text-orua-dark mb-4">Product Information</h2>
                <p class="mb-6">We strive to provide accurate product information, but we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.</p>
                
                <h2 class="text-2xl font-semibold text-orua-dark mb-4">Health Disclaimer</h2>
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <p class="text-sm text-yellow-800">Our products are not intended to diagnose, treat, cure, or prevent any disease. Please consult with a healthcare professional before using any herbal products, especially if you have any medical conditions or are taking medications.</p>
                </div>
                
                <h2 class="text-2xl font-semibold text-orua-dark mb-4">Intellectual Property</h2>
                <p class="mb-6">All content on this website, including text, graphics, logos, and images, is the property of Orua Organics and is protected by copyright laws.</p>
                
                <h2 class="text-2xl font-semibold text-orua-dark mb-4">Limitation of Liability</h2>
                <p class="mb-6">Orua Organics shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products.</p>
                
                <h2 class="text-2xl font-semibold text-orua-dark mb-4">Contact Information</h2>
                <p class="mb-6">If you have any questions about these Terms of Service, please contact us:</p>
                <div class="bg-orua-light p-6 rounded-lg">
                    <p><strong>Email:</strong> hello@oruaorganics.com</p>
                    <p><strong>Phone:</strong> +1 (555) ORUA-ORG</p>
                    <p><strong>Address:</strong> Atlanta, Georgia, USA</p>
                </div>
            </div>
            
            <div class="mt-12">
                <a href="/" class="bg-orua-green text-white px-6 py-3 rounded-lg hover:bg-orua-dark transition-colors">
                    <i class="fas fa-arrow-left mr-2"></i>
                    Back to Home
                </a>
            </div>
        </div>
    </body>
    </html>
  `)
})

export default legal