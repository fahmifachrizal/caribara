import { Button } from "@/components/ui/button"
import Image from "next/image"

// Electric Hero Section
function ElectricHero({ cars }) {
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
              className="absolute -bottom-20"
              style={{
                left: `${idx * 200}px`,
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
          <div className="absolute bottom-0 right-20">
            <Image
              src="https://i.ibb.co.com/CXFkbJC/charging-station.png"
              alt="Charging Station"
              width={250}
              height={100}
              className="w-[250px] h-auto mx-auto drop-shadow-2xl"
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
