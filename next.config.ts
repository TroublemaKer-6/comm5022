import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/repo-name", // uncomment and set to your GitHub repo name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
