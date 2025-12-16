// app/find-car/page.js
import { Suspense } from "react"
import FindCarContent from "./FindCarContent"

export default function FindCarPage() {
  return (
    <Suspense fallback={<FindCarLoading />}>
      <FindCarContent />
    </Suspense>
  )
}

function FindCarLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-16 bg-white/10 rounded-lg mb-6 animate-pulse" />
            <div className="h-8 bg-white/10 rounded-lg mb-8 animate-pulse" />
            <div className="h-14 bg-white/10 rounded-xl animate-pulse" />
          </div>
        </div>
      </section>

      {/* Filter Section Skeleton */}
      <section className="sticky top-[72px] z-50 bg-white/80 dark:bg-zinc-950/95 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="h-10 w-24 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>

      {/* Cars Grid Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="break-inside-avoid">
                <div className="h-[420px] border rounded-xl bg-zinc-50 dark:bg-zinc-900 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}