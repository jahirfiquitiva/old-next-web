import Layout from '@components/Layout';
import Error from '@components/global/error/error';

const ErrorPage = ({ title, description, keywords, ...props }) => {
  return (
    <Layout pageTitle={title} description={description} keywords={keywords}>
      <Error/>
    </Layout>
  );
};

export default ErrorPage;

export const getStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  return {
    props: {
      title: `Error! ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
};
