// app/not-found.js
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="text-[200px] font-bold text-zinc-200 dark:text-zinc-800 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl animate-bounce">🚗💨</div>
          </div>
        </div>

        {/* Error message */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Oops! Wrong Turn
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Looks like this page drove off the map. Let&apos;s get you back on track!
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/">
              <Home size={20} />
              Back to Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/find-car">
              <Search size={20} />
              Find a Car
            </Link>
          </Button>
        </div>

        {/* Helpful links */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/#about" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/cms" className="hover:text-primary transition-colors">
              CMS
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}