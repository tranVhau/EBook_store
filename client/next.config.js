/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
