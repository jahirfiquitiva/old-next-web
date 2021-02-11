const nextTranslate = require('next-translate');
const { buildBlogPostsMatters } = require('./scripts/build-blog-posts-matters');

const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

const buildExternalBlogPostsRedirects = async () => {
  const matters = await buildBlogPostsMatters(true)
    .catch(() => []);
  return matters.map((it) => {
    return buildRedirect(`/blog/${it.slug}`, it.link);
  });
};

// noinspection JSValidateTypes
module.exports = nextTranslate({
  webpack(config, {
    isServer,
    dev,
  }) {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      });
    }

    return config;
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    const postsRedirects = await buildExternalBlogPostsRedirects()
      .catch(() => []);
    return [
      ...postsRedirects,
      buildRedirect('/dashbud', 'https://dashbud.dev'),
      buildRedirect('/dashsetup', 'https://dashbud.dev'),
      buildRedirect('/links', '/'),
      buildRedirect('/resume', '/share/Jahir-Fiquitiva-Resume.pdf'),
      buildRedirect('/support', '/donate'),
      buildRedirect('/thanks', '/donate#thanks'),
      buildRedirect('/uses', '/blog/uses'),
    ];
  },
});
