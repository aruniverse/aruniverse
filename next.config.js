const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    urlImports: [
      'https://cdn.skypack.dev',
      'https://jspm.dev',
      'https://cdn.jsdelivr.net',
      'https://esm.sh',
    ],
  },
  images: {
    domains: ['pbs.twimg.com', 'media-exp1.licdn.com'],
  },
};

const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  ...nextConfig,
});
