/**
 * Firebase Seed Script
 * Run this script to initialize Firebase with sample data
 *
 * Usage:
 * 1. Make sure you have .env.local file with Firebase credentials
 * 2. Run: npm install dotenv (if not already installed)
 * 3. Run: node scripts/seedFirebase.js
 */

import { initializeApp } from "firebase/app"
import { getFirestore, doc, setDoc } from "firebase/firestore"
import { config } from "dotenv"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

// Get the directory name
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables from .env.local
config({ path: join(__dirname, "..", ".env.local") })

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Validate configuration
function validateConfig() {
  const requiredFields = [
    "apiKey",
    "authDomain",
    "projectId",
    "storageBucket",
    "messagingSenderId",
    "appId",
  ]

  const missing = requiredFields.filter((field) => !firebaseConfig[field])

  if (missing.length > 0) {
    console.error("❌ Missing required Firebase configuration fields:")
    missing.forEach((field) => console.error(`   - ${field}`))
    console.error("\nPlease check your .env.local file")
    return false
  }

  return true
}

// Initialize Firebase
let app
let db

try {
  if (!validateConfig()) {
    process.exit(1)
  }

  app = initializeApp(firebaseConfig)
  db = getFirestore(app)
  console.log("✓ Firebase initialized successfully")
} catch (error) {
  console.error("❌ Error initializing Firebase:", error.message)
  process.exit(1)
}

// Sample data for A/B Tests
const sampleABTests = [
  {
    id: "1",
    name: "Hero Section CTA Button",
    status: "active",
    variants: ["Original", "Variant A"],
    traffic: 50,
    description: "Testing different CTA button text on hero section",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Pricing Display Format",
    status: "draft",
    variants: ["Original", "Variant B"],
    traffic: 50,
    description: "Testing different pricing display formats",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Car Card Layout",
    status: "active",
    variants: ["Original", "Compact", "Detailed"],
    traffic: 33,
    description: "Testing different car card layouts for better engagement",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Color Scheme",
    status: "paused",
    variants: ["Original", "Blue Theme"],
    traffic: 50,
    description: "Testing different color schemes for brand identity",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

// Sample data for Personalization Rules
const samplePersonalizationRules = [
  {
    id: "1",
    name: "First Time Visitors Welcome",
    condition: "visits = 1",
    action: "Show welcome popup with special offer",
    enabled: true,
    description: "Welcome new visitors with a special discount",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Returning User Loyalty Discount",
    condition: "visits > 3",
    action: "Show 10% loyalty discount banner",
    enabled: true,
    description: "Reward returning users with loyalty discount",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "3",
    name: "Frequent Visitor Premium Upgrade",
    condition: "visits > 10",
    action: "Suggest premium membership upgrade",
    enabled: false,
    description: "Encourage frequent visitors to upgrade to premium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "4",
    name: "Weekend Special Promotion",
    condition: "visits > 2",
    action: "Display weekend rental special pricing",
    enabled: false,
    description: "Show special weekend rates to engaged users",
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

// Sample user profiles for testing
const sampleUserProfiles = [
  {
    id: "demo_user_1",
    userId: "demo_user_1",
    visits: 1,
    firstVisit: new Date().toISOString(),
    lastVisit: new Date().toISOString(),
    preferences: {
      theme: "dark",
      language: "en",
    },
  },
  {
    id: "demo_user_2",
    userId: "demo_user_2",
    visits: 5,
    firstVisit: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    lastVisit: new Date().toISOString(),
    preferences: {
      theme: "light",
      language: "en",
    },
  },
]

async function seedFirebase() {
  try {
    console.log("\n🌱 Starting Firebase seeding...")
    console.log("Project ID:", firebaseConfig.projectId)
    console.log("")

    // Seed A/B Tests
    console.log("📊 Seeding A/B Tests...")
    for (const test of sampleABTests) {
      const testRef = doc(db, "abTests", test.id)
      await setDoc(testRef, test)
      console.log(`   ✓ Created A/B test: ${test.name} (${test.status})`)
    }

    // Seed Personalization Rules
    console.log("\n🎯 Seeding Personalization Rules...")
    for (const rule of samplePersonalizationRules) {
      const ruleRef = doc(db, "personalizationRules", rule.id)
      await setDoc(ruleRef, rule)
      console.log(
        `   ✓ Created personalization rule: ${rule.name} (${
          rule.enabled ? "enabled" : "disabled"
        })`
      )
    }

    // Seed Portfolio Stats
    console.log("\n📈 Seeding Portfolio Stats...")
    const statsRef = doc(db, "stats", "portfolio")
    await setDoc(statsRef, sampleStats)
    console.log("   ✓ Created portfolio stats document")

    // Seed Sample User Profiles
    console.log("\n👤 Seeding Sample User Profiles...")
    for (const profile of sampleUserProfiles) {
      const profileRef = doc(db, "userProfiles", profile.id)
      await setDoc(profileRef, profile)
      console.log(
        `   ✓ Created user profile: ${profile.userId} (${profile.visits} visits)`
      )
    }

    console.log("\n" + "=".repeat(60))
    console.log("✅ Firebase seeding completed successfully!")
    console.log("=".repeat(60))
    console.log("\nCollections created:")
    console.log(`   • abTests (${sampleABTests.length} documents)`)
    console.log(
      `   • personalizationRules (${samplePersonalizationRules.length} documents)`
    )
    console.log("   • stats (1 document)")
    console.log(`   • userProfiles (${sampleUserProfiles.length} documents)`)
    console.log("\n📝 Next steps:")
    console.log(
      "   1. Visit http://localhost:3000/cms to manage configurations"
    )
    console.log("   2. Test the A/B testing and personalization features")
    console.log("   3. Monitor analytics in the Analytics tab")
    console.log("")
  } catch (error) {
    console.error("\n" + "=".repeat(60))
    console.error("❌ Error seeding Firebase")
    console.error("=".repeat(60))
    console.error("\nError details:", error.message)
    console.error("\nPlease check:")
    console.error(
      "   1. Your .env.local file contains valid Firebase credentials"
    )
    console.error("   2. Your Firebase project has Firestore enabled")
    console.error("   3. You have proper permissions to write to Firestore")
    console.error("   4. Your Firestore security rules allow writes")
    console.error("")
    console.error("Firestore Security Rules Example:")
    console.error("   rules_version = '2';")
    console.error("   service cloud.firestore {")
    console.error("     match /databases/{database}/documents {")
    console.error("       match /{document=**} {")
    console.error("         allow read, write: if true;")
    console.error("       }")
    console.error("     }")
    console.error("   }")
    console.error("")
    throw error
  }
}

// Run the seed function
seedFirebase()
  .then(() => {
    console.log("👋 Seeding process finished successfully!")
    console.log("")
    process.exit(0)
  })
  .catch((error) => {
    console.error("\n💥 Fatal error during seeding")
    console.error("")
    process.exit(1)
  })
