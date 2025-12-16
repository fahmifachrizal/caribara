import {
  ThumbsUp,
  ExternalLink,
} from "lucide-react"

// SHARED: Standard container style for uniform dimensions
const CARD_BASE_STYLE = "w-[280px] h-[160px] bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg p-4 transition-colors cursor-pointer flex flex-col relative overflow-hidden group"

export function GoogleSearchCard() {
  return (
    <div className={`${CARD_BASE_STYLE} hover:border-blue-500/50 dark:hover:border-blue-500/50`}>
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold shrink-0 shadow-sm">
              G
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium truncate">
              Sponsored
            </span>
          </div>
          <h3 className="text-[15px] text-blue-600 dark:text-blue-400 font-medium truncate leading-snug mb-1">
            CariBara - Premium Rental
          </h3>
          <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
             Premium car rental from $30/day. 500+ vehicles available. Book your perfect ride today with 0% fees.
          </div>
        </div>
      </div>
       {/* Decorative bottom fade/link */}
       <div className="mt-auto pt-2 flex items-center gap-1 text-[10px] text-gray-400">
          <ExternalLink size={10} />
          caribara.com
       </div>
    </div>
  )
}

export function TwitterPostCard() {
  return (
    <div className={`${CARD_BASE_STYLE} hover:border-sky-500/50 dark:hover:border-sky-500/50`}>
      <div className="flex gap-3 h-full">
        <div className="w-9 h-9 bg-black dark:bg-white rounded-full shrink-0 flex items-center justify-center text-white dark:text-black text-xs font-bold">
          X
        </div>
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-sm font-bold text-gray-900 dark:text-gray-100 truncate">
              CariBara
            </span>
            <span className="text-xs text-gray-500">@caribara · 2h</span>
          </div>
          <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3 mb-auto">
            Experience premium car rental 🚗✨ Book your perfect ride today! Starting from just $30/day. #Travel #Rental
          </p>
          
          <div className="flex items-center gap-4 mt-2 text-gray-400">
             <div className="flex items-center gap-1 hover:text-pink-500 transition-colors">
                <ThumbsUp size={12} />
                <span className="text-[10px]">1.2k</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FacebookAdCard() {
  return (
    <div className={`${CARD_BASE_STYLE} hover:border-indigo-500/50 dark:hover:border-indigo-500/50 p-0 bg-gray-50`}>
      {/* Image/Media Top Half */}
      <div className="h-20 bg-linear-to-r rounded-t-lg from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
         <span className="text-3xl drop-shadow-md">🚗</span>
      </div>
      
      {/* Content Bottom Half */}
      <div className="p-3 flex flex-col rounded-b-lg justify-center flex-1 bg-gray-50 dark:bg-zinc-800/50">
        <div className="flex justify-between items-start">
            <div>
                <div className="text-xs font-bold text-gray-900 dark:text-gray-100">CariBara Rental</div>
                <div className="text-[10px] text-gray-500">Sponsored · caribara.com</div>
            </div>
            <button className="text-[10px] font-semibold bg-gray-200 dark:bg-zinc-700 px-2 py-1 rounded">
                Book
            </button>
        </div>
      </div>
    </div>
  )
}