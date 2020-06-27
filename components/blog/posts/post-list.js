import styles from './post-list.module.css';
import Link from 'next/link';

const PostList = ({ posts }) => {
  if ((posts || []).length <= 0) return (<></>);

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
        posts.map((post) => {
          console.table(post);
          return (
            <li key={post.slug}>
              {post.frontmatter.date}: {` `}
              <Link href={{ pathname: `/post/${post.slug}` }}>
                <a>{post?.frontmatter?.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostList;
