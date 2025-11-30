// Personalization utilities with Firebase
import { db } from "./config"
import { doc, getDoc, setDoc, collection, getDocs, query, where, updateDoc, increment, deleteDoc } from "firebase/firestore"

/**
 * Get active personalization rules
 * @returns {Promise<Array>} List of active rules
 */
export const getActiveRules = async () => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return []
    }

    const rulesRef = collection(db, "personalizationRules")
    const q = query(rulesRef, where("enabled", "==", true))
    const querySnapshot = await getDocs(q)
    
    const rules = []
    querySnapshot.forEach((doc) => {
      rules.push({ id: doc.id, ...doc.data() })
    })
    
    return rules
  } catch (error) {
    console.error("Error getting active rules:", error)
    return []
  }
}

/**
 * Get all personalization rules
 * @returns {Promise<Array>} List of all rules
 */
export const getAllRules = async () => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return []
    }

    const rulesRef = collection(db, "personalizationRules")
    const querySnapshot = await getDocs(rulesRef)
    
    const rules = []
    querySnapshot.forEach((doc) => {
      rules.push({ id: doc.id, ...doc.data() })
    })
    
    return rules
  } catch (error) {
    console.error("Error getting all rules:", error)
    return []
  }
}

/**
 * Get user profile
 * @param {string} userId - Unique user identifier
 * @returns {Promise<object>} User profile data
 */
export const getUserProfile = async (userId) => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return {
        userId,
        visits: 0,
        firstVisit: new Date().toISOString(),
        lastVisit: new Date().toISOString(),
        preferences: {},
      }
    }

    const profileRef = doc(db, "userProfiles", userId)
    const profileSnap = await getDoc(profileRef)
    
    if (profileSnap.exists()) {
      return profileSnap.data()
    }
    
    // Create new profile if doesn't exist
    const newProfile = {
      userId,
      visits: 1,
      firstVisit: new Date().toISOString(),
      lastVisit: new Date().toISOString(),
      preferences: {},
    }
    
    await setDoc(profileRef, newProfile)
    return newProfile
  } catch (error) {
    console.error("Error getting user profile:", error)
    return {
      userId,
      visits: 0,
      firstVisit: new Date().toISOString(),
      lastVisit: new Date().toISOString(),
      preferences: {},
    }
  }
}

/**
 * Update user profile
 * @param {string} userId - Unique user identifier
 * @param {object} updates - Profile updates
 * @returns {Promise<boolean>} Success status
 */
export const updateUserProfile = async (userId, updates) => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return false
    }

    const profileRef = doc(db, "userProfiles", userId)
    await setDoc(profileRef, {
      ...updates,
      lastVisit: new Date().toISOString(),
    }, { merge: true })

    return true
  } catch (error) {
    console.error("Error updating user profile:", error)
    return false
  }
}

/**
 * Increment user visit count
 * @param {string} userId - Unique user identifier
 * @returns {Promise<number>} New visit count
 */
export const incrementVisitCount = async (userId) => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return 1
    }

    const profileRef = doc(db, "userProfiles", userId)
    const profileSnap = await getDoc(profileRef)
    
    if (profileSnap.exists()) {
      await updateDoc(profileRef, {
        visits: increment(1),
        lastVisit: new Date().toISOString(),
      })
      
      const updatedSnap = await getDoc(profileRef)
      return updatedSnap.data().visits
    } else {
      await setDoc(profileRef, {
        userId,
        visits: 1,
        firstVisit: new Date().toISOString(),
        lastVisit: new Date().toISOString(),
      })
      return 1
    }
  } catch (error) {
    console.error("Error incrementing visit count:", error)
    return 1
  }
}

/**
 * Evaluate if a rule matches user profile
 * @param {object} rule - Personalization rule
 * @param {object} userProfile - User profile
 * @returns {boolean} Whether rule matches
 */
export const evaluateRule = (rule, userProfile) => {
  try {
    // Simple condition parser
    // Example: "visits > 3", "visits = 1"
    const condition = rule.condition.trim()

    if (condition.includes("visits")) {
      const visits = userProfile.visits || 0

      if (condition.includes("=")) {
        const targetVisits = parseInt(condition.split("=")[1].trim())
        return visits === targetVisits
      } else if (condition.includes(">")) {
        const targetVisits = parseInt(condition.split(">")[1].trim())
        return visits > targetVisits
      } else if (condition.includes("<")) {
        const targetVisits = parseInt(condition.split("<")[1].trim())
        return visits < targetVisits
      }
    }

    return false
  } catch (error) {
    console.error("Error evaluating rule:", error)
    return false
  }
}

/**
 * Save personalization rule
 * @param {object} rule - Rule configuration
 * @returns {Promise<boolean>} Success status
 */
export const saveRule = async (rule) => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return false
    }

    const ruleRef = doc(db, "personalizationRules", rule.id.toString())
    await setDoc(ruleRef, {
      ...rule,
      updatedAt: new Date().toISOString(),
    }, { merge: true })

    return true
  } catch (error) {
    console.error("Error saving rule:", error)
    return false
  }
}

/**
 * Delete personalization rule
 * @param {string} ruleId - Rule identifier
 * @returns {Promise<boolean>} Success status
 */
export const deleteRule = async (ruleId) => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return false
    }

    const ruleRef = doc(db, "personalizationRules", ruleId.toString())
    await deleteDoc(ruleRef)

    return true
  } catch (error) {
    console.error("Error deleting rule:", error)
    return false
  }
}