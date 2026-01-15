/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/items",
        destination: "http://localhost:5000/items",
      },
      {
        source: "/api/items/:id",
        destination: "http://localhost:5000/items/:id",
      },
    ];
  },
};

export default nextConfig;
