"use client"

import { useState } from "react"
import { Heart, Star, Settings, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleLike = () => {
    setIsLiked(!isLiked)
    // TODO: Implement like functionality with Firebase
    console.log("Like toggled:", !isLiked)
  }

  const handleRating = (value) => {
    setRating(value)
    // TODO: Implement rating functionality with Firebase
    console.log("Rating set:", value)
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity"
          onClick={toggleMenu}
        />
      )}

      {/* Floating Action Menu */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Action Items */}
        <div
          className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}>
          {/* CMS Access */}
          <Link href="/cms">
            <Button
              size="icon"
              className="w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 bg-purple-600 hover:bg-purple-700"
              title="Access CMS">
              <Settings size={24} />
            </Button>
          </Link>

          {/* Rating */}
          <div className="bg-white dark:bg-zinc-900 rounded-full shadow-lg p-3 flex flex-col gap-2 items-center">
            <span className="text-xs font-medium text-muted-foreground">Rate Us</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-all hover:scale-110"
                  title={`Rate ${star} star${star > 1 ? 's' : ''}`}>
                  <Star
                    size={20}
                    className={`transition-colors ${
                      star <= (hoveredRating || rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <span className="text-xs font-medium text-primary">
                Thank you! ({rating} star{rating > 1 ? 's' : ''})
              </span>
            )}
          </div>

          {/* Like Button */}
          <Button
            size="icon"
            onClick={handleLike}
            className={`w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 ${
              isLiked
                ? "bg-red-500 hover:bg-red-600"
                : "bg-white dark:bg-zinc-900 text-red-500 hover:bg-red-50 dark:hover:bg-zinc-800"
            }`}
            title={isLiked ? "Unlike" : "Like this portfolio"}>
            <Heart size={24} className={isLiked ? "fill-current" : ""} />
          </Button>
        </div>

        {/* Main FAB Button */}
        <Button
          size="icon"
          onClick={toggleMenu}
          className={`w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all ${
            isOpen ? "rotate-45 bg-red-500 hover:bg-red-600" : "bg-primary hover:bg-primary/90"
          }`}
          title={isOpen ? "Close menu" : "Open actions"}>
          {isOpen ? <X size={28} /> : <Heart size={28} />}
        </Button>
      </div>
    </>
  )
}