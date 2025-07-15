/** @type {import('next').NextConfig} */

import rewrites from "./next-config/rewrites.mjs";
import redirects from "./next-config/redirects.mjs";

const i18n = {
  defaultLocale: "pl",
  locales: ["en", "de", "pl"],
  localeDetection: true,
};

const nextConfig = {
  i18n,
  async rewrites() {
    return rewrites;
  },

  async redirects() {
    return redirects;
  },
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
