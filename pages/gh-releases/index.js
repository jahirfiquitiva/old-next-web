import Layout from '@components/Layout';
import ReleaseRoot from '@components/releases/root';

const Releases = ({ title, description, keywords, ...props }) => {
  return (
    <Layout pageTitle={title} description={description} keywords={keywords}>
      <ReleaseRoot/>
    </Layout>
  );
};

export default Releases;

export const getStaticProps = async () => {
  const configData = await import('../../siteconfig.json');
  return {
    props: {
      title: `Error! ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
};
