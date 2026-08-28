import type { NextConfig } from "next";

const siteBasePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: siteBasePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      new URL("https://assets.dreamlabs.co.kr/brand/worker-host/**"),
      new URL("https://assets.dreamlabs.co.kr/agents/dreamlabs-worker/**"),
    ],
  },
  basePath: siteBasePath,
};

export default nextConfig;
