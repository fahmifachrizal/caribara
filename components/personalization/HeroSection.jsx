// components/personalization/HeroSection.jsx
// Server Component - No "use client" directive
import { promises as fs } from "fs"
import path from "path"
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

// Server Component - fetches data on the server
export default async function HeroSection({ category = "luxury" }) {
  // Read car data from file system (server-side only)
  const filePath = path.join(process.cwd(), "public", "db_cars.json")
  const fileContents = await fs.readFile(filePath, "utf8")
  const carData = JSON.parse(fileContents)

  // Map category to hero component with pre-fetched data
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
