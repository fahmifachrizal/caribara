// components/personalization/heroes/family.jsx
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import { CarImage } from "@/components/car-image"

// Family Hero Section - Custom layout: 2 left, 1 center, 2 right
function FamilyHero({ cars }) {
  if (!cars || cars.length === 0) return null

  // Ensure we have at least 5 cars, duplicate if needed
  const allCars = cars

  const leftCars = [allCars[0], allCars[1]]
  const centerCar = allCars[2]
  const rightCars = [allCars[3], allCars[4]]

  return (
    <div className="w-full h-screen min-h-screen bg-gradient-to-br from-purple-500 via-pink-600 to-rose-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 h-full flex flex-col p-12">
        {/* Header Section */}
        <div className="text-center mb-8">
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

        {/* Car Layout: 2-1-2 */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Left Column - 2 cars stacked */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-8">
            {leftCars.map((car, idx) => (
              <div key={`left-${idx}`} className="relative">
                <CarImage
                  src={car.img}
                  alt={car.name}
                  width={600}
                  className="drop-shadow-2xl scale-x-[-1]"
                  priority={idx === 0}
                  objectFit="contain"
                />
              </div>
            ))}
          </div>

          {/* Center - Main car (larger) */}
          <div className="relative z-10">
            <CarImage
              src={centerCar.img}
              alt={centerCar.name}
              width={700}
              className="drop-shadow-2xl transform"
              priority
              objectFit="contain"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
              <p className="text-white font-semibold">
                Perfect for 5+ passengers
              </p>
            </div>
          </div>

          {/* Right Column - 2 cars stacked */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-8">
            {rightCars.map((car, idx) => (
              <div key={`right-${idx}`} className="relative">
                <CarImage
                  src={car.img}
                  alt={car.name}
                  width={600}
                  className="drop-shadow-2xl"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-colors shadow-xl">
        Find Family Vehicles
      </Button>
    </div>
  )
}

export { FamilyHero }
