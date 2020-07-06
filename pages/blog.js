import Layout from '@components/Layout';
import PostList from '@components/blog/posts/post-list';
import getPosts from '@utils/getPosts';

const Blog = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={title} description={description} page={1}>
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
      title: configData.default.title,
      description: configData.default.description,
    },
  };
};
