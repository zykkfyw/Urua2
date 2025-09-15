#!/bin/bash

# Orua Organics - Production Deployment Script
echo "🌿 Orua Organics - Preparing for Production Deployment"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📋 Pre-deployment Checklist:"
echo ""

# 1. Clean and build
echo "🔨 Building project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi
echo "✅ Build successful"

# 2. Test critical endpoints
echo "🧪 Testing critical endpoints..."
if ! curl -f http://localhost:3000 >/dev/null 2>&1; then
    echo "⚠️  Warning: Local server not running. Start with: npm run dev:sandbox"
else
    echo "✅ Main page responsive"
fi

# 3. Check Git status
echo "📝 Checking Git status..."
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Warning: Uncommitted changes detected"
    git status --short
    echo ""
    read -p "Do you want to commit these changes? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        echo "Enter commit message:"
        read commit_message
        git commit -m "$commit_message"
        git push origin main
    fi
else
    echo "✅ Git repository clean"
fi

# 4. Environment Check
echo "🔧 Environment Configuration:"
echo "   Project Name: orua-organics"
echo "   Platform: Cloudflare Pages"
echo "   Runtime: Cloudflare Workers"
echo "   Framework: Hono + TypeScript"

# 5. Deployment Commands
echo ""
echo "🚀 Production Deployment Commands:"
echo "=================================="
echo ""
echo "1. Ensure Cloudflare API key is configured:"
echo "   Visit Deploy tab → Configure Cloudflare API key"
echo ""
echo "2. Create Cloudflare Pages project:"
echo "   npx wrangler pages project create orua-organics --production-branch main --compatibility-date 2024-01-01"
echo ""
echo "3. Deploy to Cloudflare Pages:"
echo "   npx wrangler pages deploy dist --project-name orua-organics"
echo ""
echo "4. Set environment variables (if needed):"
echo "   npx wrangler pages secret put API_KEY --project-name orua-organics"
echo ""
echo "5. Add custom domain (optional):"
echo "   npx wrangler pages domain add yourdomain.com --project-name orua-organics"
echo ""

# 6. Integration Checklist
echo "🔗 E-commerce Integration Checklist:"
echo "===================================="
echo ""
echo "After deployment, integrate external e-commerce:"
echo "□ Set up Shopify store"
echo "□ Configure Square store"  
echo "□ Update shop links in the website"
echo "□ Set up payment processing"
echo "□ Configure email marketing (Mailchimp/Klaviyo)"
echo "□ Add Google Analytics tracking"
echo "□ Test all contact forms"
echo "□ Verify mobile responsiveness"
echo ""

# 7. URLs that will be available
echo "📡 Available URLs after deployment:"
echo "=================================="
echo "Main site: https://orua-organics.pages.dev"
echo "Product pages: /products/moringa, /products/turmeric, etc."
echo "Legal pages: /privacy, /terms"
echo "API endpoints: /api/contact, /api/newsletter"
echo ""

echo "✨ Ready for production deployment!"
echo "Visit the Deploy tab to configure your Cloudflare API key and deploy."
echo ""