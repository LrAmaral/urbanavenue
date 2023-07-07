/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['erasedproject.com', 'images.unsplash.com', 'highcompanybr.com'],
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
}

module.exports = nextConfig
