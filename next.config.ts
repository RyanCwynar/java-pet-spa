import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/java-pet-spa",
  assetPrefix: "/java-pet-spa/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
