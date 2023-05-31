/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  experimental: { appDir: false },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}