const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone: false,
  },

  images: {
    unoptimized: true,
    domains: ["www.youtube.com"],
  },
};

module.exports = nextConfig;
