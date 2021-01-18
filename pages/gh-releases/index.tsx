import { GetStaticProps } from 'next';
import { PageProps } from '@components/types';
import Layout from '@components/Layout';
import ReleaseRoot from '@components/releases/root';

const Releases = ({ title, description, keywords }: PageProps) => {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <ReleaseRoot/>
    </Layout>
  );
};

export default Releases;

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../../siteconfig.json');
  return {
    props: {
      title: `Error! ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
};
