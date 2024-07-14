// next.config.mjs

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: [
      'avatars.githubusercontent.com', // GitHub avatars
      'lh3.googleusercontent.com',     // Google user profiles
      'appleid.apple.com',             
     
    ],
  },
};

export default nextConfig;
