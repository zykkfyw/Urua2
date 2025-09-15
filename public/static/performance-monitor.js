// Performance Monitoring for Orua Organics

class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.init();
  }

  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupMonitoring());
    } else {
      this.setupMonitoring();
    }
  }

  setupMonitoring() {
    this.measurePageLoad();
    this.measureLCP();
    this.measureFID();
    this.measureCLS();
    this.measureCustomMetrics();
    this.setupErrorTracking();
    
    // Report metrics after page is fully loaded
    window.addEventListener('load', () => {
      setTimeout(() => this.reportMetrics(), 1000);
    });
  }

  measurePageLoad() {
    const perfData = performance.getEntriesByType('navigation')[0];
    if (perfData) {
      this.metrics.pageLoad = {
        dns: perfData.domainLookupEnd - perfData.domainLookupStart,
        connect: perfData.connectEnd - perfData.connectStart,
        ttfb: perfData.responseStart - perfData.requestStart,
        download: perfData.responseEnd - perfData.responseStart,
        dom: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
        total: perfData.loadEventEnd - perfData.navigationStart
      };
    }
  }

  measureLCP() {
    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
    }).observe({ entryTypes: ['largest-contentful-paint'] });
  }

  measureFID() {
    // First Input Delay
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        this.metrics.fid = entry.processingStart - entry.startTime;
      }
    }).observe({ entryTypes: ['first-input'] });
  }

  measureCLS() {
    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      this.metrics.cls = clsValue;
    }).observe({ entryTypes: ['layout-shift'] });
  }

  measureCustomMetrics() {
    // Time to Interactive (approximate)
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp = entry.startTime;
        }
      }
    });
    observer.observe({ entryTypes: ['paint'] });

    // Resource loading
    const resources = performance.getEntriesByType('resource');
    this.metrics.resources = {
      images: resources.filter(r => r.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)).length,
      scripts: resources.filter(r => r.name.includes('.js')).length,
      styles: resources.filter(r => r.name.includes('.css')).length,
      fonts: resources.filter(r => r.name.match(/\.(woff|woff2|ttf|eot)$/i)).length
    };

    // Memory usage (if available)
    if (performance.memory) {
      this.metrics.memory = {
        used: performance.memory.usedJSHeapSize,
        total: performance.memory.totalJSHeapSize,
        limit: performance.memory.jsHeapSizeLimit
      };
    }
  }

  setupErrorTracking() {
    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.logError('JavaScript Error', {
        message: event.message,
        filename: event.filename,
        line: event.lineno,
        column: event.colno,
        error: event.error?.stack
      });
    });

    // Promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.logError('Unhandled Promise Rejection', {
        reason: event.reason
      });
    });

    // Resource loading errors
    document.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.logError('Resource Loading Error', {
          element: event.target.tagName,
          source: event.target.src || event.target.href,
          message: 'Failed to load resource'
        });
      }
    }, true);
  }

  logError(type, details) {
    console.error(`[Performance Monitor] ${type}:`, details);
    
    // Send to analytics if available
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: `${type}: ${details.message || details.reason}`,
        fatal: false
      });
    }
  }

  getPerformanceGrade() {
    const grades = {
      lcp: this.metrics.lcp < 2500 ? 'A' : this.metrics.lcp < 4000 ? 'B' : 'C',
      fid: this.metrics.fid < 100 ? 'A' : this.metrics.fid < 300 ? 'B' : 'C',
      cls: this.metrics.cls < 0.1 ? 'A' : this.metrics.cls < 0.25 ? 'B' : 'C',
      ttfb: this.metrics.pageLoad?.ttfb < 600 ? 'A' : this.metrics.pageLoad?.ttfb < 1000 ? 'B' : 'C'
    };
    
    const scores = Object.values(grades);
    const aCount = scores.filter(g => g === 'A').length;
    const bCount = scores.filter(g => g === 'B').length;
    
    if (aCount >= 3) return 'A';
    if (aCount + bCount >= 3) return 'B';
    return 'C';
  }

  reportMetrics() {
    const grade = this.getPerformanceGrade();
    
    console.group('🚀 Orua Organics Performance Report');
    console.log('Overall Grade:', grade);
    console.log('Page Load Metrics:', this.metrics.pageLoad);
    console.log('Core Web Vitals:');
    console.log(`  LCP: ${this.metrics.lcp?.toFixed(2)}ms (${this.metrics.lcp < 2500 ? '✅' : '⚠️'})`);
    console.log(`  FID: ${this.metrics.fid?.toFixed(2)}ms (${this.metrics.fid < 100 ? '✅' : '⚠️'})`);
    console.log(`  CLS: ${this.metrics.cls?.toFixed(3)} (${this.metrics.cls < 0.1 ? '✅' : '⚠️'})`);
    console.log('Resources:', this.metrics.resources);
    if (this.metrics.memory) {
      console.log(`Memory: ${(this.metrics.memory.used / 1024 / 1024).toFixed(2)}MB used`);
    }
    console.groupEnd();

    // Send metrics to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance_metrics', {
        lcp: this.metrics.lcp,
        fid: this.metrics.fid,
        cls: this.metrics.cls,
        grade: grade,
        page_load_time: this.metrics.pageLoad?.total
      });
    }

    // Store for debugging
    window.oruaPerformance = this.metrics;
  }

  // Public method to get current metrics
  getMetrics() {
    return { ...this.metrics, grade: this.getPerformanceGrade() };
  }
}

// Auto-initialize performance monitoring
if (typeof window !== 'undefined') {
  window.oruaPerformanceMonitor = new PerformanceMonitor();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceMonitor;
}