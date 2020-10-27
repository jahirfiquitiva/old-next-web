const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const readFileContent = (dirname, filename) => new Promise((resolve, reject) => {
  if (!filename || !filename.endsWith('md')) return null;
  fs.readFile(path.join(dirname, filename), 'utf-8', (err, content) => {
    if (err) {
      reject(err);
    } else {
      resolve({
        filename,
        content,
      });
    }
  });
});

const getFilesInDir = (dirname) => new Promise((resolve, reject) => {
  fs.readdir(dirname, (err, filenames) => {
    if (err) {
      reject(err);
    } else {
      resolve(filenames);
    }
  });
});

const readFiles = async (dirname) => {
  const files = await getFilesInDir(dirname)
    .catch(() => []);
  return Promise.all(files.map((it) => readFileContent(dirname, it)))
    .catch(() => []);
};

const transformPostToMatter = (post) => {
  const slug = post.filename.replace(/^.*[\\/]/, '')
    .slice(0, -3);
  const matterData = matter(post.content).data;
  const { link } = matterData;
  const isInProgress = matterData['in-progress'] === true;
  if (isInProgress) return null;
  return {
    slug,
    link,
  };
};

const buildRedirect = (source, destination, permanent = true) => {
  return {
    source,
    destination,
    permanent,
  };
};

const buildExternalBlogPostsRedirects = async () => {
  const filesContents = await readFiles('./posts/');
  const matters = filesContents
    .filter((it) => it)
    .map(transformPostToMatter)
    .filter((it) => it && it.link);
  return matters.map((it) => {
    return buildRedirect(`/blog/${it.slug}`, it.link);
  });
};

module.exports = {
  webpack(config) {
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
};
