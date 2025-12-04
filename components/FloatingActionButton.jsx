"use client"
import { useState, useEffect, useRef } from "react"
import {
  Info,
  ThumbsUp,
  Star,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  MoreHorizontal,
} from "lucide-react"

// Entry Point Cards Components
const GoogleSearchCard = () => {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer border border-gray-200 dark:border-zinc-700">
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

const TwitterPostCard = () => {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer">
      <div className="flex gap-2.5">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shrink-0 flex items-center justify-center text-white text-xs font-bold">
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

const FacebookAdCard = () => {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex gap-3 p-3">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 shrink-0 rounded-lg flex items-center justify-center">
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

export default function FloatingActionButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isLocked, setIsLocked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimationDone, setIsAnimationDone] = useState(false)

  const containerRef = useRef(null)

  const slides = [
    { title: "Google Search", component: <GoogleSearchCard /> },
    { title: "Twitter/X Post", component: <TwitterPostCard /> },
    { title: "Facebook Ad", component: <FacebookAdCard /> },
  ]

  const getWidth = () => {
    if (isLocked) return "320px"
    if (isExpanded && isLiked) return "260px"
    if (isExpanded && !isLiked) return "180px"
    if (isLiked) return "200px"
    return "56px"
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleEnd = (e) => {
      if (e.propertyName === "width") {
        setIsAnimationDone(true)
      }
    }

    el.addEventListener("transitionend", handleEnd)
    return () => el.removeEventListener("transitionend", handleEnd)
  }, [])

  useEffect(() => {
    if (isExpanded || isLocked) {
      setIsAnimationDone(false)
    }
  }, [isExpanded, isLocked])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isLocked &&
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsLocked(false)
        setIsExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isLocked])

  const handleLike = () => {
    setIsLiked(true)
    console.log("Liked!")
  }

  const handleRating = (value) => {
    setRating(value)
    console.log("Rating set:", value)
  }

  const toggleLock = () => {
    setIsLocked(!isLocked)
    if (!isLocked) setIsExpanded(true)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        ref={containerRef}
        onMouseEnter={() => !isLocked && setIsExpanded(true)}
        onMouseLeave={() => !isLocked && setIsExpanded(false)}
        className="bg-zinc-900/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl transition-all duration-300 ease-out"
        style={{
          height: isLocked ? "220px" : "56px",
          width: getWidth(),
          transformOrigin: "right center",
        }}>
        <div className="h-full flex flex-col justify-end overflow-hidden">
          {/* Carousel Section (Locked Mode) */}
          {isLocked && isAnimationDone && (
            <div className="flex-1 px-4 py-3 mb-1 animate-in fade-in duration-300">
              <div className="h-full relative flex flex-col">
                {/* Title */}
                <div className="text-center mb-2">
                  <h3 className="text-xs font-semibold text-white/90">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-[10px] text-white/50 mt-0.5">
                    Entry point {currentSlide + 1}/{slides.length}
                  </p>
                </div>

                {/* Card Display */}
                <div className="flex-1 flex items-center justify-center px-6">
                  <div className="w-full max-w-[280px]">
                    {slides[currentSlide].component}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors group"
                  aria-label="Previous slide">
                  <ChevronLeft
                    size={16}
                    className="text-white/60 group-hover:text-white transition-colors"
                  />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors group"
                  aria-label="Next slide">
                  <ChevronRight
                    size={16}
                    className="text-white/60 group-hover:text-white transition-colors"
                  />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-1.5 mt-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-white w-4"
                          : "bg-white/30 hover:bg-white/50 w-1.5"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Bottom Action Bar */}
          <div className="flex items-center justify-between gap-2 h-[56px] px-1">
            {/* Lock/Expand Button */}
            {(isExpanded || isLocked) && (
              <button
                onClick={toggleLock}
                className="w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors group"
                aria-label={isLocked ? "Collapse" : "Expand"}>
                <ChevronUp
                  size={20}
                  className={`text-white/70 group-hover:text-white transition-all ${
                    isLocked ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}

            <div className="flex flex-1 items-center justify-end gap-1">
              {/* Rating Stars */}
              {isAnimationDone && isLiked && (
                <div className="flex items-center gap-0.5 px-2 animate-in slide-in-from-right duration-200">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110"
                      aria-label={`Rate ${star} stars`}>
                      <Star
                        size={18}
                        className={`${
                          star <= (hoveredRating || rating)
                            ? "fill-white text-white"
                            : "text-white/40"
                        } transition-colors`}
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Like Button */}
              {isAnimationDone && (isExpanded || isLocked) && !isLiked && (
                <button
                  onClick={handleLike}
                  className="w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors group"
                  aria-label="Like">
                  <ThumbsUp
                    size={20}
                    className="text-white/70 group-hover:text-white transition-colors"
                  />
                </button>
              )}

              {/* Info Button */}
              <button
                className="w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors group"
                aria-label="Information">
                <Info
                  size={20}
                  className="text-white/70 group-hover:text-white transition-colors"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
