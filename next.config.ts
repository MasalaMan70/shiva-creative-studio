import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
