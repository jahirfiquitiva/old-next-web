import Layout from '@components/Layout';
import Sent from '@components/contact/sent/sent';

const SentSite = ({ title, description, keywords, ...props }) => {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <Sent/>
    </Layout>
  );
};

export default SentSite;

export const getStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  return {
    props: {
      title: `Email sent! ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
};
