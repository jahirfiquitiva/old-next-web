import matter from 'gray-matter';
import getSlugs from '@utils/getSlugs';
import Layout from '@components/Layout';
import Post from '@components/blog/single-post/post';
import GoTo from '@components/global/goto/goto';

const BlogPost = ({ frontmatter, markdownBody, title, description, keywords, image, link }) => {
  if (!frontmatter) return <></>;
  if (link && link.length > 0) {
    return (<GoTo title={title} url={link}/>);
  }
  return (<Layout
    title={`${frontmatter.title} | Blog ~ ${title}`}
    description={frontmatter.description || description}
    keywords={keywords} image={image}
    page={frontmatter.page || 1}>
    <Post frontmatter={frontmatter} mdBody={markdownBody}/>
  </Layout>);
};

export default BlogPost;

export const getStaticProps = async ({ ...ctx }) => {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import('../../siteconfig.json');
  const data = matter(content.default);

  const { hero } = data.data;
  const actualHero = hero ? hero.startsWith('http') ? hero : `/assets/images/posts/${hero}` : '';
  const frontmatter = { ...data.data, hero: actualHero };

  return {
    props: {
      title: config.default.title,
      description: config.default.description,
      keywords: config.default.keywords,
      image: actualHero.startsWith('/') ? `https://jahir.dev${actualHero}` : actualHero,
      link: frontmatter.link || '',
      frontmatter,
      markdownBody: data.content,
    },
  };
};

export const getStaticPaths = async () => {
  const blogSlugs = ((context) => {
    return getSlugs(context);
  })(require.context('../../posts', true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/blog/${slug}`);

  return {
    paths, // An array of path names, and any params
    fallback: 'blocking', // so that 404s properly appear if something's not matching
  };
};
