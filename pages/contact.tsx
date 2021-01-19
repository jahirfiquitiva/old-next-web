import { GetStaticProps } from 'next';
import { formium } from '@lib/formium';
import { PageProps } from '@components/types';
import Layout from '@components/Layout';
import ContactForm from '@components/contact/form/form';

interface ContactProps extends PageProps {
  form: Object,
  reCaptchaKey: string
}

const Contact = ({
  title, description, keywords, form, reCaptchaKey
}: ContactProps) => {
  return (
    <Layout title={title} description={description} keywords={keywords}
            page={4}>
      <ContactForm form={form} reCaptchaKey={reCaptchaKey}/>
    </Layout>
  );
};

export default Contact;

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  const form = await formium.getFormBySlug(process.env.FORMIUM_FORM_SLUG || '')
    .catch(() => ({ id: '' }));
  return {
    props: {
      title: `Contact ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
      form,
      reCaptchaKey: process.env.RECAPTCHA_KEY || '0',
    },
  };
};
