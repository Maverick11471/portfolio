import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.aceternity.com"], // ✅ 여기에 외부 도메인 추가
  },
};

export default nextConfig;
