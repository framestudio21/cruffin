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
  images: {
    remotePatterns: [
      {
        // protocol: 'https',
        // hostname: [
        //   'lh3.googleusercontent.com'],
        //   port: '',                    // Optional: specify port if needed
        //   pathname: '/path/to/image/**' // Optional: define path if necessary
        
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // Only the domain, no array
        port: '',
        pathname: '/a/**',  // Path can be added as needed
      },
    ]
  }
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

  // images: {
  //   domains: ['https://lh3.googleusercontent.com/a/ACg8ocL848ce_VmkcuzpCq-qGCmU6F81oM1r5v8Ojo0s47povl2LW_w=s96-c'], // Add the required hostname
  // },