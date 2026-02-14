import { onCLS, onFCP, onLCP, onTTFB, onINP } from "web-vitals";

/**
 * Send performance metrics to analytics
 * @param {Object} metric - Web Vitals metric object
 */
const sendToAnalytics = (metric) => {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
    });
  }

  // In production, send to your analytics endpoint
  if (import.meta.env.PROD) {
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
      navigationType: metric.navigationType,
    });

    // Use navigator.sendBeacon if available (reliable for page unload)
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/analytics", body);
    } else {
      // Fallback to fetch with keepalive
      fetch("/api/analytics", {
        body,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        keepalive: true,
      }).catch(console.error);
    }
  }
};

/**
 * Initialize Web Vitals monitoring
 * Tracks Core Web Vitals: CLS, INP, FCP, LCP, TTFB
 * Note: FID is deprecated in favor of INP
 */
export function initPerformanceMonitoring() {
  // Cumulative Layout Shift (CLS)
  // Measures visual stability
  // Good: < 0.1, Needs Improvement: 0.1-0.25, Poor: > 0.25
  onCLS(sendToAnalytics);

  // Interaction to Next Paint (INP) - replaces FID
  // Measures overall responsiveness
  // Good: < 200ms, Needs Improvement: 200-500ms, Poor: > 500ms
  onINP(sendToAnalytics);

  // First Contentful Paint (FCP)
  // Measures when first content appears
  // Good: < 1.8s, Needs Improvement: 1.8-3.0s, Poor: > 3.0s
  onFCP(sendToAnalytics);

  // Largest Contentful Paint (LCP)
  // Measures perceived load speed
  // Good: < 2.5s, Needs Improvement: 2.5-4.0s, Poor: > 4.0s
  onLCP(sendToAnalytics);

  // Time to First Byte (TTFB)
  // Measures server response time
  // Good: < 800ms, Needs Improvement: 800-1800ms, Poor: > 1800ms
  onTTFB(sendToAnalytics);
}

/**
 * Monitor long tasks that block the main thread
 * Long tasks are > 50ms and can cause poor user experience
 */
export function observeLongTasks() {
  if (!("PerformanceObserver" in window)) {
    console.warn("[Performance] PerformanceObserver not supported");
    return;
  }

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log tasks longer than 50ms
        if (entry.duration > 50) {
          if (import.meta.env.DEV) {
            console.warn(
              "[Long Task] Duration:",
              entry.duration.toFixed(2),
              "ms",
              {
                name: entry.name,
                startTime: entry.startTime,
                attribution: entry.attribution,
              }
            );
          }

          // Send to analytics
          if (import.meta.env.PROD) {
            sendToAnalytics({
              name: "long-task",
              value: entry.duration,
              rating: entry.duration > 100 ? "poor" : "needs-improvement",
              id: `${entry.name}-${Date.now()}`,
            });
          }
        }
      }
    });

    observer.observe({ entryTypes: ["longtask"] });

    console.log("[Performance] Long task monitoring enabled");
    return observer;
  } catch (error) {
    console.error("[Performance] Error setting up long task observer:", error);
  }
}

/**
 * Get current performance metrics snapshot
 * Useful for debugging and manual checks
 */
export function getPerformanceSnapshot() {
  if (!window.performance) return null;

  const navigation = performance.getEntriesByType("navigation")[0];
  const paint = performance.getEntriesByType("paint");

  return {
    // Navigation timing
    domContentLoaded:
      navigation?.domContentLoadedEventEnd -
      navigation?.domContentLoadedEventStart,
    domInteractive: navigation?.domInteractive,
    loadComplete: navigation?.loadEventEnd - navigation?.loadEventStart,

    // Paint timing
    firstPaint: paint.find((entry) => entry.name === "first-paint")?.startTime,
    firstContentfulPaint: paint.find(
      (entry) => entry.name === "first-contentful-paint"
    )?.startTime,

    // Memory (if available)
    memory: performance.memory
      ? {
          usedJSHeapSize:
            (performance.memory.usedJSHeapSize / 1048576).toFixed(2) + " MB",
          totalJSHeapSize:
            (performance.memory.totalJSHeapSize / 1048576).toFixed(2) + " MB",
          jsHeapSizeLimit:
            (performance.memory.jsHeapSizeLimit / 1048576).toFixed(2) + " MB",
        }
      : null,
  };
}

/**
 * Performance marks for custom measurements
 */
export const perf = {
  mark: (name) => performance.mark(name),
  measure: (name, startMark, endMark) => {
    try {
      performance.measure(name, startMark, endMark);
      const measure = performance.getEntriesByName(name, "measure")[0];
      if (import.meta.env.DEV) {
        console.log(`[Measure] ${name}:`, measure.duration.toFixed(2), "ms");
      }
      return measure.duration;
    } catch (error) {
      console.error(`[Measure] Error measuring ${name}:`, error);
    }
  },
};
