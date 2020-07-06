import Layout from '@components/Layout';
import UnderConstruction from '@components/global/construction/construction';

const Changes = ({ title, description, keywords, ...props }) => {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <UnderConstruction/>
    </Layout>
  );
};

export default Changes;

export const getStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  return {
    props: {
      title: `Changes ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
};
