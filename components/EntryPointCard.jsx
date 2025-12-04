import {
  ThumbsUp,
  ExternalLink,
} from "lucide-react"

// Entry Point Cards Components with Fixed Width
export function GoogleSearchCard() {
  return (
    <div className="w-[280px] bg-white dark:bg-zinc-900 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer border border-gray-200 dark:border-zinc-700">
      <div className="flex items-start gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center text-[9px] text-white font-bold shrink-0">
              C
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400 truncate">
              caribara.com
            </span>
          </div>
          <h3 className="text-sm text-blue-600 dark:text-blue-400 font-medium truncate leading-tight mb-0.5">
            CariBara - Premium Car Rental
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
            Experience premium car rental from $30/day. Book your perfect ride
            today.
          </p>
        </div>
        <ExternalLink size={14} className="text-gray-400 shrink-0 mt-0.5" />
      </div>
    </div>
  )
}

export function TwitterPostCard() {
  return (
    <div className="w-[280px] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
      <div className="flex gap-2.5">
        <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold">
          C
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
              CariBara
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              @caribara
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              · 2h
            </span>
          </div>
          <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
            Experience premium car rental 🚗✨ Book your perfect ride today!
            Starting from just $30/day.
          </p>
          <div className="flex items-center gap-4 mt-2 text-gray-500 dark:text-gray-400">
            <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              <ThumbsUp size={12} />
              <span className="text-xs">24</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FacebookAdCard() {
  return (
    <div className="w-[280px] bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex gap-3 p-3">
        <div className="w-16 h-16 bg-linear-to-br from-purple-600 to-pink-600 shrink-0 rounded-lg flex items-center justify-center">
          <div className="text-3xl">🚗</div>
        </div>
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
              CariBara
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              · Sponsored
            </span>
          </div>
          <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-2">
            Premium car rental from $30/day. 500+ vehicles, 50+ locations. Book
            now and save!
          </p>
        </div>
      </div>
    </div>
  )
}