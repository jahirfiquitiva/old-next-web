import { GetStaticProps } from 'next';
import Layout from '@components/Layout';
import Error from '@components/global/error/error';

interface ErrorPageProps {
  title: string,
  description: string,
  keywords: string[]
}

const ErrorPage = ({ title, description, keywords }: ErrorPageProps) => {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <Error/>
    </Layout>
  );
};

export default ErrorPage;

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  return {
    props: {
      title: `Error! ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
};
