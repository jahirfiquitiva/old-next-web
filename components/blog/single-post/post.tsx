import { useContext } from 'react';
import Link from 'next/link';
import { usePalette } from 'react-palette';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import hexToRGB from '@utils/hexToRgb';
import getColorFromData from '@utils/getColorFromData';
import { formatDate } from '@utils/formatDate';
import UnsizedImage from '@components/global/image/UnsizedImage';
import ThemeContext from '@components/theme/ThemeContext';
import { markdownComponents } from '@components/blog/single-post/markdown-components';
import { FrontmatterProps } from '@components/blog/posts/post-list';
import styles from './post.module.css';

interface PostProps {
  frontmatter: FrontmatterProps,
  mdBody: string
}

const getChildType = (child: any): string | null | undefined => {
  try {
    const { type } = child;
    return type?.name || type;
  } catch (e) {
    return null;
  }
};

const components: any = {
  ...markdownComponents,
  // @ts-ignore
  // eslint-disable-next-line react/display-name
  p({ node, className, ...props }) {
    const classNames = [
      getChildType(props.children?.[0]) === 'em'
      ? styles.possiblecodetitle
      : '',
      getChildType(props.children?.[2]) === 'img'
      ? styles.possibleimagetitle
      : '',
    ];

    return <p className={classNames.join(' ')} {...props}/>;
  },
};

const Post = ({ frontmatter, mdBody }: PostProps) => {
  const { isDark } = useContext(ThemeContext);

  const { data: colorData } = frontmatter.hero
                              ? usePalette(frontmatter.hero || '')
                              : { data: null };

  const color = hexToRGB(getColorFromData(colorData, isDark) || '#fff', 0.4);

  return (
    <div className={styles.post}>
      <div className={'back'}>
        <Link href={'/blog'}>
          <a>←{' '}Back to post list</a>
        </Link>
      </div>
      <article>
        <h1 style={{
          textShadow: `var(--text-shadow-size) var(--text-shadow-size) 0 ${color}`,
        }}>
          {frontmatter.title}
        </h1>
        <p className={styles.date}>
          {formatDate(new Date(frontmatter.date))}
          {((frontmatter.readingTime?.text?.length || 0) > 0) && (<>
            {' • '}{frontmatter.readingTime?.text}
          </>)}
        </p>
        {frontmatter.hero && (
          <UnsizedImage
            className={styles.hero}
            src={frontmatter.hero || ''}
            alt={frontmatter.title}/>
        )}
        {((frontmatter.tableOfContents ?? '').length > 0)
        && (<div className={styles.toc}>
          <p className={styles.title}>Table of Contents:</p>
          <ReactMarkdown
            className={styles.content}>
            {frontmatter.tableOfContents ?? ''}
          </ReactMarkdown>
        </div>)}
        <ReactMarkdown
          remarkPlugins={[gfm]}
          className={styles.content}
          components={components}
          linkTarget={'_blank'}>
          {mdBody}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default Post;
