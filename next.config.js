/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    outputStandalone: true,
  },

  images: {
    domains: ["www.youtube.com"],
  },
};

module.exports = nextConfig;
