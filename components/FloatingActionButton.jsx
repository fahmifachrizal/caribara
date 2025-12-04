"use client"
import { useState, useEffect, useRef } from "react"
import {
  ThumbsUp,
  Star,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Wrench,
} from "lucide-react"
import {
  FacebookAdCard,
  GoogleSearchCard,
  TwitterPostCard,
} from "./EntryPointCard"

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

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleEnd = (e) => {
      if (e.propertyName === "width" || e.propertyName === "height") {
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
    setIsLiked(!isLiked)
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
        className="bg-zinc-900/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl transition-all duration-300 ease-out w-auto"
        style={{
          height: isLocked ? "240px" : "56px",
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

                {/* Card Display - Fixed Width Container */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-[280px]">
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
              {isAnimationDone && (isExpanded || isLocked) && (
                <button
                  onClick={handleLike}
                  className="w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors group"
                  aria-label="Like">
                  <ThumbsUp
                    size={20}
                    className={`text-white/70 group-hover:text-white transition-colors ${
                      isLiked ? "fill-white" : ""
                    }`}
                  />
                </button>
              )}

              {/* Settings Button */}
              <button
                className="w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors group"
                aria-label="Settings">
                <Wrench
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
