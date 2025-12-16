// components/hero-section.jsx
import { Suspense } from "react"
import HeroContent from "./HeroContent"

export default function HeroSection() {
  return (
    <Suspense fallback={<HeroSkeleton />}>
      <HeroContent />
    </Suspense>
  )
}

function HeroSkeleton() {
  return (
    <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 h-8 w-64 bg-white/10 rounded-full animate-pulse" />
          <div className="h-24 w-3/4 mx-auto bg-white/10 rounded-lg mb-6 animate-pulse" />
          <div className="h-12 w-2/3 mx-auto bg-white/10 rounded-lg animate-pulse" />
        </div>

        <div className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl p-8">
          <div className="h-8 w-48 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-6 animate-pulse" />
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-20 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="h-12 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}