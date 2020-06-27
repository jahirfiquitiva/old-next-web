import styles from './post-list.module.css';
import Link from 'next/link';

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

  const renderPostHero = (post) => {
    let heroUrl = '';
    if (post && post.frontmatter) {
      heroUrl = post.frontmatter.hero || '';
    }
    return (
      <div className={styles.hero} style={{ backgroundImage: `url(${heroUrl})` }}/>
    );
  };

  return (
    <div className={styles.blog}>
      <h3 className={styles.title}>📝 &nbsp;&nbsp;Blog</h3>
      <div className={styles.posts}>
        {(posts || []).map((post) => {
          return (
            <a href={`/blog/${post.slug}`} className={styles.card} key={post.slug}>
              {renderPostHero(post)}
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
