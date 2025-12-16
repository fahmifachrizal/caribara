import { Button } from "@/components/ui/button"
import Image from "next/image"

// Luxury Hero Section
function LuxuryHero({ cars }) {
  if (!cars || cars.length === 0) return null

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Dark overlay */}
      <div className="absolute inset-0" />

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
                left: `${idx * 250}px`,
                zIndex: idx + 1,
              }}>
              <Image
                src={car.img}
                alt={car.name}
                width={1000}
                height={600}
                className="w-[1000px] max-w-none h-auto pointer-events-none select-none"
                priority={idx === 0}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <Button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-amber-600 rounded-full font-semibold hover:bg-amber-50 transition-colors shadow-xl">
        Explore Luxury Collection
      </Button>
    </div>
  )
}

export { LuxuryHero }