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

// Next.js 16 uses Turbopack by default. The shared config still exposes a
// webpack hook, so omit it after merging and use the equivalent aliases above.
const { webpack: _webpack, ...mergedConfig } = merge({}, nextConfig, config);

export default mergedConfig;
