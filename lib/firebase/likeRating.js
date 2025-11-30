// Like and Rating utilities with Firebase
import { db } from "./config"
import { doc, setDoc, getDoc, updateDoc, increment } from "firebase/firestore"

/**
 * Save or update user like
 * @param {string} userId - Unique user identifier
 * @param {boolean} isLiked - Whether the user liked
 * @returns {Promise<boolean>} Success status
 */
export const saveLike = async (userId, isLiked) => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return false
    }

    const likeRef = doc(db, "likes", userId)
    await setDoc(
      likeRef,
      {
        userId,
        isLiked,
        timestamp: new Date().toISOString(),
      },
      { merge: true }
    )

    // Update total likes count
    const statsRef = doc(db, "stats", "portfolio")
    const statsSnap = await getDoc(statsRef)

    if (statsSnap.exists()) {
      await updateDoc(statsRef, {
        totalLikes: increment(isLiked ? 1 : -1),
      })
    } else {
      // Initialize stats document if it doesn't exist
      await setDoc(statsRef, {
        totalLikes: isLiked ? 1 : 0,
        totalRatings: 0,
        totalRatingSum: 0,
        averageRating: 0,
        totalVisits: 0,
      })
    }

    return true
  } catch (error) {
    console.error("Error saving like:", error)
    return false
  }
}

/**
 * Get user like status
 * @param {string} userId - Unique user identifier
 * @returns {Promise<boolean>} Like status
 */
export const getLike = async (userId) => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return false
    }

    const likeRef = doc(db, "likes", userId)
    const likeSnap = await getDoc(likeRef)

    if (likeSnap.exists()) {
      return likeSnap.data().isLiked
    }

    return false
  } catch (error) {
    console.error("Error getting like:", error)
    return false
  }
}

/**
 * Save or update user rating
 * @param {string} userId - Unique user identifier
 * @param {number} rating - Rating value (1-5)
 * @returns {Promise<boolean>} Success status
 */
export const saveRating = async (userId, rating) => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return false
    }

    const ratingRef = doc(db, "ratings", userId)
    const oldRatingSnap = await getDoc(ratingRef)
    const oldRating = oldRatingSnap.exists() ? oldRatingSnap.data().rating : 0

    await setDoc(
      ratingRef,
      {
        userId,
        rating,
        timestamp: new Date().toISOString(),
      },
      { merge: true }
    )

    // Update average rating
    const statsRef = doc(db, "stats", "portfolio")
    const statsSnap = await getDoc(statsRef)

    if (statsSnap.exists()) {
      const stats = statsSnap.data()
      const totalRatings = stats.totalRatings || 0
      const totalRatingSum = stats.totalRatingSum || 0

      // Calculate new average
      const newTotalRatings = oldRating ? totalRatings : totalRatings + 1
      const newTotalRatingSum = totalRatingSum - oldRating + rating
      const newAverageRating = newTotalRatingSum / newTotalRatings

      await updateDoc(statsRef, {
        totalRatings: newTotalRatings,
        totalRatingSum: newTotalRatingSum,
        averageRating: newAverageRating,
      })
    } else {
      // Initialize stats document
      await setDoc(statsRef, {
        totalLikes: 0,
        totalRatings: 1,
        totalRatingSum: rating,
        averageRating: rating,
        totalVisits: 0,
      })
    }

    return true
  } catch (error) {
    console.error("Error saving rating:", error)
    return false
  }
}

/**
 * Get user rating
 * @param {string} userId - Unique user identifier
 * @returns {Promise<number>} Rating value
 */
export const getRating = async (userId) => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return 0
    }

    const ratingRef = doc(db, "ratings", userId)
    const ratingSnap = await getDoc(ratingRef)

    if (ratingSnap.exists()) {
      return ratingSnap.data().rating
    }

    return 0
  } catch (error) {
    console.error("Error getting rating:", error)
    return 0
  }
}

/**
 * Get portfolio statistics
 * @returns {Promise<object>} Portfolio stats
 */
export const getPortfolioStats = async () => {
  try {
    if (!db) {
      console.error("Firestore not initialized")
      return {
        totalLikes: 0,
        totalRatings: 0,
        averageRating: 0,
        totalVisits: 0,
      }
    }

    const statsRef = doc(db, "stats", "portfolio")
    const statsSnap = await getDoc(statsRef)

    if (statsSnap.exists()) {
      return statsSnap.data()
    }

    return {
      totalLikes: 0,
      totalRatings: 0,
      averageRating: 0,
      totalVisits: 0,
    }
  } catch (error) {
    console.error("Error getting portfolio stats:", error)
    return {
      totalLikes: 0,
      totalRatings: 0,
      averageRating: 0,
      totalVisits: 0,
    }
  }
}
