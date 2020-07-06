import Layout from '@components/Layout';
import Error from '@components/global/error/error';

const FourHundredFour = ({ title, description, keywords, ...props }) => {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <Error isFourHundredFour/>
    </Layout>
  );
};

export default FourHundredFour;

export const getStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  return {
    props: {
      title: `Page not found! ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
};
