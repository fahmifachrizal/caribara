// app/error.js
"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        {/* Error icon */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto bg-red-100 dark:bg-red-950/30 rounded-full flex items-center justify-center">
            <AlertCircle size={64} className="text-red-600 dark:text-red-400" />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-red-500/10 rounded-full blur-3xl -z-10" />
        </div>

        {/* Error message */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Something Went Wrong
        </h1>
        <p className="text-xl text-muted-foreground mb-2">
          We encountered an unexpected issue
        </p>

        {/* Error details (only in development) */}
        {process.env.NODE_ENV === "development" && error.message && (
          <div className="my-6 p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-lg text-left">
            <p className="text-sm font-mono text-red-600 dark:text-red-400">
              {error.message}
            </p>
          </div>
        )}

        <p className="text-muted-foreground mb-8">
          Don&apos;t worry, it&apos;s not your fault. Let&apos;s try to fix this.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={reset}>
            <RefreshCw size={20} />
            Try Again
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/">
              <Home size={20} />
              Go Home
            </Link>
          </Button>
        </div>

        {/* Help text */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            If this problem persists, please{" "}
            <Link href="/#contact" className="text-primary hover:underline">
              contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}