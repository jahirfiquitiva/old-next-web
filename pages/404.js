import Layout from '@components/Layout';
import Error from '@components/global/error/error';

const FourHundredFour = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title} description={description}>
      <Error isFourHundredFour/>
    </Layout>
  );
};

export default FourHundredFour;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
