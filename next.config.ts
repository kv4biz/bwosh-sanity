import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARNING !!
    // Ignoring TypeScript errors can lead to unexpected behavior at runtime.
    // Ensure that you handle errors appropriately in your code.
    // !! WARNING !!
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["res.cloudinary.com", "cdn.sanity.io"],
  },
};

export default nextConfig;
