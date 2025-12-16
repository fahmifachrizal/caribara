// components/personalization/heroes/electric.jsx
import { Button } from "@/components/ui/button"
import { CarImage } from "@/components/car-image"

// Electric Hero Section - Server Component
function ElectricHero({ cars }) {
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
              className="absolute -bottom-20"
              style={{
                left: `${idx * 180}px`,
                zIndex: idx + 1,
                willChange: "transform",
                contentVisibility: "auto",
              }}>
              <CarImage
                src={car.img}
                alt={car.name}
                width={1000}
                className="pointer-events-none select-none hover:scale-105 transition-transform duration-300"
                priority={idx === 0}
                objectFit="contain"
              />
            </div>
          ))}
          <div className="absolute bottom-10 right-5">
            <CarImage
              src="https://i.ibb.co.com/CXFkbJC/charging-station.png"
              alt="Charging Station"
              height={400}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      <Button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-cyan-600 rounded-full font-semibold hover:bg-cyan-50 transition-colors shadow-xl">
        Browse Electric Fleet
      </Button>
    </div>
  )
}

export { ElectricHero }
