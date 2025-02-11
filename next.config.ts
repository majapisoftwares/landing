import type { NextConfig } from "next";
import nextConfig from "@italodeandra/next/next.config.js";
import { merge } from "lodash-es";

const config: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/file/:path*",
          destination: "/api/file-storage/:path*"
        }
      ],
      afterFiles: [],
      fallback: []
    };
  }
};

export default merge(nextConfig, config);
