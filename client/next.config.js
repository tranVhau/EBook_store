/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
  serverRuntimeConfig: {
    apiUrl: process.env.BACKEND_API_URL,
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

// module.exports = {

// };
