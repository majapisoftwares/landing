import type { NextConfig } from "next";
import nextConfig from "@majapisoftwares/next/next.config.js";
import { merge } from "lodash-es";

const config: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/file/:path*",
          destination: "/api/file-storage/:path*",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  i18n: {
    locales: ["en-US", "pt-BR"],
    defaultLocale: "en-US",
    domains: [
      {
        domain: "majapi.com",
        defaultLocale: "en-US",
      },
      {
        domain: "majapi.com.br",
        defaultLocale: "pt-BR",
      },
    ],
  },
};

export default merge(nextConfig, config);
