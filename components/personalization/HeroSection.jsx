"use client"
import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react"

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

// EV Hero Section
function EVHero({ cars }) {
  if (!cars || cars.length === 0) return null

  return (
    <div className="w-full h-screen bg-linear-to-br from-cyan-500 via-blue-600 to-indigo-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-12">
        <div className="max-w-2xl">
          <h1 className="text-7xl font-bold text-white mb-4 leading-tight">
            Drive the Future Today
          </h1>
          <p className="text-2xl text-cyan-100">
            Experience silent power and zero emissions.
          </p>
        </div>

        <div className="flex items-end justify-center gap-8 pb-12">
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
          <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-300 to-transparent opacity-40" />

          {cars.map((car, idx) => (
            <div
              key={idx}
              className="absolute top-[70%] -translate-y-1/2"
              style={{
                left: `${idx * 200}px`, // spacing between cars
                zIndex: idx + 1,
              }}>
              <img
                src={car.img}
                alt={car.name}
                // Added 'max-w-none' to prevent shrinking
                className="w-[1000px] max-w-none h-auto pointer-events-none select-none"
              />
            </div>
          ))}
        </div>
      </div>

      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-cyan-600 rounded-full font-semibold hover:bg-cyan-50 transition-colors shadow-xl">
        Browse Electric Fleet
      </button>
    </div>
  )
}

// Luxury Hero Section
function LuxuryHero({ cars }) {
  if (!cars || cars.length === 0) return null

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0 " />

      {/* Soft glow */}
      <div className="absolute top-1/2 right-1/3 w-96 h-96 rounded-full blur-3xl" />

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center justify-between p-12">
        {/* Text */}
        <div className="max-w-xl">
          <h1 className="text-7xl font-bold text-foreground mb-6 leading-tight">
            Premium Cars for Premium Journeys
          </h1>
          <p className="text-2xl text-foreground/80">
            Indulge in comfort, performance, and prestige.
          </p>
        </div>

        {/* Cars layered using z-index */}
        <div className="relative flex-1 h-full overflow-visible">
          {cars.map((car, idx) => (
            <div
              key={idx}
              className="absolute top-[70%] -translate-y-1/2"
              style={{
                left: `${idx * 250}px`, // spacing between cars
                zIndex: idx + 1,
              }}>
              <img
                src={car.img}
                alt={car.name}
                // Added 'max-w-none' to prevent shrinking
                className="w-[1000px] max-w-none h-auto pointer-events-none select-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-amber-600 rounded-full font-semibold hover:bg-amber-50 transition-colors shadow-xl">
        Explore Luxury Collection
      </button>
    </div>
  )
}

// Budget Hero Section
function BudgetHero({ cars: initialCars }) {
  if (!initialCars || initialCars.length === 0) return null
  const cars = [...initialCars, ...initialCars]

  return (
    <div className="w-full h-screen bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 relative overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 rounded-full opacity-30 animate-pulse"
          style={{
            backgroundColor: ["#fbbf24", "#34d399", "#60a5fa", "#f472b6"][
              i % 4
            ],
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      <div className="relative z-10 h-full p-12">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={40} className="text-green-300" />
            <span className="text-green-300 text-lg font-semibold">
              BEST VALUE
            </span>
          </div>
          <h1 className="text-7xl font-bold text-white mb-4 leading-tight">
            Affordable Rides, No Compromise
          </h1>
          <div className="inline-block bg-yellow-400 text-zinc-900 px-6 py-2 rounded-full font-bold text-xl">
            Top choices under IDR 250k/day.
          </div>
        </div>

        <div
          className="space-y-8 max-w-5xl mx-auto"
          style={{ perspective: "1200px" }}>
          <div className="flex justify-center gap-6">
            {cars.slice(0, 4).map((car, idx) => (
              <div
                key={idx}
                className="relative transform hover:scale-110 transition-transform"
                style={{ transform: `translateZ(${50 - idx * 10}px)` }}>
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-40 h-auto drop-shadow-xl"
                />
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-zinc-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  ${30 + idx * 5}/day
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 opacity-70">
            {cars.slice(4).map((car, idx) => (
              <div
                key={idx}
                className="relative transform hover:scale-110 transition-transform"
                style={{
                  transform: `translateZ(${-50 - idx * 10}px) scale(0.85)`,
                }}>
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-32 h-auto drop-shadow-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition-colors shadow-xl">
        View Budget-Friendly Cars
      </button>
    </div>
  )
}

// Family Hero Section
function FamilyHero({ cars }) {
  if (!cars || cars.length === 0) return null
  const mainCar = cars[0]

  return (
    <div className="w-full h-screen bg-gradient-to-br from-purple-500 via-pink-600 to-rose-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users size={48} className="text-pink-300" />
            <span className="text-pink-300 text-xl font-medium">
              FAMILY FRIENDLY
            </span>
          </div>
          <h1 className="text-7xl font-bold text-white mb-4 leading-tight">
            Spacious Cars for Your Whole Crew
          </h1>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full">
            <p className="text-2xl text-white">
              Comfortable, safe, and perfect for trips.
            </p>
          </div>
        </div>

        <div className="relative">
          <img
            src={mainCar.img}
            alt={mainCar.name}
            className="w-[500px] h-auto drop-shadow-2xl transform hover:scale-105 transition-transform"
          />

          <div className="absolute -left-32 top-1/4 opacity-40 transform hover:scale-110 transition-transform">
            <div className="text-6xl">🎒</div>
            <span className="text-white text-sm">Luggage</span>
          </div>
          <div className="absolute -right-32 top-1/4 opacity-40 transform hover:scale-110 transition-transform">
            <div className="text-6xl">🍼</div>
            <span className="text-white text-sm">Baby Gear</span>
          </div>
          <div className="absolute -bottom-16 left-1/4 opacity-40 transform hover:scale-110 transition-transform">
            <div className="text-6xl">🧳</div>
            <span className="text-white text-sm">Travel</span>
          </div>

          <div className="absolute -bottom-32 right-0 bg-white/10 backdrop-blur-md p-4 rounded-lg opacity-60">
            <div className="text-white text-sm mb-2">Seating: 7 passengers</div>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-pink-300/50 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-colors shadow-xl">
        Find Family Vehicles
      </button>
    </div>
  )
}

// Latest Hero Section
function LatestHero({ cars }) {
  if (!cars || cars.length === 0) return null
  const mainCar = cars[0]

  return (
    <div className="w-full h-screen bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-700 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-1/2 right-0 w-[800px] h-2 bg-white/30 transform -translate-y-1/2 rotate-[-15deg] blur-sm" />
        <div className="absolute top-1/2 right-0 w-[600px] h-1 bg-white/50 transform -translate-y-1/2 rotate-[-15deg]" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-between p-12">
        <div className="relative flex-1 flex items-center justify-center">
          <img
            src={mainCar.img}
            alt={mainCar.name}
            className="w-[600px] h-auto drop-shadow-2xl transform hover:scale-105 transition-transform animate-pulse"
          />

          <div className="absolute top-16 left-32 bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20 animate-bounce">
            <div className="text-white text-2xl font-bold">2026</div>
            <div className="text-purple-200 text-sm">Latest Model</div>
          </div>

          <div
            className="absolute top-1/3 right-16 bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20 animate-bounce"
            style={{ animationDelay: "0.5s" }}>
            <div className="text-white text-xl font-bold">450 HP</div>
            <div className="text-purple-200 text-sm">Raw Power</div>
          </div>

          <div
            className="absolute bottom-1/4 left-16 bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20 animate-bounce"
            style={{ animationDelay: "1s" }}>
            <div className="text-white text-xl font-bold">Smart AI</div>
            <div className="text-purple-200 text-sm">Driver Assist</div>
          </div>
        </div>

        <div className="absolute bottom-12 left-12 max-w-2xl">
          <p className="text-purple-300 text-lg font-medium mb-2 tracking-wide">
            Be the first to ride the newest releases.
          </p>
          <h1 className="text-6xl font-bold text-white leading-tight mb-4">
            Brand-New Models, Fresh From the Factory
          </h1>
          <div className="flex items-center gap-3">
            <Calendar size={32} className="text-purple-300" />
            <span className="text-purple-200 text-xl">NEW ARRIVAL</span>
          </div>
        </div>
      </div>

      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-xl">
        See Latest Models
      </button>
    </div>
  )
}

// Main HeroSection Component with category prop
export default function HeroSection({ category = "luxury" }) {
  const [carData, setCarData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch car data from public folder
    fetch("/db_cars.json")
      .then((res) => res.json())
      .then((data) => {
        setCarData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error loading car data:", error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    )
  }

  if (!carData) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-zinc-950">
        <p className="text-white text-xl">Failed to load car data</p>
      </div>
    )
  }

  // Map category to hero component
  const heroComponents = {
    electric: <EVHero cars={getCarsByCategory(carData.cars, "Electric")} />,
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
