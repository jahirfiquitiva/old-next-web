import { PageProps } from '@components/types';
import Layout from '@components/Layout';
import PostsList, { PostProps } from '@components/blog/posts/post-list';
import getPosts from '@utils/getPosts';

interface BlogProps extends PageProps {
  posts: PostProps[]
}

const Blog = ({ posts, title, description, keywords }: BlogProps) => {
  return (
    <>
      <Layout title={title} description={description} keywords={keywords}
              page={1}>
        <PostsList posts={posts}/>
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
    // @ts-ignore
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
