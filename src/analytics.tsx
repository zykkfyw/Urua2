// Analytics Integration Module for Orua Organics

// Google Analytics 4 Setup
export const setupGoogleAnalytics = (measurementId: string) => {
  if (typeof window !== 'undefined') {
    // Create gtag script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script1)
    
    // Initialize gtag
    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `
    document.head.appendChild(script2)
  }
}

// Track custom events
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters)
  }
}

// Track page views
export const trackPageView = (pageTitle: string, pagePath: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageTitle,
      page_location: window.location.origin + pagePath
    })
  }
}

// E-commerce tracking
export const trackPurchase = (transactionId: string, value: number, currency: string = 'USD') => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: currency
  })
}

// Contact form tracking
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName
  })
}

// Newsletter signup tracking
export const trackNewsletterSignup = (email: string) => {
  trackEvent('sign_up', {
    method: 'newsletter'
  })
}

// Product view tracking
export const trackProductView = (productName: string) => {
  trackEvent('view_item', {
    currency: 'USD',
    value: 0,
    items: [{
      item_id: productName.toLowerCase().replace(' ', '_'),
      item_name: productName,
      item_category: 'Organic Wellness',
      item_brand: 'Orua Organics',
      quantity: 1
    }]
  })
}

// Search tracking
export const trackSearch = (searchTerm: string) => {
  trackEvent('search', {
    search_term: searchTerm
  })
}

// External link tracking
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('click', {
    event_category: 'external_link',
    event_label: linkText,
    value: url
  })
}

// Initialize analytics when DOM is ready
export const initAnalytics = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Replace with actual Google Analytics 4 Measurement ID
    // setupGoogleAnalytics('G-XXXXXXXXXX')
    
    // Track initial page load
    trackPageView(document.title, window.location.pathname)
    
    // Track form submissions
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      contactForm.addEventListener('submit', () => {
        trackFormSubmission('contact_form')
      })
    }
    
    // Track newsletter signups
    const newsletterForms = document.querySelectorAll('form')
    newsletterForms.forEach(form => {
      if (form.id !== 'contact-form') {
        form.addEventListener('submit', () => {
          trackFormSubmission('newsletter_signup')
        })
      }
    })
    
    // Track external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const url = (e.target as HTMLAnchorElement).href
        const text = (e.target as HTMLAnchorElement).textContent || 'External Link'
        if (!url.includes(window.location.hostname)) {
          trackExternalLink(url, text)
        }
      })
    })
    
    // Track product page views
    if (window.location.pathname.startsWith('/products/')) {
      const productName = window.location.pathname.split('/products/')[1]
      if (productName) {
        trackProductView(productName.charAt(0).toUpperCase() + productName.slice(1))
      }
    }
    
    // Track search functionality
    const searchInput = document.getElementById('product-search')
    if (searchInput) {
      let searchTimeout: NodeJS.Timeout
      searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout)
        searchTimeout = setTimeout(() => {
          const term = (e.target as HTMLInputElement).value
          if (term.length > 2) {
            trackSearch(term)
          }
        }, 500)
      })
    }
  })
}