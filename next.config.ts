import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Clean entry URL for the standalone B.A.N.D.S. site (static files live in /public/ai).
  // The site is fully isolated — no links to/from the main photo site.
  async rewrites() {
    return [
      { source: "/ai", destination: "/ai/index.html" },
      { source: "/ai/", destination: "/ai/index.html" },
    ];
  },
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/portfolio?tab=branded",
        permanent: true,
      },
      {
        source: "/photography",
        destination: "/portfolio?tab=photo",
        permanent: true,
      },
      {
        source: "/photography/gallery",
        destination: "/portfolio?tab=photo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
