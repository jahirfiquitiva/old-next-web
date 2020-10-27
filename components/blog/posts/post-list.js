import { useContext } from 'react';
import { usePalette } from 'react-palette';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';
import hexToRGB from '@utils/hexToRgb';
import getColorFromData from '@utils/getColorFromData';
import ThemeContext from '@components/theme/ThemeContext';
import ExtLink from '@components/global/ext-link/ext-link';
import styles from './post-list.module.css';

const PostList = ({ posts }) => {
  const { isDark } = useContext(ThemeContext);
  if ((posts || []).length <= 0) {
    return (
      <div>
        <p>No posts found yet!</p>
      </div>
    );
  }

  const getDate = (preDate) => {
    const dateData = preDate.split('-');
    return {
      year: dateData[0],
      month: dateData[1],
      day: dateData[2]
    };
  };

  const renderPostHero = (url, color) => {
    return (
      <div
        className={styles.hero}
        style={{
          backgroundImage: `url(${url})`,
          backgroundColor: color || '#000'
        }}>
        {(!url || url.length <= 0)
          ? (<Icon path={mdiPencil} size={2} color={'rgba(0,0,0,0.5)'}/>)
          : (<></>)}
      </div>
    );
  };

  const getColorStyle = (color) => {
    if (!color) return {};
    return {
      '--shadow-color': hexToRGB(color, 0.15),
      '--border-color': hexToRGB(color, 0.2),
      '--hl-color': color,
    };
  };

  const getHeroUrl = (post) => {
    if (post && post.frontmatter) {
      const { hero } = post.frontmatter;
      return hero && hero.length > 0
        ? hero.startsWith('..') ? null : hero
        : null;
    }
    return null;
  };

  const renderPostLinkContent = (post, heroUrl, color) => {
    return (<div className={styles.details}>
      {renderPostHero(heroUrl, color)}
      <div className={styles.info}>
        <h5>{post.frontmatter.title}</h5>
        <p>{post.frontmatter.date}</p>
        <p>{post.frontmatter.description || ''}</p>
      </div>
    </div>);
  };

  const renderPostLink = (post, heroUrl, color, rightLink) => {
    const extras = rightLink && rightLink.length > 0
      ? {
        key: post.slug,
        rel: 'noopener noreferrer',
        href: rightLink,
        target: '_blank'
      }
      : {};
    return (<a
      title={post.frontmatter.title} aria-label={post.frontmatter.title}
      className={styles.card} style={getColorStyle(color)} {...extras}>
      {renderPostLinkContent(post, heroUrl, color)}
    </a>);
  };

  return (
    <div className={styles.blog}>
      <h3 className={styles.title}>📝 &nbsp;&nbsp;Blog</h3>
      <div className={styles.posts}>
        {(posts || []).map((post) => {
          const heroUrl = getHeroUrl(post);
          const { data } = heroUrl ? usePalette(heroUrl) : { data: null };
          const color = getColorFromData(data, isDark) || post.frontmatter.color || post.color;
          const rightLink = post.frontmatter.link && post.frontmatter.link.length > 0
            ? post.frontmatter.link : `/blog/${post.slug}`;
          if (rightLink.startsWith('/')) {
            return (<Link href={rightLink} key={post.slug}>
              {renderPostLink(post, heroUrl, color)}
            </Link>);
          }
          return renderPostLink(post, heroUrl, color, rightLink);
        })}
      </div>
      <p>I&apos;m honestly not the kind of person who blogs much, but I would like to do it more
        frequently.</p>
      <p>If you have ideas or topics you would like me to blog about, I&apos;d really appreciate if
        you <Link href={'/contact'}><a>share them with me</a></Link>.</p>
      <p>You can also find other posts by me on&nbsp;
        <ExtLink label={'dev.to'} to={'https://dev.to/jahirfiquitiva'}/>&nbsp;and&nbsp;
        <ExtLink label={'medium'} to={'https://medium.com/@jahirfiquitiva'}/></p>
    </div>
  );
};

export default PostList;
