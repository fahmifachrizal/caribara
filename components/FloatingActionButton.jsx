"use client"
import { useState, useEffect, useLayoutEffect, useRef } from "react"
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
  const [isToolbarOpen, setIsToolbarOpen] = useState(false)
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  // State to store the dynamic dimensions of the content
  const [contentHeight, setContentHeight] = useState(0)
  const [contentWidth, setContentWidth] = useState(0)

  const [isLiked, setIsLiked] = useState(false)
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const containerRef = useRef(null)
  const contentRef = useRef(null)

  const slides = [
    { title: "Google Search", component: <GoogleSearchCard /> },
    { title: "Twitter/X Post", component: <TwitterPostCard /> },
    { title: "Facebook Ad", component: <FacebookAdCard /> },
  ]

  useLayoutEffect(() => {
    if (isPanelOpen && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
      setContentWidth(contentRef.current.scrollWidth)
    }
  }, [isPanelOpen, currentSlide])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsPanelOpen(false)
        setIsToolbarOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLike = () => setIsLiked(!isLiked)
  const handleRating = (value) => setRating(value)

  const toggleToolbar = () => {
    if (isToolbarOpen) {
      setIsToolbarOpen(false)
      setIsPanelOpen(false)
    } else {
      setIsToolbarOpen(true)
    }
  }

  const togglePanel = () => setIsPanelOpen(!isPanelOpen)

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  // Determine if tools should be visible (Toolbar open OR Panel open)
  const isExpanded = isToolbarOpen || isPanelOpen

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        ref={containerRef}
        className="bg-zinc-900/95 dark:bg-zinc-950/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl transition-all duration-300 ease-out overflow-hidden flex flex-col justify-end"
        style={{
          height: isPanelOpen ? `${contentHeight + 56}px` : "56px",
          width: isPanelOpen
            ? `${contentWidth}px`
            : isToolbarOpen
            ? "auto"
            : "56px",
        }}>
        {/* === CAROUSEL SECTION === */}
        <div
          className={`transition-opacity duration-300 flex flex-col ${
            isPanelOpen
              ? "opacity-100 delay-100"
              : "opacity-0 pointer-events-none"
          }`}>
          {isPanelOpen && (
            <div ref={contentRef} className="flex flex-col w-max">
              {/* 1. Card Area */}
              <div className="flex items-center justify-center p-4 pt-5">
                {slides[currentSlide].component}
              </div>

              {/* 2. Bottom Controls Row */}
              <div className="px-4 pb-4 flex items-center justify-between gap-4 w-full">
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white/60 hover:text-white shrink-0">
                  <ChevronLeft size={16} />
                </button>

                <div className="flex-1 flex flex-col items-center min-w-0">
                  <h3 className="text-xs font-medium text-white/90 mb-1.5 whitespace-nowrap">
                    {slides[currentSlide].title}
                  </h3>
                  <div className="flex gap-1.5">
                    {slides.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          index === currentSlide
                            ? "bg-white w-4"
                            : "bg-white/20 w-1"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  onClick={nextSlide}
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white/60 hover:text-white shrink-0">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* === TOOLBAR SECTION === */}
        {/* justify-between ensures separation between Left (Chevron) and Right (Tools) */}
        <div className="h-[56px] flex items-center justify-between px-1 shrink-0 border-t border-white/0 relative z-20 w-full">
          {isPanelOpen && (
            <div className="absolute top-0 left-4 right-4 h-px bg-white/5" />
          )}

          {/* --- LEFT GROUP: Chevron --- */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? "w-12 opacity-100" : "w-0 opacity-0"
            }`}>
            <button
              onClick={togglePanel}
              className={`w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors group ${
                isPanelOpen ? "bg-white/10" : ""
              }`}>
              <ChevronUp
                size={20}
                className={`text-white/70 group-hover:text-white transition-all duration-300 ${
                  isPanelOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* --- RIGHT GROUP: Stars, Like, Wrench --- */}
          <div className="flex items-center">
            {/* Animated Wrapper for Stars & Like */}
            <div
              className={`flex items-center overflow-hidden transition-all duration-300 ${
                isExpanded ? "w-auto opacity-100 mr-1" : "w-0 opacity-0"
              }`}>
              {/* Stars */}
              {isLiked && (
                <div className="flex items-center gap-0.5 px-1 animate-in fade-in zoom-in duration-200">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRating(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      className="p-1 hover:scale-110 transition-transform">
                      <Star
                        size={16}
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
              <button
                onClick={handleLike}
                className="w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-lg transition-colors group">
                <ThumbsUp
                  size={20}
                  className={`text-white/70 group-hover:text-white transition-colors ${
                    isLiked ? "fill-white text-white" : ""
                  }`}
                />
              </button>
            </div>

            {/* Wrench (Always visible, rightmost) */}
            <button
              onClick={toggleToolbar}
              className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 group z-10 hover:bg-white/10 ${
                isToolbarOpen ? "bg-white/10" : ""
              }`}>
              <Wrench
                size={20}
                className="text-white/70 group-hover:text-white transition-colors"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
