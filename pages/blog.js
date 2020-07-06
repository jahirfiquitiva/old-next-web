import Layout from '@components/Layout';
import PostList from '@components/blog/posts/post-list';
import getPosts from '@utils/getPosts';

const Blog = ({ posts, title, description, keywords, ...props }) => {
  return (
    <>
      <Layout title={title} description={description} keywords={keywords} page={1}>
        <PostList posts={posts}/>
      </Layout>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const configData = await import('../siteconfig.json');

  // noinspection JSUnresolvedVariable
  const posts = ((context) => {
    return getPosts(context);
  })(require.context('../posts', true, /\.md$/));

  return {
    props: {
      posts,
      title: `Blog ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
};
