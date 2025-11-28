/**
 * Utility functions for user identification and session management
 */

/**
 * Generate a unique user ID
 * Uses browser fingerprinting and localStorage for persistence
 * @returns {string} Unique user identifier
 */
export const getUserId = () => {
  if (typeof window === "undefined") return null

  // Check if user ID already exists in localStorage
  const existingUserId = localStorage.getItem("caribara_user_id")
  if (existingUserId) {
    return existingUserId
  }

  // Generate new user ID
  const userId = generateUniqueId()
  localStorage.setItem("caribara_user_id", userId)

  return userId
}

/**
 * Generate a unique ID based on timestamp and random string
 * @returns {string} Unique identifier
 */
const generateUniqueId = () => {
  const timestamp = Date.now().toString(36)
  const randomStr = Math.random().toString(36).substring(2, 15)
  return `user_${timestamp}_${randomStr}`
}

/**
 * Get or create session ID
 * Session ID is temporary and cleared when browser is closed
 * @returns {string} Session identifier
 */
export const getSessionId = () => {
  if (typeof window === "undefined") return null

  const existingSessionId = sessionStorage.getItem("caribara_session_id")
  if (existingSessionId) {
    return existingSessionId
  }

  const sessionId = `session_${Date.now()}_${Math.random()
    .toString(36)
    .substring(2, 15)}`
  sessionStorage.setItem("caribara_session_id", sessionId)

  return sessionId
}

/**
 * Clear user data (for testing purposes)
 */
export const clearUserData = () => {
  if (typeof window === "undefined") return

  localStorage.removeItem("caribara_user_id")
  sessionStorage.removeItem("caribara_session_id")
}

/**
 * Get basic device information for analytics
 * @returns {object} Device information
 */
export const getDeviceInfo = () => {
  if (typeof window === "undefined") return null

  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    platform: navigator.platform,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }
}
