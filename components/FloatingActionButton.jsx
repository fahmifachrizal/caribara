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
import {
  GoogleSearchCard,
  TwitterPostCard,
  FacebookAdCard,
} from "@/components/EntryPointCards"

// Updated FloatingActionButton with Entry Point Cards
export default function FloatingActionButtonWithCards() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  const containerRef = useRef(null);

  // Updated slides with entry point cards
  const slides = [
    { title: "Google Search", component: <GoogleSearchCard /> },
    { title: "Twitter/X", component: <TwitterPostCard /> },
    { title: "Facebook Ad", component: <FacebookAdCard /> },
  ];

  // Width logic
  const getWidth = () => {
    if (isLocked) return "290px";
    if (isExpanded && isLiked) return "248px";
    if (isExpanded && !isLiked) return "168px";
    if (isLiked) return "192px";
    return "56px";
  };

  // Detect end of expand animation
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleEnd = (e) => {
      if (e.propertyName === "width") {
        setIsAnimationDone(true);
      }
    };

    el.addEventListener("transitionend", handleEnd);
    return () => el.removeEventListener("transitionend", handleEnd);
  }, []);

  // Reset animation status when expanding
  useEffect(() => {
    if (isExpanded || isLocked) {
      setIsAnimationDone(false);
    }
  }, [isExpanded, isLocked]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isLocked &&
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsLocked(false);
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isLocked]);

  const handleLike = () => {
    setIsLiked(true);
    console.log("Liked!");
  };

  const handleRating = (value) => {
    setRating(value);
    console.log("Rating set:", value);
  };

  const toggleLock = () => {
    setIsLocked(!isLocked);
    if (!isLocked) setIsExpanded(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        ref={containerRef}
        onMouseEnter={() => !isLocked && setIsExpanded(true)}
        onMouseLeave={() => !isLocked && setIsExpanded(false)}
        className="bg-zinc-900/40 dark:bg-zinc-950/40 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl transition-all duration-200"
        style={{
          height: isLocked ? "180px" : "54px",
          width: getWidth(),
          transformOrigin: "right center",
        }}>
        <div className="h-full flex flex-col justify-end overflow-hidden">
          {/* CAROUSEL (Locked Mode) */}
          {isLocked && isAnimationDone && (
            <div className="flex-1 px-3 py-2 mb-1 animate-in fade-in duration-300">
              <div className="h-full relative">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-sm font-bold mb-2 text-white">
                      {slides[currentSlide].title}
                    </h3>
                    {/* Render the entry point card */}
                    <div className="flex justify-center scale-90">
                      {slides[currentSlide].component}
                    </div>
                    <div className="mt-2 text-[10px] text-zinc-400">
                      Entry point {currentSlide + 1}/{slides.length}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Dots */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-white w-4"
                          : "bg-white/30 hover:bg-white/50 w-1.5"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* BOTTOM ROW ICONS */}
          <div className="flex items-center justify-between gap-2 h-[52px]">
            {/* LOCK BUTTON */}
            {(isExpanded || isLocked) && (
              <button
                onClick={toggleLock}
                className="w-12 h-12 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-white transition-all hover:opacity-70 ${
                    isLocked ? "rotate-180" : ""
                  }`}>
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
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
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={star <= (hoveredRating || rating) ? "white" : "none"}
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={star <= (hoveredRating || rating) ? "text-white" : "text-white/40"}>
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    </button>
                  ))}
                </div>
              )}

              {/* LIKE BUTTON */}
              {isAnimationDone && (isExpanded || isLocked) && !isLiked && (
                <button
                  onClick={handleLike}
                  className="w-12 h-12 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:opacity-70">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </button>
              )}

              {/* INFO ICON */}
              <button className="w-12 h-12 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:opacity-70">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};