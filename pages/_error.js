import Layout from '@components/Layout';
import Error from '@components/global/error/error';

const ErrorPage = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title} description={description}>
      <Error/>
    </Layout>
  );
};

export default ErrorPage;

export const getStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
};
