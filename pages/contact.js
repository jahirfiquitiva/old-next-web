import Layout from '@components/Layout';
import ContactForm from '@components/contact/form/form';

const Contact = ({ title, description, keywords, ...props }) => {
  return (
    <Layout title={title} description={description} keywords={keywords} page={4}>
      <ContactForm/>
    </Layout>
  );
};

export default Contact;

export const getStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  return {
    props: {
      title: `Contact ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
    },
  };
};
