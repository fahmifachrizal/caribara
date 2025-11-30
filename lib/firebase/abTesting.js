// A/B Testing utilities with Firebase
import { db } from "./config"
import { doc, getDoc, setDoc, collection, getDocs, query, where, deleteDoc } from "firebase/firestore"

/**
 * Get active A/B tests
 * @returns {Promise<Array>} List of active tests
 */
export const getActiveTests = async () => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return []
    }

    const testsRef = collection(db, "abTests")
    const q = query(testsRef, where("status", "==", "active"))
    const querySnapshot = await getDocs(q)
    
    const tests = []
    querySnapshot.forEach((doc) => {
      tests.push({ id: doc.id, ...doc.data() })
    })
    
    return tests
  } catch (error) {
    console.error("Error getting active tests:", error)
    return []
  }
}

/**
 * Get all A/B tests
 * @returns {Promise<Array>} List of all tests
 */
export const getAllTests = async () => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return []
    }

    const testsRef = collection(db, "abTests")
    const querySnapshot = await getDocs(testsRef)
    
    const tests = []
    querySnapshot.forEach((doc) => {
      tests.push({ id: doc.id, ...doc.data() })
    })
    
    return tests
  } catch (error) {
    console.error("Error getting all tests:", error)
    return []
  }
}

/**
 * Get user's assigned variant for a test
 * @param {string} userId - Unique user identifier
 * @param {string} testId - Test identifier
 * @returns {Promise<string>} Variant name
 */
export const getUserVariant = async (userId, testId) => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return "Original"
    }

    const assignmentRef = doc(db, "testAssignments", `${userId}_${testId}`)
    const assignmentSnap = await getDoc(assignmentRef)
    
    if (assignmentSnap.exists()) {
      return assignmentSnap.data().variant
    }
    
    // If no assignment exists, assign randomly
    const testRef = doc(db, "abTests", testId.toString())
    const testSnap = await getDoc(testRef)
    
    if (testSnap.exists()) {
      const test = testSnap.data()
      const variants = test.variants || ["Original", "Variant A"]
      const randomVariant = variants[Math.floor(Math.random() * variants.length)]
      
      // Save assignment
      await setDoc(assignmentRef, {
        userId,
        testId,
        variant: randomVariant,
        timestamp: new Date().toISOString(),
      })
      
      return randomVariant
    }

    return "Original"
  } catch (error) {
    console.error("Error getting user variant:", error)
    return "Original"
  }
}

/**
 * Record A/B test conversion
 * @param {string} userId - Unique user identifier
 * @param {string} testId - Test identifier
 * @param {string} variant - Variant name
 * @returns {Promise<boolean>} Success status
 */
export const recordConversion = async (userId, testId, variant) => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return false
    }

    const conversionRef = doc(db, "conversions", `${userId}_${testId}_${Date.now()}`)
    await setDoc(conversionRef, {
      userId,
      testId,
      variant,
      timestamp: new Date().toISOString(),
    })

    return true
  } catch (error) {
    console.error("Error recording conversion:", error)
    return false
  }
}

/**
 * Save A/B test configuration
 * @param {object} testConfig - Test configuration
 * @returns {Promise<boolean>} Success status
 */
export const saveTestConfig = async (testConfig) => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return false
    }

    const testRef = doc(db, "abTests", testConfig.id.toString())
    await setDoc(testRef, {
      ...testConfig,
      updatedAt: new Date().toISOString(),
    }, { merge: true })

    return true
  } catch (error) {
    console.error("Error saving test config:", error)
    return false
  }
}

/**
 * Delete A/B test
 * @param {string} testId - Test identifier
 * @returns {Promise<boolean>} Success status
 */
export const deleteTest = async (testId) => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return false
    }

    const testRef = doc(db, "abTests", testId.toString())
    await deleteDoc(testRef)

    return true
  } catch (error) {
    console.error("Error deleting test:", error)
    return false
  }
}