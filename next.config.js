/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["phpstack-611111-4140859.cloudwaysapps.com"],
  },

  publicRuntimeConfig: {
    // Will be available on both server and client
    reactAppUrl: process.env.REACT_API_URL,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  async headers() {
    return [
      {
        source: "/_next/static/:path*", // Matches any path inside /_next/static/
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/js/js/:path*", // Matches any path inside /js/js/
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
