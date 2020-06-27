import matter from 'gray-matter';
import getRandomItemFrom from '@utils/getRandomItem';

const defaultColors = [
  '#fc5c65', '#fd9644', '#f7b731',
  '#26de81', '#2bcbba', '#45aaf2',
  '#4b7bec', '#a55eea', '#778ca3'
];

const getPosts = (context) => {
  const keys = context.keys();
  const values = keys.map(context);
  const data = keys.map((key, index) => {
    let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3);
    const value = values[index];
    const document = matter(value.default);
    return {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
      color: getRandomItemFrom(defaultColors),
    };
  });

  return data.sort((a, b) =>
    (b.frontmatter.date || '').localeCompare((a.frontmatter.date || ''))
  );
};

export default getPosts;
