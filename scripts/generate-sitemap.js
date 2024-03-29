const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');
const { buildBlogPostsMatters } = require('./build-blog-posts-matters');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'pages/*.js',
    'pages/*.jsx',
    'pages/*.ts',
    'pages/*.tsx',
    '!pages/_*.js',
    '!pages/_*.jsx',
    '!pages/_*.ts',
    '!pages/_*.tsx',
    '!pages/api',
  ]);

  const actualRoutes = [];

  pages.forEach((page) => {
    const path = page
      .replace('pages', '')
      .replace('data', '')
      .replace('posts', '/blog')
      .replace('.jsx', '')
      .replace('.tsx', '')
      .replace('.mdx', '')
      .replace('.js', '')
      .replace('.ts', '')
      .replace('.md', '');
    path === '/index' ? actualRoutes.splice(0, 0, '/') : actualRoutes.push(path);
  });
  actualRoutes.push('/uses');

  await buildBlogPostsMatters()
    .then((matters) => {
      matters.forEach((matter) => {
        actualRoutes.push(`/blog/${matter.slug}`);
      });
    })
    .catch();

  const now = (new Date()).toISOString();
  const lastmod = `${now.substring(0, now.lastIndexOf('.'))}+00:00`;
  const xmlRoutes = actualRoutes.map((route) => {
      const slashesCount = (route.match(/\//g) || []).length;
      let priority = 1 - (0.2 * slashesCount);
      if (route.length <= 1 || priority > 1.0) priority = 1.0;
      if (priority < 0.2) priority = 0.2;
      return `<url>
  <loc>${`https://jahir.dev${route}`}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>${priority}</priority>
</url>`;
    })
    .join('\n');

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${xmlRoutes}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted);
})();
