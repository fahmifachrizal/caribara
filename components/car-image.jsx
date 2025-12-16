"use client"
// components/car-image.jsx
import Image from "next/image"
import { useState } from "react"

/**
 * CarImage component handles car images with transparent margins
 * by allowing you to set either width or height, and auto-calculating the other
 *
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @param {number} width - Desired width (optional if height is provided)
 * @param {number} height - Desired height (optional if width is provided)
 * @param {number} aspectRatio - Default aspect ratio (default: 16/9)
 * @param {string} className - Additional CSS classes
 * @param {boolean} priority - Image loading priority
 * @param {string} objectFit - CSS object-fit value (default: "contain")
 */
function CarImage({
  src,
  alt,
  width,
  height,
  aspectRatio = 16 / 9,
  className = "",
  priority = false,
  objectFit = "contain",
  ...props
}) {
  const [isLoading, setIsLoading] = useState(true)

  const calculatedWidth =
    width || (height ? Math.round(height * aspectRatio) : 400)
  const calculatedHeight =
    height || (width ? Math.round(width / aspectRatio) : 225)

  return (
    <div
      className={`relative ${className}`}
      style={{ width: calculatedWidth, height: calculatedHeight }}>
      {isLoading && (
        <div className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 animate-pulse rounded-lg" />
      )}
      <Image
        src={src}
        alt={alt}
        width={calculatedWidth}
        height={calculatedHeight}
        className={`rounded-lg transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        style={{
          objectFit,
          width: "100%",
          height: "100%",
        }}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  )
}

export { CarImage }