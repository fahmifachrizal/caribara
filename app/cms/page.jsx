// app/cms/page.js
import { Suspense } from "react"
import { CMSContent } from "./cms-content"

export default function CMSPage() {
  return (
    <Suspense fallback={<CMSLoading />}>
      <CMSContent />
    </Suspense>
  )
}

function CMSLoading() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section Skeleton */}
      <section className="relative py-16 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="h-12 w-3/4 bg-white/10 rounded-lg mb-4 animate-pulse" />
            <div className="h-6 w-1/2 bg-white/10 rounded-lg mb-6 animate-pulse" />
            <div className="flex items-center gap-4">
              <div className="h-10 w-40 bg-white/10 rounded-lg animate-pulse" />
              <div className="h-10 w-40 bg-white/10 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Tabs Skeleton */}
          <div className="flex gap-4 mb-8 border-b">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-12 w-32 bg-zinc-200 dark:bg-zinc-800 rounded-t-lg animate-pulse"
              />
            ))}
          </div>

          {/* Content Cards Skeleton */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="h-10 w-64 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
              <div className="h-10 w-32 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
            </div>

            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="border rounded-xl p-6 bg-zinc-50 dark:bg-zinc-900">
                <div className="h-6 w-48 bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-4 animate-pulse" />
                <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-800 rounded-lg mb-2 animate-pulse" />
                <div className="h-4 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
