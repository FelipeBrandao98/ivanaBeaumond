/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.BACKEND_PROTOCOL,
        hostname: process.env.BACKEND_HOSTNAME,
        port: process.env.PORT || '3000',
      },
    ],
  },
}

module.exports = nextConfig
