import type { NextConfig } from "next";

const githubPagesBasePath = process.env.GITHUB_ACTIONS === "true"
  ? "/worker-host-web-prototype"
  : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: githubPagesBasePath,
  assetPrefix: githubPagesBasePath,
};

export default nextConfig;
