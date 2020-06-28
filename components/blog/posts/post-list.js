import { usePalette } from 'react-palette';
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';
import hexToRGB from '@utils/hexToRgb';
import styles from './post-list.module.css';

const PostList = ({ posts }) => {
  if ((posts || []).length <= 0) {
    return (
      <div>
        <p>No posts found yet!</p>
      </div>
    );
  }

  const getDate = (preDate) => {
    const dateData = preDate.split('-');
    return { year: dateData[0], month: dateData[1], day: dateData[2] };
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
      '--shadow-color': hexToRGB(color, .15),
      '--border-color': hexToRGB(color, .2),
      '--hl-color': color
    };
  };

  const getColorFromData = (data) => {
    if (!data) return null;
    const { vibrant: color = null } = data;
    return color;
  };

  const getHeroUrl = (post) => {
    if (post && post.frontmatter) {
      const { hero } = post.frontmatter;
      return hero && hero.length > 0 ? hero : null;
    }
    return null;
  };

  return (
    <div className={styles.blog}>
      <h3 className={styles.title}>📝 &nbsp;&nbsp;Blog</h3>
      <div className={styles.posts}>
        {(posts || []).map((post) => {
          const heroUrl = getHeroUrl(post);
          const { data } = heroUrl ? usePalette(heroUrl) : { data: null };
          const color = getColorFromData(data) || post.frontmatter.color || post.color;
          return (
            <a href={`/blog/${post.slug}`} className={styles.card} key={post.slug}
               style={getColorStyle(color)}>
              {renderPostHero(post.frontmatter.hero || '', color)}
              <div className={styles.info}>
                <h5>{post.frontmatter.title}</h5>
                <p>{post.frontmatter.date}</p>
                <p>{post.frontmatter.description || ''}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
