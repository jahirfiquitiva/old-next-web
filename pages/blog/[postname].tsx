import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import getSlugs from '@utils/getSlugs';
import Layout from '@components/Layout';
import Post from '@components/blog/single-post/post';
import { FrontmatterProps } from '@components/blog/posts/post-list';
import { getPostDescription, getTableOfContents } from '@utils/getPosts';
import { MetaTagsProps } from '@components/MetaTags';
import { unique } from '@utils/unique';

interface BlogPostProps extends MetaTagsProps {
  frontmatter: FrontmatterProps,
  markdownBody: string,
}

const BlogPost = ({
  frontmatter, markdownBody, title, description, keywords, image, exactUrl,
}: BlogPostProps) => {
  if (!frontmatter) return <></>;
  return (<Layout
    title={`${frontmatter.title} | Blog ~ ${title}`}
    description={frontmatter.description || description}
    keywords={keywords}
    image={image}
    page={frontmatter.page || 1}
    siteType={'blog'}
    exactUrl={exactUrl}
    metaImageStyle={'summary_large_image'}
  >
    <Post frontmatter={frontmatter} mdBody={markdownBody}/>
  </Layout>);
};

export default BlogPost;

export const getStaticProps: GetStaticProps = async ({ ...ctx }) => {
  // @ts-ignore
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import('../../siteconfig.json');
  const data = matter(content.default);

  const { hero } = data.data;
  const actualHero = hero
                     ? hero.startsWith('http')
                       ? hero
                       : `/assets/images/posts/${hero}`
                     : '';
  const frontmatter = {
    ...data.data,
    hero: actualHero,
    tableOfContents: getTableOfContents(data.content),
    readingTime: readingTime(data.content),
  };

  // @ts-ignore
  const keywords = (frontmatter?.keywords || '').split('|')
    ?.map((it: string) => it.trim())
    ?.filter((it: string) => it.length > 0);
  const uniqueKeywords = unique([...keywords, ...(config.default.keywords)]);

  // @ts-ignore
  const newDescription = getPostDescription(frontmatter?.description,
    data?.content, config.default.description);

  return {
    props: {
      title: config.default.title,
      description: newDescription,
      keywords: uniqueKeywords,
      image: actualHero.startsWith('/')
             ? `https://jahir.dev${actualHero}`
             : actualHero,
      exactUrl: `https://jahir.dev/blog/${postname}`,
      // @ts-ignore
      link: frontmatter.link || '',
      frontmatter,
      markdownBody: data.content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogSlugs = ((context) => {
    return getSlugs(context);
    // @ts-ignore
  })(require.context('../../posts', true, /\.md$/));

  const paths = blogSlugs.map((slug: string) => `/blog/${slug}`);

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  };
};
