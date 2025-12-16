/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('https://i.ibb.co.com/**')],
    formats: ['image/webp'],
    unoptimized: false
  },
};

export default nextConfig;
