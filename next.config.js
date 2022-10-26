const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },

  images: {
    unoptimized: true,
    domains: ["www.youtube.com"],
  },
};

module.exports = nextConfig;
