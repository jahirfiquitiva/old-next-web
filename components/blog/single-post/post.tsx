import { Children, createElement, useContext } from 'react';
import { usePalette } from 'react-palette';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import hexToRGB from '@utils/hexToRgb';
import getColorFromData from '@utils/getColorFromData';
import UnsizedImage from '@components/global/image/UnsizedImage';
import ThemeContext from '@components/theme/ThemeContext';
import styles from './post.module.css';
import { FrontmatterProps } from '@components/blog/posts/post-list';
import { formatDate } from '@utils/formatDate';

interface PostProps {
  frontmatter: FrontmatterProps,
  mdBody: string
}

const flatten = (text: string, child: any): any => {
  return typeof child === 'string'
         ? text + child
         : Children.toArray(child.props.children).reduce(flatten, text);
};

const HeadingRenderer = (props: any) => {
  const children = Children.toArray(props.children);
  const text = children.reduce(flatten, '');
  const slug = text.toLowerCase().replace(/\W/g, '-');
  return createElement(`h${props.level}`, { id: slug }, props.children);
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
            source={frontmatter.tableOfContents ?? ''} escapeHtml={false}
            className={styles.content}/>
        </div>)}
        <ReactMarkdown
          source={mdBody} escapeHtml={false}
          className={styles.content}
          renderers={{ heading: HeadingRenderer }}/>
      </article>
    </div>
  );
};

export default Post;
