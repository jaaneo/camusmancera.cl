import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    const maintenanceMode = process.env.MAINTENANCE_MODE === "false";

    if (maintenanceMode) {
      return [
        {
          source: "/",
          destination: "/maintenance",
          permanent: false,
        },
      ];
    }

    return [];
  },
};

export default nextConfig;
