import matter from 'gray-matter';
import getRandomItemFrom from '@utils/getRandomItem';
import { FrontmatterProps, PostProps } from '@components/blog/posts/post-list';

const defaultColors = [
  '#fc5c65', '#fd9644', '#f7b731',
  '#26de81', '#2bcbba', '#45aaf2',
  '#4b7bec', '#a55eea', '#778ca3',
];

export const getTableOfContents = (body?: string): string | null => {
  if (!body || !body.length) return null;
  const lines = body.split(/\r\n|\n\r|\n|\r/)
    .filter((it) => it.trim().startsWith('#'));
  let mainTitle = '';
  for (const line of lines) {
    const titleHashtags = line.trim().substring(0, line.lastIndexOf('#') + 1);
    if (titleHashtags.length < mainTitle.length || mainTitle.length <= 0) {
      mainTitle = titleHashtags;
    }
  }
  let titleIndex = 0;
  const tableOfContents = lines.map((line) => line.substring(mainTitle.length))
    .map((line) => {
      let newLine = line;
      if (newLine.startsWith('#')) {
        while (newLine.startsWith('#')) {
          newLine.replace('#', '\t');
        }
        return newLine;
      }
      newLine = newLine.trim();
      titleIndex += 1;
      const slug = newLine.toLowerCase().replace(/\W/g, '-');
      return `${titleIndex}. [${newLine}](#${slug})`;
    });
  return tableOfContents.join('\n');
};

const getPosts = (context: any) => {
  const keys = context.keys();
  const values = keys.map(context);
  const data = keys.map((key: string, index: number) => {
    const slug = key.replace(/^.*[\\/]/, '').slice(0, -3);
    const value = values[index];
    const document = matter(value.default);
    const { hero } = document.data;
    const actualHero: string = hero
                               ? hero.startsWith('http')
                                 ? hero
                                 : `/assets/images/posts/${hero}`
                               : '';
    const frontmatter = {
      ...document.data,
      hero: actualHero,
      tableOfContents: getTableOfContents(document.content),
    };
    const post: PostProps = {
      slug,
      // @ts-ignore
      frontmatter,
      markdownBody: document.content,
      color: getRandomItemFrom(defaultColors),
    };
    // @ts-ignore
    const isInProgress = post.frontmatter['in-progress'] === true;
    if (isInProgress) return null;
    return post;
  });

  return (data || []).filter((it: string) => it)
    .sort(
      (a: { frontmatter: FrontmatterProps },
        b: { frontmatter: FrontmatterProps }) =>
        (b.frontmatter.date || '').localeCompare((a.frontmatter.date || ''))
    );
};

export default getPosts;
