// components/car-image.jsx
import Image from "next/image"

/**
 * SSR-Ready CarImage component handles car images with transparent margins
 * Works on both server and client side
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
      style={{ width: calculatedWidth, height: calculatedHeight }}>
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
        }}
        priority={priority}
        {...props}
      />
    </div>
  )
}