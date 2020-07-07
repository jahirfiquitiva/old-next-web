import Layout from '@components/Layout';
import ChangesContent from '@components/changes/changes';

const Changes = ({ title, description, keywords, ...props }) => {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      {/* <UnderConstruction/> */}
      <ChangesContent/>
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
