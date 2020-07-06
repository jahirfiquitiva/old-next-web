import Layout from '@components/Layout';
import Intro from '@components/donate/intro/intro';
import Supporters from '@components/donate/supporters/supporters';

const Donate = ({ title, description, keywords, ...props }) => {
  return (
    <Layout title={title} description={description} keywords={keywords} page={3}>
      <Intro/>
      <hr id={'supporters'}/>
      <Supporters/>
    </Layout>
  );
};

export default Donate;

export const getStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  return {
    props: {
      title: `Donate ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
};
