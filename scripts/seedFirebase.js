/**
 * Firebase Seed Script
 * Run this script to initialize Firebase with sample data
 * 
 * Usage: node scripts/seedFirebase.js
 */

import { initializeApp } from "firebase/app"
import { getFirestore, doc, setDoc, collection } from "firebase/firestore"
import * as dotenv from "dotenv"

// Load environment variables
dotenv.config({ path: '.env.local' })

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Sample data for A/B Tests
const sampleABTests = [
  {
    id: "1",
    name: "Hero Section CTA",
    status: "active",
    variants: ["Original", "Variant A"],
    traffic: 50,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Pricing Display",
    status: "draft",
    variants: ["Original", "Variant B"],
    traffic: 50,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

// Sample data for Personalization Rules
const samplePersonalizationRules = [
  {
    id: "1",
    name: "First Time Visitors",
    condition: "visits = 1",
    action: "Show welcome popup",
    enabled: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Returning Users",
    condition: "visits > 3",
    action: "Show loyalty discount",
    enabled: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

// Sample portfolio stats
const sampleStats = {
  totalLikes: 0,
  totalRatings: 0,
  totalRatingSum: 0,
  averageRating: 0,
  totalVisits: 0,
  lastUpdated: new Date().toISOString(),
}

async function seedFirebase() {
  try {
    console.log("🌱 Starting Firebase seeding...")

    // Seed A/B Tests
    console.log("\n📊 Seeding A/B Tests...")
    for (const test of sampleABTests) {
      const testRef = doc(db, "abTests", test.id)
      await setDoc(testRef, test)
      console.log(`✓ Created A/B test: ${test.name}`)
    }

    // Seed Personalization Rules
    console.log("\n🎯 Seeding Personalization Rules...")
    for (const rule of samplePersonalizationRules) {
      const ruleRef = doc(db, "personalizationRules", rule.id)
      await setDoc(ruleRef, rule)
      console.log(`✓ Created personalization rule: ${rule.name}`)
    }

    // Seed Portfolio Stats
    console.log("\n📈 Seeding Portfolio Stats...")
    const statsRef = doc(db, "stats", "portfolio")
    await setDoc(statsRef, sampleStats)
    console.log("✓ Created portfolio stats")

    console.log("\n✅ Firebase seeding completed successfully!")
    console.log("\nCollections created:")
    console.log("- abTests (2 documents)")
    console.log("- personalizationRules (2 documents)")
    console.log("- stats (1 document)")
    console.log("\nYou can now use the CMS at /cms to manage these configurations.")

  } catch (error) {
    console.error("\n❌ Error seeding Firebase:", error)
    console.error("\nPlease check:")
    console.error("1. Your .env.local file contains valid Firebase credentials")
    console.error("2. Your Firebase project has Firestore enabled")
    console.error("3. You have proper permissions to write to Firestore")
  }
}

// Run the seed function
seedFirebase()
  .then(() => {
    console.log("\n👋 Seeding process finished. You can now close this script.")
    process.exit(0)
  })
  .catch((error) => {
    console.error("\n❌ Fatal error:", error)
    process.exit(1)
  })