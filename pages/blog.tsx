import { GetStaticProps } from 'next';
import { PageProps } from '@components/types';
import Layout from '@components/Layout';
import PostsList, { PostProps } from '@components/blog/posts/post-list';
import getPosts from '@utils/getPosts';
import { formium } from '@lib/formium';

interface BlogProps extends PageProps {
  posts: PostProps[];
  form?: Object;
}

const Blog = ({ posts, form, title, description, keywords }: BlogProps) => {
  return (
    <>
      <Layout
        title={title}
        description={description}
        keywords={keywords}
        page={1}
      >
        <PostsList posts={posts} form={form} />
      </Layout>
    </>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../siteconfig.json');

  // noinspection JSUnresolvedVariable
  const posts = ((context) => {
    return getPosts(context);
    // @ts-ignore
  })(require.context('../posts', true, /\.md$/));

  const form = await formium
    .getFormBySlug(process.env.FORMIUM_BLOG_FORM_SLUG || '')
    .catch(() => ({ id: '' }));

  return {
    props: {
      posts,
      form,
      title: `Blog ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
};
