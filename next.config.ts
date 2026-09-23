import type { NextConfig } from "next";
import nextConfig from "@majapisoftwares/next/next.config.js";
import { merge } from "lodash-es";

const browserOnlyAliases = [
  "mongodb",
  "crypto",
  "jsonwebtoken",
  "bson",
  "nodemailer",
  "mailgen",
  "fs",
  "sharp",
  "papr",
  "mongodb-memory-server",
  "@adiwajshing/baileys",
  "@hapi/boom",
  "minio",
  "openai",
  "mime-types",
  "@react-email",
  "open-graph-scraper",
  "playwright-core",
];

const config: NextConfig = {
  webpack(webpackConfig, { isServer }) {
    if (!isServer) {
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        ...Object.fromEntries(
          browserOnlyAliases.map((moduleName) => [moduleName, false]),
        ),
      };
    }

    return webpackConfig;
  },
  turbopack: {
    resolveAlias: Object.fromEntries(
      browserOnlyAliases.map((moduleName) => [
        moduleName,
        { browser: "./src/shims/empty.ts" },
      ]),
    ),
  },
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

// Keep the shared config while using the local webpack hook above for builds
// that explicitly opt into webpack.
const { webpack: _sharedWebpack, ...baseConfig } = nextConfig;
const mergedConfig = merge({}, baseConfig, config);

export default mergedConfig;
