/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["phpstack-611111-5274251.cloudwaysapps.com"],
  },

  publicRuntimeConfig: {
    // Will be available on both server and client
    reactAppUrl: process.env.REACT_API_URL,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  async headers() {
    return [
      {
        source: "/_next/static/(.*)", // Matches any path inside /_next/static/
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/css/(.*)", // Matches any path inside /_next/static/css/
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
