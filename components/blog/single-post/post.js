import Image from 'next/image';
import { useContext } from 'react';
import { usePalette } from 'react-palette';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import hexToRGB from '@utils/hexToRgb';
import getColorFromData from '@utils/getColorFromData';
import ThemeContext from '@components/theme/ThemeContext';
import styles from './post.module.css';

const Post = ({ frontmatter, mdBody }) => {
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
        {frontmatter.hero && (
          <Image
            unsized
            loading={'lazy'}
            className={styles.hero}
            src={frontmatter.hero || ''} alt={frontmatter.title}/>
        )}
        <ReactMarkdown source={mdBody} escapeHtml={false} className={styles.content}/>
      </article>
    </div>
  );
};

export default Post;
