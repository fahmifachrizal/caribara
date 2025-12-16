// components/personalization/heroes/budget.jsx
import { TrendingUp } from "lucide-react"
import { CarImage } from "@/components/car-image"

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

        <div className="space-y-8 w-full">
          <div className="relative flex w-full justify-center">
            {cars.slice(0, 4).map((car, idx) => {
              const offset = (idx - 3 / 2) * 400

              return (
                <div
                  key={idx}
                  className="absolute"
                  style={{
                    translate: `${offset}px ${idx === 0 ? "-10px" : "0"}`,
                    scale: idx === 3 ? 0.9 : idx === 0 ? 1.1 : 1.0,
                  }}>
                  <CarImage
                    src={car.img}
                    alt={car.name}
                    width={660}
                    className="drop-shadow-lg"
                    priority={idx === 0}
                    objectFit="contain"
                  />
                  <div className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-zinc-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
                    {200 + idx * 5}k/day
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition-colors shadow-xl">
        View Budget-Friendly Cars
      </button>
    </div>
  )
}

export { BudgetHero }
