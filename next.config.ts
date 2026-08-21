import type { NextConfig } from "next";

const githubPagesBasePath = process.env.GITHUB_ACTIONS === "true"
  ? "/worker-host-web-prototype"
  : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: githubPagesBasePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      new URL("https://assets.dreamlabs.co.kr/brand/worker-host/**"),
      new URL("https://assets.dreamlabs.co.kr/agents/dreamlabs-worker/**"),
    ],
  },
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath,
};

export default nextConfig;
