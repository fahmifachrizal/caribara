// components/car-image.jsx
import Image from "next/image"

/**
 * Server-Side CarImage component - No flash, loads immediately
 * Uses unoptimized images to load from external sources without flashing
 */
export function CarImage({
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
  const calculatedWidth =
    width || (height ? Math.round(height * aspectRatio) : 400)
  const calculatedHeight =
    height || (width ? Math.round(width / aspectRatio) : 225)

  return (
    <div
      className={`relative ${className}`}
      style={{ 
        width: calculatedWidth, 
        height: calculatedHeight,
        minHeight: calculatedHeight,
        // Remove white background
        backgroundColor: 'transparent',
      }}>
      <Image
        src={src}
        alt={alt}
        width={calculatedWidth}
        height={calculatedHeight}
        className="rounded-lg"
        style={{
          objectFit,
          width: "100%",
          height: "100%",
          // Smooth image appearance
          opacity: 1,
          transition: 'none',
        }}
        priority={priority}
        // Use unoptimized for external images to prevent flash
        unoptimized={src.startsWith('http')}
        // Remove loading attribute to prevent flash
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
    </div>
  )
}