import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  Star,
  Users,
  Calendar,
  TrendingUp,
} from "lucide-react"

// EV Hero Section
export function EVHero() {
  return (
    <div className="w-full h-screen bg-linear-to-br from-cyan-500 via-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Neon Grid Background */}
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

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-12">
        {/* Title Section - Top Left */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Zap size={48} className="text-cyan-300" />
            <span className="text-cyan-300 text-xl font-medium">
              Electric Vehicles
            </span>
          </div>
          <h1 className="text-7xl font-bold text-white mb-4 leading-tight">
            Drive the Future Today
          </h1>
          <p className="text-2xl text-cyan-100">
            Experience silent power and zero emissions.
          </p>
        </div>

        {/* Cars Section - Bottom */}
        <div className="flex items-end justify-center gap-8 pb-12">
          {/* Neon glow lines */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-cyan-400 to-transparent opacity-60" />
          <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-cyan-300 to-transparent opacity-40" />

          {["🚗", "🚙", "🚕"].map((car, idx) => (
            <div
              key={idx}
              className="relative transform hover:scale-110 transition-transform duration-300">
              <div className="text-9xl drop-shadow-2xl filter brightness-110">
                {car}
              </div>
              {/* Glow effect */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-400/40 rounded-full blur-3xl" />
            </div>
          ))}

          {/* Charging station silhouette */}
          <div className="absolute right-24 bottom-20 opacity-20">
            <div className="w-16 h-32 bg-white/30 rounded-t-lg relative">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 border-4 border-white/50 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-cyan-600 rounded-full font-semibold hover:bg-cyan-50 transition-colors shadow-xl">
        Browse Electric Fleet
      </button>
    </div>
  )
}

// Luxury Hero Section
export function LuxuryHero() {
  const [carouselRotation, setCarouselRotation] = useState(0)
  const cars = ["🏎️", "🚗", "🚙", "🚕"]

  const rotateCarousel = (direction) => {
    setCarouselRotation((prev) => prev + (direction === "left" ? -90 : 90))
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-amber-500 via-orange-600 to-red-700 relative overflow-hidden">
      {/* Dark spotlight background */}
      <div className="absolute inset-0 bg-zinc-950/60" />
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 h-full flex items-center justify-between p-12">
        {/* Left - Text */}
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-6">
            <Star size={40} className="text-amber-300" />
            <span className="text-amber-300 text-lg font-medium tracking-wider">
              LUXURY COLLECTION
            </span>
          </div>
          <h1 className="text-7xl font-bold text-white mb-6 leading-tight">
            Premium Cars for Premium Journeys
          </h1>
          <div className="relative inline-block">
            <p className="text-2xl text-amber-100">
              Indulge in comfort, performance, and prestige.
            </p>
            <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
          </div>
        </div>

        {/* Right - 3D Carousel */}
        <div className="relative w-1/2 h-96">
          <div
            className="relative w-full h-full"
            style={{ perspective: "1000px" }}>
            <div
              className="absolute inset-0 transition-transform duration-700"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${carouselRotation}deg)`,
              }}>
              {cars.map((car, idx) => {
                const angle = (360 / cars.length) * idx
                return (
                  <div
                    key={idx}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(300px)`,
                    }}>
                    <div className="text-8xl drop-shadow-2xl transform hover:scale-110 transition-transform">
                      {car}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={() => rotateCarousel("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => rotateCarousel("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
            <ChevronRight size={20} />
          </button>
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
export function BudgetHero() {
  const cars = ["🚗", "🚙", "🚕", "🚐", "🚗", "🚙", "🚕", "🚐"]

  return (
    <div className="w-full h-screen bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 relative overflow-hidden">
      {/* Cheerful confetti background */}
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
        {/* Title - Top Left */}
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

        {/* Cars Grid - Two Rows */}
        <div
          className="space-y-8 max-w-5xl mx-auto"
          style={{ perspective: "1200px" }}>
          {/* Front Row */}
          <div className="flex justify-center gap-6">
            {cars.slice(0, 4).map((car, idx) => (
              <div
                key={idx}
                className="relative transform hover:scale-110 transition-transform"
                style={{
                  transform: `translateZ(${50 - idx * 10}px)`,
                }}>
                <div className="text-7xl drop-shadow-xl">{car}</div>
                {/* Price tag */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-zinc-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  ${30 + idx * 5}/day
                </div>
              </div>
            ))}
          </div>

          {/* Back Row */}
          <div className="flex justify-center gap-6 opacity-70">
            {cars.slice(4).map((car, idx) => (
              <div
                key={idx}
                className="relative transform hover:scale-110 transition-transform"
                style={{
                  transform: `translateZ(${-50 - idx * 10}px) scale(0.85)`,
                }}>
                <div className="text-6xl drop-shadow-xl">{car}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-green-600 rounded-full font-semibold hover:bg-green-50 transition-colors shadow-xl">
        View Budget-Friendly Cars
      </button>
    </div>
  )
}

// Family Hero Section
export function FamilyHero() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-purple-500 via-pink-600 to-rose-700 relative overflow-hidden">
      {/* Soft rounded shapes background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center p-12">
        {/* Title - Centered Top */}
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

        {/* Main Car with Accessories */}
        <div className="relative">
          {/* Car */}
          <div className="text-[200px] drop-shadow-2xl transform hover:scale-105 transition-transform">
            🚐
          </div>

          {/* Accessories around car */}
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

          {/* Seating Layout Diagram */}
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

      {/* CTA Button */}
      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-colors shadow-xl">
        Find Family Vehicles
      </button>
    </div>
  )
}

// Latest Hero Section
export function LatestHero() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-700 relative overflow-hidden">
      {/* Diagonal speed streak */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-1/2 right-0 w-[800px] h-2 bg-white/30 transform -translate-y-1/2 rotate-[-15deg] blur-sm" />
        <div className="absolute top-1/2 right-0 w-[600px] h-1 bg-white/50 transform -translate-y-1/2 rotate-[-15deg]" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-between p-12">
        {/* Right - Main Car */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="text-[200px] drop-shadow-2xl transform hover:scale-105 transition-transform animate-pulse">
            🏎️
          </div>

          {/* Floating Info Cards */}
          <div className="absolute top-16 left-32 bg-white/10 backdrop-blur-md px-6 py-3 rounded-lg border border-white/20 animate-bounce">
            <div className="text-white text-2xl font-bold">2025</div>
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

        {/* Left - Text (over gradient) */}
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

      {/* CTA Button */}
      <button className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-xl">
        See Latest Models
      </button>
    </div>
  )
}

// Demo Component - Choose which one to display
export default function CategoryHeroDemo() {
  const [activeHero, setActiveHero] = useState("ev")

  const heroes = {
    ev: <EVHero />,
    luxury: <LuxuryHero />,
    budget: <BudgetHero />,
    family: <FamilyHero />,
    latest: <LatestHero />,
  }

  return (
    <div className="w-full h-screen relative">
      {heroes[activeHero]}

      {/* Demo Selector - Remove this in production */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-black/50 backdrop-blur-md p-2 rounded-full">
        {Object.keys(heroes).map((key) => (
          <button
            key={key}
            onClick={() => setActiveHero(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${
              activeHero === key
                ? "bg-white text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}>
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}
