import { GetStaticProps } from 'next';
import { PageProps } from '@components/types';
import Layout from '@components/Layout';
import MusicContent from '@components/music/music';

const Changes = ({ title, description, keywords }: PageProps) => {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      {/* <UnderConstruction/> */}
      <MusicContent/>
    </Layout>
  );
};

export default Changes;

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
