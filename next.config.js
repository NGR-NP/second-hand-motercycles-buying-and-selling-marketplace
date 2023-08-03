/** @type {import('next').NextConfig} */
const nextConfig = {
  // trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "icon-library.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mcn-images.bauersecure.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
