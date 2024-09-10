// import withPWA from 'next-pwa';
// const isProd = process.env.NODE_ENV === 'production';
// pwa config
// const withPWA = require('next-pwa')({
//   dest: 'public',
//   // disable: !isProd,
// });
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack(config, { dev }) {
    if (dev) {
      config.cache = false;  // Disable Webpack cache in development
    }
    return config;
  },
};

// module.exports = withPWA({
//   // next.js config
//   nextConfig
// });

module.exports = nextConfig;