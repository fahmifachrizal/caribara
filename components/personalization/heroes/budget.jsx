import { TrendingUp } from "lucide-react"
import Image from "next/image"

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
                <Image
                  src={car.img}
                  alt={car.name}
                  width={160}
                  height={120}
                  className="w-40 h-auto drop-shadow-xl"
                  priority={idx === 0}
                  loading={idx === 0 ? "eager" : "lazy"}
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
                <Image
                  src={car.img}
                  alt={car.name}
                  width={128}
                  height={96}
                  className="w-32 h-auto drop-shadow-xl"
                  loading="lazy"
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

export { BudgetHero }