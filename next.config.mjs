/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow external image domains

    remotePatterns: [new URL("https://i.ibb.co.com/**")],
    // Disable image optimization for external images to prevent flash
    unoptimized: false,
    // Preload images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable experimental features for better loading
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}

export default nextConfig
