// components/personalization/heroes/family.jsx
import { Button } from "@/components/ui/button"
import { Users } from "lucide-react"
import { CarImage } from "@/components/car-image"

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
          <CarImage
            src={mainCar.img}
            alt={mainCar.name}
            width={500}
            className="drop-shadow-2xl transform hover:scale-105 transition-transform"
            priority
            objectFit="contain"
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

      <Button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-colors shadow-xl">
        Find Family Vehicles
      </Button>
    </div>
  )
}

export { FamilyHero }