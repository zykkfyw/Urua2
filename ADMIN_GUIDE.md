# 🔧 Orua Organics - Admin & Content Management Guide

This comprehensive guide covers all aspects of managing and updating the Orua Organics website.

## 📋 Quick Reference

### 🌐 Production URLs
- **Live Site**: https://orua-organics.pages.dev
- **GitHub**: https://github.com/zykkfyw/Urua2
- **Admin Dashboard**: Cloudflare Pages Dashboard

### 📧 Contact Information
- **Email**: hello@oruaorganics.com
- **Phone**: +1 (555) ORUA-ORG
- **Location**: Atlanta, Georgia, USA

---

## 🏗️ Site Architecture

### 📄 Main Pages
```
/                    - Homepage (Hero, Products, About, Contact)
/products/moringa    - Moringa product detail page
/products/turmeric   - Turmeric product detail page  
/products/baobab     - Baobab product detail page
/products/soursop    - Soursop product detail page
/products/ginger     - Ginger product detail page
/products/noni       - Noni product detail page
/privacy             - Privacy policy
/terms               - Terms of service
```

### 🔌 API Endpoints
```
POST /api/contact     - Contact form submissions
POST /api/newsletter  - Newsletter signups
GET  /sitemap.xml     - Search engine sitemap
GET  /robots.txt      - Search engine directives
```

---

## ✏️ Content Management

### 🏠 Homepage Content

**Location**: `/src/index.tsx`

#### Hero Section
```typescript
// Update main headline (line ~35)
<h1 class="text-4xl md:text-6xl lg:text-7xl font-orua font-bold text-orua-dark mb-6">
  Africa's Natural Wellness  {/* ← Edit this */}
</h1>

// Update tagline (line ~38)
<p class="text-xl md:text-2xl text-orua-green font-semibold mb-4">
  Rooted in Africa. Grown for the World.  {/* ← Edit this */}
</p>
```

#### Our Heartbeat Values
```typescript
// Four core values section (lines ~65-95)
// Edit: Healing, Sustainability, Tradition, Quality
// Each value has: icon, title, description
```

#### Contact Information
```typescript
// Phone number (multiple locations)
"+1 (555) ORUA-ORG"  {/* ← Update to real number */}

// Email address (multiple locations) 
"hello@oruaorganics.com"  {/* ← Update to real email */}

// Address (multiple locations)
"Atlanta, Georgia, USA"  {/* ← Update to real address */}
```

### 🛍️ Product Management

**Location**: `/src/routes.tsx`

#### Adding New Products
1. **Add to product data object** (line 5):
```typescript
const products: Record<string, any> = {
  // Existing products...
  
  "new-product": {
    name: 'Product Name',
    description: 'Product description...',
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    forms: ['Tea', 'Powder', 'Oil'],
    origin: 'Source description...',
    icon: 'fas fa-icon-name',
    color: 'green' // tailwind color name
  }
}
```

2. **Add to homepage grid** (`/src/index.tsx` around line 150):
```typescript
<div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
  <div class="h-48 bg-gradient-to-br from-color-100 to-color-200 flex items-center justify-center">
    <i class="fas fa-icon text-6xl text-color-600"></i>
  </div>
  <div class="p-6">
    <h3 class="text-xl font-semibold text-orua-dark mb-2">Product Name</h3>
    <p class="text-gray-600 mb-4">Description...</p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Form 1</span>
      <span class="bg-orua-light text-orua-green px-2 py-1 rounded text-sm">Form 2</span>
    </div>
    <a href="/products/product-slug" class="block w-full bg-orua-green text-white py-2 px-4 rounded hover:bg-orua-dark transition-colors text-center">
      Learn More
    </a>
  </div>
</div>
```

#### Editing Existing Products
**Update product information** in `/src/routes.tsx`:
- Benefits array
- Available forms
- Origin story
- Icon and colors

### 🛒 E-commerce Links

**Location**: Multiple files - search for these patterns:

#### Shopify Store Links
```typescript
// Update href="#" to real Shopify store URL
<a href="https://your-shopify-store.myshopify.com" class="...">
  Visit Store
</a>
```

#### Square Store Links  
```typescript
// Update href="#" to real Square store URL
<a href="https://your-square-store-url.com" class="...">
  Visit Store  
</a>
```

#### Phone Orders
```typescript
// Update phone number
<a href="tel:+1-555-ORUA-ORG" class="...">
  Call Now
</a>
```

---

## 🎨 Design Customization

### 🎨 Colors & Branding

**Location**: Multiple files - search for `tailwind.config`

```typescript
colors: {
  'orua-green': '#2d5016',   // Primary green
  'orua-gold': '#d4a574',    // Accent gold  
  'orua-brown': '#8b4513',   // Brown accent
  'orua-light': '#f5f3f0',   // Light background
  'orua-dark': '#1a3508'     // Dark green
}
```

### 🖼️ Images & Media

**Location**: `/public/static/`

#### Logo Updates
- **File**: `/public/static/logo.svg`
- **Usage**: Replace SVG content with your logo
- **Size**: Optimized for heights of 32px-48px

#### Background Images
```typescript
// Hero background (if you add one)
<div class="absolute inset-0 bg-[url('/static/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-10"></div>
```

#### Social Media Images
- **Open Graph**: `/public/static/og-image.jpg` (1200x630px)
- **Twitter Card**: Same as Open Graph
- **Favicon**: `/public/static/favicon.ico`

### 📱 Typography

**Fonts**: Google Fonts loaded in renderer
- **Headers**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

To change fonts, update in `/src/renderer.tsx`:
```html
<link href="https://fonts.googleapis.com/css2?family=NewFont:wght@400;600&display=swap" rel="stylesheet">
```

---

## 📊 Analytics & Tracking

### 📈 Google Analytics Setup

**Location**: `/src/analytics.tsx`

1. **Get Google Analytics 4 Measurement ID**:
   - Visit https://analytics.google.com
   - Create property for orua-organics.pages.dev
   - Copy Measurement ID (format: G-XXXXXXXXXX)

2. **Update analytics code**:
```typescript
// In /src/analytics.tsx, line 4
setupGoogleAnalytics('G-YOUR-ACTUAL-ID')  // Replace with real ID
```

3. **Add to site**:
```typescript
// In /public/static/app.js, add at end:
import { initAnalytics } from '/static/analytics.js'
initAnalytics()
```

### 📧 Email Marketing Integration

#### Mailchimp Setup
1. **Create Mailchimp account**
2. **Get API key and List ID**
3. **Update newsletter API** in `/src/index.tsx`:
```typescript
app.post('/api/newsletter', async (c) => {
  const { email } = await c.req.json()
  
  // Add Mailchimp API call
  const response = await fetch('https://usX.api.mailchimp.com/3.0/lists/LIST_ID/members', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed'
    })
  })
  
  // Return appropriate response
})
```

---

## 🚀 Deployment & Updates

### 🔄 Making Content Updates

1. **Edit content** in appropriate files
2. **Test locally**:
   ```bash
   cd /path/to/webapp
   npm run build
   npm run dev:sandbox
   ```
3. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update: describe your changes"
   git push origin main
   ```
4. **Deploy to production**:
   ```bash
   npm run deploy:prod
   ```

### 🌐 Production Deployment

#### First-Time Setup
1. **Configure Cloudflare API** (Deploy tab)
2. **Create Cloudflare Pages project**:
   ```bash
   npx wrangler pages project create orua-organics \
     --production-branch main \
     --compatibility-date 2024-01-01
   ```
3. **Deploy**:
   ```bash
   npm run build
   npx wrangler pages deploy dist --project-name orua-organics
   ```

#### Regular Updates
```bash
# Quick update process
npm run build
npx wrangler pages deploy dist --project-name orua-organics
```

### 🔧 Environment Variables

**Set sensitive data** (email API keys, etc.):
```bash
npx wrangler pages secret put MAILCHIMP_API_KEY --project-name orua-organics
npx wrangler pages secret put GOOGLE_ANALYTICS_ID --project-name orua-organics
```

**Access in code**:
```typescript
// In Cloudflare Workers context
const apiKey = env.MAILCHIMP_API_KEY
```

---

## 🛡️ Security & Maintenance

### 🔒 Security Best Practices

1. **Never commit sensitive data**:
   - API keys go in Cloudflare secrets
   - Email addresses should be environment variables for production
   
2. **Regular updates**:
   - Update dependencies monthly: `npm audit fix`
   - Monitor Cloudflare security notifications

3. **Form security**:
   - All forms include CSRF protection
   - Input validation on both client and server
   - Rate limiting on API endpoints

### 📱 Testing Checklist

Before deploying major changes:

**Functionality**:
- [ ] Contact form submits successfully
- [ ] Newsletter signup works  
- [ ] All product pages load
- [ ] External e-commerce links work
- [ ] Mobile navigation functions

**Performance**:
- [ ] Page loads in < 3 seconds
- [ ] Images optimized and loading
- [ ] No console errors
- [ ] SEO meta tags present

**Cross-browser**:
- [ ] Chrome/Chromium
- [ ] Firefox  
- [ ] Safari
- [ ] Mobile browsers

---

## 📞 Support & Troubleshooting

### 🚨 Common Issues

#### Site Not Loading
1. Check Cloudflare Pages dashboard for build errors
2. Verify domain DNS settings
3. Check for recent commits that may have broken build

#### Forms Not Working
1. Verify API endpoints in browser dev tools
2. Check Cloudflare Workers logs
3. Validate CORS settings for API routes

#### SEO Issues  
1. Test with Google Search Console
2. Verify sitemap.xml is accessible
3. Check robots.txt configuration

### 📧 Getting Help

**Technical Support**:
- GitHub Issues: https://github.com/zykkfyw/Urua2/issues
- Cloudflare Support: https://support.cloudflare.com

**Content Updates**:
- This guide covers 90% of common content changes
- For major redesigns, technical expertise recommended

---

## 📈 Growth & Optimization

### 🔍 SEO Improvements

**Content**:
- Add blog section for wellness content
- Create detailed product descriptions
- Add customer testimonials

**Technical**:
- Monitor Core Web Vitals
- Optimize images with WebP format
- Add structured data for products

### 🛒 E-commerce Enhancement

**Integration Options**:
1. **Shopify**: Full e-commerce platform
2. **WooCommerce**: WordPress-based (requires hosting change)
3. **Square**: Simple online store
4. **Custom**: Build with Stripe + Cloudflare D1

**Recommended Next Steps**:
1. Set up Shopify store
2. Integrate products with real inventory
3. Add customer reviews system
4. Implement email marketing automation

---

**🌿 Remember: This is a living guide. Update it as the site evolves!**