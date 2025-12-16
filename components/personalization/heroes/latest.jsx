// components/personalization/heroes/latest.jsx
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { CarImage } from "@/components/car-image"

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
          <CarImage
            src={mainCar.img}
            alt={mainCar.name}
            width={600}
            className="drop-shadow-2xl transform hover:scale-105 transition-transform animate-pulse"
            priority
            objectFit="contain"
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

      <Button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-xl">
        See Latest Models
      </Button>
    </div>
  )
}

export { LatestHero }