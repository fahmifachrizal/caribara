// app/loading.js
export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center">
      <div className="text-center">
        {/* Animated car icon */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          {/* Car body */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-7xl animate-bounce">🚗</div>
          </div>

          {/* Road lines */}
          <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-transparent via-primary to-transparent animate-[slide_1.5s_ease-in-out_infinite]" />
          </div>
        </div>

        {/* Loading text */}
        <h2 className="text-2xl font-bold mb-2">Loading Your Journey</h2>
        <p className="text-muted-foreground">
          Getting everything ready for you...
        </p>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-150" />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-300" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .delay-150 {
          animation-delay: 150ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </div>
  )
}
