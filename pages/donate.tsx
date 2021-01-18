import { PageProps } from '@components/types';
import Layout from '@components/Layout';
import Intro from '@components/donate/intro/intro';
import Supporters from '@components/donate/supporters/supporters';

interface DonateProps extends PageProps {
  supporters?: any[]
}

const Donate = ({ title, description, keywords, supporters }: DonateProps) => {
  return (
    <Layout title={title} description={description} keywords={keywords}
            page={3}>
      <Intro/>
      <hr id={'thanks'}/>
      <Supporters supporters={supporters}/>
    </Layout>
  );
};

export default Donate;

export const getStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  const supportersData = await import('../data/supporters.json');
  return {
    props: {
      title: `Donate ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
      supporters: supportersData.default || {},
    },
  };
};
