"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CarCard from "@/components/CarCard"
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal } from "lucide-react"

const cars = [
  {
    id: 1,
    name: "Toyota Camry",
    category: "Sedan",
    price: "$45",
    seats: 5,
    transmission: "Auto",
    fuel: "Hybrid",
  },
  {
    id: 2,
    name: "Honda CR-V",
    category: "SUV",
    price: "$65",
    seats: 7,
    transmission: "Auto",
    fuel: "Petrol",
  },
  {
    id: 3,
    name: "BMW 5 Series",
    category: "Luxury",
    price: "$150",
    seats: 5,
    transmission: "Auto",
    fuel: "Diesel",
  },
  {
    id: 4,
    name: "Suzuki Swift",
    category: "Compact",
    price: "$30",
    seats: 4,
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    id: 5,
    name: "Mercedes GLE",
    category: "Luxury SUV",
    price: "$180",
    seats: 7,
    transmission: "Auto",
    fuel: "Diesel",
  },
  {
    id: 6,
    name: "Mazda CX-5",
    category: "SUV",
    price: "$55",
    seats: 5,
    transmission: "Auto",
    fuel: "Petrol",
  },
  {
    id: 7,
    name: "Toyota Avanza",
    category: "MPV",
    price: "$40",
    seats: 7,
    transmission: "Manual",
    fuel: "Petrol",
  },
  {
    id: 8,
    name: "Tesla Model 3",
    category: "Electric",
    price: "$120",
    seats: 5,
    transmission: "Auto",
    fuel: "Electric",
  },
  {
    id: 9,
    name: "Mitsubishi Xpander",
    category: "MPV",
    price: "$45",
    seats: 7,
    transmission: "Auto",
    fuel: "Petrol",
  },
  {
    id: 10,
    name: "Audi A6",
    category: "Luxury",
    price: "$160",
    seats: 5,
    transmission: "Auto",
    fuel: "Petrol",
  },
  {
    id: 11,
    name: "Hyundai Creta",
    category: "SUV",
    price: "$50",
    seats: 5,
    transmission: "Auto",
    fuel: "Petrol",
  },
  {
    id: 12,
    name: "Nissan X-Trail",
    category: "SUV",
    price: "$60",
    seats: 7,
    transmission: "Auto",
    fuel: "Petrol",
  },
  {
    id: 13,
    name: "Lexus ES",
    category: "Luxury",
    price: "$170",
    seats: 5,
    transmission: "Auto",
    fuel: "Hybrid",
  },
  {
    id: 14,
    name: "Kia Sportage",
    category: "SUV",
    price: "$58",
    seats: 5,
    transmission: "Auto",
    fuel: "Diesel",
  },
  {
    id: 15,
    name: "Honda Accord",
    category: "Sedan",
    price: "$48",
    seats: 5,
    transmission: "Auto",
    fuel: "Petrol",
  },
]

const categories = [
  "All",
  "Sedan",
  "SUV",
  "Luxury",
  "Compact",
  "MPV",
  "Electric",
]

export default function FindCarPage() {
  const [filter, setFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCars = cars.filter((car) => {
    const matchesCategory = filter === "All" || car.category.includes(filter)
    const matchesSearch =
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Assign height variants for masonry effect
  const getHeightVariant = (index) => {
    const variants = ["short", "medium", "tall"]
    return variants[index % 3]
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Perfect Car
            </h1>
            <p className="text-xl text-zinc-300 mb-8">
              Browse our extensive fleet of {cars.length} premium vehicles and
              choose the ideal ride for your journey
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search by car name or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-zinc-900 text-foreground rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </section>

      {/* Filter Section */}
      <section className="sticky top-[73px] z-40 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={20} className="text-muted-foreground" />
              <span className="font-medium">Filter by Category</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {filteredCars.length} {filteredCars.length === 1 ? "car" : "cars"}{" "}
              available
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="whitespace-nowrap"
                size="lg">
                {category}
                {category !== "All" && (
                  <span className="ml-2 text-xs opacity-70">
                    ({cars.filter((c) => c.category.includes(category)).length})
                  </span>
                )}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Grid - Masonry Layout */}
      <section className="py-12 min-h-screen">
        <div className="container mx-auto px-4">
          {filteredCars.length > 0 ? (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredCars.map((car, index) => (
                <CarCard
                  key={car.id}
                  car={car}
                  heightVariant={getHeightVariant(index)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No Cars Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters to find what you&apos;re
                looking for
              </p>
              <Button
                onClick={() => {
                  setFilter("All")
                  setSearchQuery("")
                }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-16 bg-linear-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-zinc-100">Premium Vehicles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-zinc-100">Pickup Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-zinc-100">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-zinc-100">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our expert team is ready to help you find the perfect vehicle for
            your needs. Get personalized recommendations and exclusive deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="gap-2">
              <span>💬</span>
              Chat with Expert
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <span>📞</span>
              Call +62 123 456 789
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
