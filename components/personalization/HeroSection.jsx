"use client"
import { useState, useEffect } from "react"
import {
  BudgetHero,
  ElectricHero,
  FamilyHero,
  LatestHero,
  LuxuryHero,
} from "./heroes"

// Helper function to get cars by category from JSON data
const getCarsByCategory = (cars, category, limit = 4) => {
  if (!cars) return []
  let side
  switch (category.toLowerCase()) {
    case "electric":
      side = 3
      break
    case "luxury":
      side = 5
      break
    case "budget":
      side = 3
      break
    case "family":
      side = 6
      break
    case "latest":
      side = 5
      break
    default:
      side = 5
  }
  return cars
    .filter((car) => car.category.toLowerCase() === category.toLowerCase())
    .slice(0, limit)
    .map((car) => ({
      name: car.car_name,
      img: car.files[side].filename,
    }))
}

// Main HeroSection Component with category prop
export default function HeroSection({ category = "luxury" }) {
  const [carData, setCarData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Fetch car data from public folder
    fetch("/db_cars.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load car data")
        return res.json()
      })
      .then((data) => {
        setCarData(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error loading car data:", err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading your journey...</p>
        </div>
      </div>
    )
  }

  if (error || !carData) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center max-w-md">
          <p className="text-white text-xl mb-4">Unable to load car data</p>
          <p className="text-zinc-400 text-sm">{error || "Please try again later"}</p>
        </div>
      </div>
    )
  }

  // Map category to hero component
  const heroComponents = {
    electric: (
      <ElectricHero cars={getCarsByCategory(carData.cars, "Electric")} />
    ),
    luxury: <LuxuryHero cars={getCarsByCategory(carData.cars, "Luxury")} />,
    budget: <BudgetHero cars={getCarsByCategory(carData.cars, "Budget")} />,
    family: <FamilyHero cars={getCarsByCategory(carData.cars, "Family")} />,
    latest: <LatestHero cars={getCarsByCategory(carData.cars, "Latest")} />,
  }

  // Get the selected hero or default to luxury
  const selectedHero =
    heroComponents[category.toLowerCase()] || heroComponents.luxury

  return <div className="w-full h-screen relative">{selectedHero}</div>
}