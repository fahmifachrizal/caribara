// components/car-card.jsx
import { Button } from "@/components/ui/button"
import { Users, Gauge, Zap, Star } from "lucide-react"

// Server Component - No client-side state
export default function CarCard({ car, heightVariant = "medium" }) {
  const heights = {
    short: "min-h-[380px]",
    medium: "min-h-[420px]",
    tall: "min-h-[460px]",
  }

  const imageHeights = {
    short: "h-[180px]",
    medium: "h-[220px]",
    tall: "h-[260px]",
  }

  const getGradient = (category) => {
    const gradients = {
      Sedan: "from-blue-500 to-cyan-500",
      SUV: "from-green-500 to-emerald-500",
      Luxury: "from-purple-500 to-pink-500",
      "Luxury SUV": "from-purple-500 to-pink-500",
      Compact: "from-orange-500 to-yellow-500",
      MPV: "from-indigo-500 to-blue-500",
      Electric: "from-teal-500 to-green-500",
    }
    return gradients[category] || "from-gray-500 to-slate-500"
  }

  return (
    <div className={`break-inside-avoid ${heights[heightVariant]}`}>
      <div className="h-full border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 bg-white dark:bg-zinc-900 group hover:-translate-y-1">
        {/* Car Image */}
        <div
          className={`relative ${imageHeights[heightVariant]} overflow-hidden`}>
          <div
            className={`absolute inset-0 bg-linear-to-br ${getGradient(
              car.category
            )} opacity-90`}>
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: "24px 24px",
                }}
              />
            </div>
          </div>

          {/* Car Placeholder with Icon */}
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
              <div className="text-6xl mb-2">🚗</div>
              <p className="text-sm font-medium opacity-90">{car.name}</p>
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-full text-xs font-semibold">
            {car.category}
          </div>

          {/* Rating Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm rounded-full text-xs font-semibold flex items-center gap-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            4.8
          </div>
        </div>

        {/* Car Details */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1">{car.name}</h3>
              <p className="text-sm text-muted-foreground">Available Now</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{car.price}</div>
              <p className="text-xs text-muted-foreground">per day</p>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b">
            <div className="flex flex-col items-center gap-1 p-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <Users size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium">{car.seats}</span>
              <span className="text-xs text-muted-foreground">Seats</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <Gauge size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium">{car.transmission}</span>
              <span className="text-xs text-muted-foreground">Trans</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2 bg-zinc-50 dark:bg-zinc-800 rounded-lg">
              <Zap size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium">{car.fuel}</span>
              <span className="text-xs text-muted-foreground">Fuel</span>
            </div>
          </div>

          {/* Features */}
          <div className="mb-6">
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Free cancellation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">✓</span>
                Insurance included
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button className="flex-1" size="lg">
              Book Now
            </Button>
            <Button variant="outline" size="lg">
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}