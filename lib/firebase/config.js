// Firebase configuration
// TODO: Replace with your Firebase project credentials

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
let app
let analytics
let db
let auth

if (typeof window !== "undefined") {
  // Client-side Firebase initialization will go here
  // TODO: Uncomment after installing Firebase SDK
  /*
  import { initializeApp } from "firebase/app"
  import { getAnalytics } from "firebase/analytics"
  import { getFirestore } from "firebase/firestore"
  import { getAuth } from "firebase/auth"

  app = initializeApp(firebaseConfig)
  analytics = getAnalytics(app)
  db = getFirestore(app)
  auth = getAuth(app)
  */
}

export { app, analytics, db, auth, firebaseConfig }
