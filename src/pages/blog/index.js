import React from 'react';
import Head from 'next/head';
import getBlogPosts from '../../utils/get-posts';
import Post from '../../components/post';

// eslint-disable-next-line
export async function getStaticProps() {
  const posts = await getBlogPosts().catch(() => []);
  return { props: { posts } };
}

const IndexPage = ({ posts }) => (
  <main>
    <Head>
      <title>Home page</title>
    </Head>

    <h1>List of posts</h1>

    <section>
      {posts.map((post) => (
        <Post {...post} key={post.id}/>
      ))}
    </section>
  </main>
);

export default IndexPage;
