import React from "react"
import {
  ExternalLink,
  Heart,
  MessageCircle,
  Repeat2,
  Bookmark,
  ThumbsUp,
  Share2,
  MoreHorizontal,
} from "lucide-react"

// Google Search Result Card
export const GoogleSearchCard = () => {
  return (
    <div className="w-[250px] h-[50px] bg-white rounded-sm p-2 flex flex-col justify-center hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex items-start gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-0.5">
            <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center text-[8px] text-white font-bold">
              C
            </div>
            <span className="text-[11px] text-gray-600 truncate">
              caribara.com
            </span>
          </div>
          <h3 className="text-[13px] text-blue-600 font-normal truncate leading-tight">
            CariBara - Premium Car Rental Service
          </h3>
        </div>
        <ExternalLink size={12} className="text-gray-400 shrink-0 mt-0.5" />
      </div>
    </div>
  )
}

// Twitter/X Post Card
export const TwitterPostCard = () => {
  return (
    <div className="w-[250px] h-[50px] bg-white border border-gray-200 rounded-lg p-2 hover:bg-gray-50 transition-colors cursor-pointer">
      <div className="flex gap-2">
        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shrink-0 flex items-center justify-center text-white text-[10px] font-bold">
          C
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1 mb-0.5">
            <span className="text-[11px] font-semibold text-gray-900 truncate">
              CariBara
            </span>
            <span className="text-[10px] text-gray-500">@caribara · 2h</span>
          </div>
          <p className="text-[10px] text-gray-700 leading-tight line-clamp-2">
            Experience premium car rental 🚗✨ Book your perfect ride today!
          </p>
        </div>
      </div>
    </div>
  )
}

// Facebook Ad Card
export const FacebookAdCard = () => {
  return (
    <div className="w-[250px] h-[50px] bg-white border border-gray-300 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex h-full">
        <div className="w-[50px] h-full bg-gradient-to-br from-purple-600 to-pink-600 shrink-0 flex items-center justify-center">
          <div className="text-2xl">🚗</div>
        </div>
        <div className="flex-1 p-2 flex flex-col justify-center min-w-0">
          <div className="flex items-center gap-1 mb-0.5">
            <span className="text-[10px] font-semibold text-gray-900 truncate">
              CariBara
            </span>
            <span className="text-[8px] text-gray-500">· Sponsored</span>
          </div>
          <p className="text-[10px] text-gray-700 leading-tight line-clamp-2">
            Premium car rental from $30/day. Book now!
          </p>
        </div>
      </div>
    </div>
  )
}
