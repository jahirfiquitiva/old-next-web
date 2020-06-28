import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import styles from './post.module.css';
import { usePalette } from 'react-palette';
import hexToRGB from '@utils/hexToRgb';

const Post = ({ frontmatter, mdBody }) => {
  const { data: colorData } = frontmatter.hero ? usePalette(frontmatter.hero || '') :
    { data: null };

  const color = hexToRGB(colorData ? colorData.vibrant || '#fff' : frontmatter.color || '#fff', .4);

  return (
    <div className={styles.post}>
      <div className="back">
        <Link href="/blog">
          <a>←{' '}Back to post list</a>
        </Link>
      </div>
      <article>
        <h1 style={{
          textShadow: `3px 3px 0 ${color}`
        }}>
          {frontmatter.title}
        </h1>
        {frontmatter.hero && (
          <img
            src={frontmatter.hero}
            className="hero"
            alt={frontmatter.title}
          />
        )}
        <div className={styles.content}>
          <ReactMarkdown source={mdBody} escapeHtml={false}/>
        </div>
      </article>
    </div>
  );
};

export default Post;
