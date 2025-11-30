// Firebase Analytics utilities
import { analytics } from "./config"
import { logEvent } from "firebase/analytics"

/**
 * Track page view
 * @param {string} pageName - Name of the page
 * @param {string} pageUrl - URL of the page
 */
export const trackPageView = (pageName, pageUrl) => {
  try {
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_title: pageName,
        page_location: pageUrl,
        page_path: typeof window !== "undefined" ? window.location.pathname : "",
      })
    }
  } catch (error) {
    console.error("Error tracking page view:", error)
  }
}

/**
 * Track custom event
 * @param {string} eventName - Name of the event
 * @param {object} eventParams - Event parameters
 */
export const trackEvent = (eventName, eventParams = {}) => {
  try {
    if (analytics) {
      logEvent(analytics, eventName, eventParams)
    }
  } catch (error) {
    console.error("Error tracking event:", error)
  }
}

/**
 * Track user engagement with likes
 * @param {boolean} isLiked - Whether the user liked
 */
export const trackLike = (isLiked) => {
  trackEvent("user_like", {
    action: isLiked ? "like" : "unlike",
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track user rating
 * @param {number} rating - Rating value (1-5)
 */
export const trackRating = (rating) => {
  trackEvent("user_rating", {
    rating,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track A/B test impression
 * @param {string} testName - Name of the A/B test
 * @param {string} variant - Variant shown to user
 */
export const trackABTestImpression = (testName, variant) => {
  trackEvent("ab_test_impression", {
    test_name: testName,
    variant,
  })
}

/**
 * Track A/B test conversion
 * @param {string} testName - Name of the A/B test
 * @param {string} variant - Variant shown to user
 */
export const trackABTestConversion = (testName, variant) => {
  trackEvent("ab_test_conversion", {
    test_name: testName,
    variant,
  })
}