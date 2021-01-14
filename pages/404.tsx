import { PageProps } from '@components/types';
import Layout from '@components/Layout';
import Error from '@components/global/error/error';
import { GetStaticProps } from 'next';

const FourHundredFour = ({ title, description, keywords }: PageProps) => {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <Error isFourHundredFour/>
    </Layout>
  );
};

export default FourHundredFour;

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  return {
    props: {
      title: `Page not found! ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
};
