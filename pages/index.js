import Layout from '@components/Layout';
import PostList from '@components/PostList';
import getPosts from '@utils/getPosts';
import About from '@components/root/about/about';

const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title} description={description} page={0}>
      <About/>
      <hr/>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

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
}
