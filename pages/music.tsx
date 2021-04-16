import { GetStaticProps } from 'next';
import { PageProps } from '@components/types';
import Layout from '@components/Layout';
import MusicContent from '@components/music/music';

const Music = ({ title, description, keywords }: PageProps) => {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <MusicContent/>
    </Layout>
  );
};

export default Music;

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  return {
    props: {
      title: `Music ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
};
