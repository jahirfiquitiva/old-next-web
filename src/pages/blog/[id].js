import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import getBlogPosts from '../../utils/get-posts';

// eslint-disable-next-line func-style
export async function getStaticPaths() {
  const posts = await getBlogPosts().catch(() => []);
  return {
    paths: posts.map((post) => ({
      params: {
        id: `${post.id}`,
        slug: `${post.slug}`,
      },
    })),
    fallback: false,
  };
}

// eslint-disable-next-line func-style
export async function getStaticProps({ params }) {
  const posts = await getBlogPosts().catch(() => []);
  const filteredPosts = posts.filter((it) => (it.id === params.id || it.slug === params.slug));
  return { props: { post: filteredPosts[0] } };
}

const Post = ({ post }) => {
  if (!post || !post.title) return (<></>);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.date}</p>

      <ReactMarkdown source={post.body || ''}/>

      <Link href={'/'}>
        <a>Go back to home</a>
      </Link>
    </>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
