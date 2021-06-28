import matter from 'gray-matter';
import readingTime from 'reading-time';
import removeMd from 'remove-markdown';
import getRandomItemFrom from '@utils/getRandomItem';
import { FrontmatterProps, PostProps } from '@components/blog/posts/post-list';

const defaultColors = [
  '#fc5c65', '#fd9644', '#f7b731',
  '#26de81', '#2bcbba', '#45aaf2',
  '#4b7bec', '#a55eea', '#778ca3',
];

export const getPostDescription = (description?: string, content?: string,
  defaultDescription?: string): string => {
  if (description && ((description?.length || 0) > 0)) return description;
  if (!content || ((content?.length || 0) <= 0)) {
    return defaultDescription || '';
  }
  const plainText = removeMd(content);
  const noNewLines = plainText.replace(/[\r\n]+/gm, '  ');
  const splitContent = noNewLines.substring(0, 140);
  return splitContent.length > 0
         ? `${splitContent}...`
         : defaultDescription || '';
};

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
  const tableOfContents = lines
    .map((line) => {
      let title = line.substring(mainTitle.length).trim();
      let indent = '';
      if (!title.startsWith('#')) {
        titleIndex += 1;
        indent = `${titleIndex}. `;
      } else {
        const split = title.split('#');
        title = split.pop()?.trim() ?? '';
        indent = `   ${split.join('  ')}* `;
      }
      if (!title || !title.length) return null;
      const slug = title.toLowerCase().replace(/\W/g, '-');
      return `${indent}[${title}](#${slug})`;
    })
    .filter((it) => it && it.length > 0);
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
    const calculatedTime = readingTime(document.content);
    const frontmatter = {
      ...document.data,
      hero: actualHero,
      readingTime: calculatedTime?.time > 0 ? calculatedTime : { text: '' },
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
