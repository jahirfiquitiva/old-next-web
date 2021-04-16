const nextTranslate = require('next-translate');
const { buildBlogPostsMatters } = require('./scripts/build-blog-posts-matters');

// https://securityheaders.com
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  child-src *.google.com *.twitter.com *.unsplash.com *.scdn.co;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];

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
    domains: ['images.unsplash.com', 'i.scdn.co', 'spotify.com'],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: securityHeaders,
      },
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
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
      buildRedirect('/blog/post-of-fame', '/donate#thanks'),
      buildRedirect('/uses', '/blog/uses'),
    ];
  },
});
