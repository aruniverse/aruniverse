const nextConfig = {
  reactStrictMode: true,
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

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX({
  ...nextConfig,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});
