import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Workaround: project path contains spaces, which breaks the default .next build dir
  distDir: "/tmp/azely-next-build",
};

export default nextConfig;
