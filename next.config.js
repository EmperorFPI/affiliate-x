/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeholder.com'], // Add any external image domains you're using
  },
  // You can add more Vercel-specific optimizations here
}

module.exports = nextConfig