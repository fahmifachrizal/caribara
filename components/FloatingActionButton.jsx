"use client"

import { useState, useEffect, useRef } from "react"
import {
  Info,
  ThumbsUp,
  Star,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

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
    { title: "Feature 1", content: "Your amazing content here" },
    { title: "Feature 2", content: "More awesome content" },
    { title: "Feature 3", content: "Even more great stuff" },
  ]

  // Width logic
  const getWidth = () => {
    if (isLocked) return "400px"
    if (isExpanded && isLiked) return "248px"
    if (isExpanded && !isLiked) return "168px"
    if (isLiked) return "192px"
    return "56px"
  }

  // Detect end of expand animation
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

  // Reset animation status when expanding
  useEffect(() => {
    if (isExpanded || isLocked) {
      setIsAnimationDone(false)
    }
  }, [isExpanded, isLocked])

  // Click outside to close
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
        className="bg-zinc-900/40 dark:bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl transition-all duration-200"
        style={{
          height: isLocked ? "320px" : "54px",
          width: getWidth(),
          transformOrigin: "right center",
        }}>
        <div className="h-full flex flex-col justify-end overflow-hidden">
          {/* --------------------------
              CAROUSEL (Locked Mode)
          --------------------------- */}
          {isLocked && isAnimationDone && (
            <div className="flex-1 px-4 py-2 mb-2 animate-in fade-in duration-300">
              <div className="h-full relative">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-zinc-300">
                      {slides[currentSlide].content}
                    </p>
                    <div className="mt-6 text-sm text-zinc-400">
                      Slide {currentSlide + 1} of {slides.length}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-70">
                  <ChevronLeft size={20} className="text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-lg flex items-center justify-center hover:opacity-70">
                  <ChevronRight size={20} className="text-white" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-white w-6"
                          : "bg-white/30 hover:bg-white/50 w-2"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* --------------------------
                BOTTOM ROW ICONS
          --------------------------- */}
          <div className="flex items-center justify-between gap-2 h-[52px]">
            {/* LOCK BUTTON */}
            {(isExpanded || isLocked) && (
              <button
                onClick={toggleLock}
                className="w-12 h-12 flex items-center justify-center">
                <ChevronUp
                  size={24}
                  className={`text-white transition-all hover:opacity-70 ${
                    isLocked ? "rotate-180" : ""
                  }`}
                />
              </button>
            )}

            <div className="flex flex-1 items-center justify-end">
              {/* RATING */}
              {isAnimationDone && isLiked && (
                <div className="flex items-center gap-1 px-2 animate-in slide-in-from-right duration-200">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="transition-transform hover:scale-110">
                      <Star
                        size={20}
                        className={
                          star <= (hoveredRating || rating)
                            ? "fill-white text-white"
                            : "text-white/40"
                        }
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* LIKE BUTTON */}
              {isAnimationDone && (isExpanded || isLocked) && !isLiked && (
                <button
                  onClick={handleLike}
                  className="w-12 h-12 flex items-center justify-center">
                  <ThumbsUp size={24} className="text-white hover:opacity-70" />
                </button>
              )}

              {/* ALWAYS SHOW INFO ICON */}
              <button className="w-12 h-12 flex items-center justify-center">
                <Info size={24} className="text-white hover:opacity-70" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
