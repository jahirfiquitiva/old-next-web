import { GetStaticProps } from 'next';
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

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  const supportersData = await import('../data/supporters.json');

  /*
  const res = await fetch(
    'https://developers.buymeacoffee.com/api/v1/subscriptions?status=all', {
      body: `access_token=${process.env.BMAC_API_KEY || ''}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
    });
  console.error('***************************************************');
  if (res.status >= 200 && res.status < 300) {
    console.log('Getting subscriptions ok');
    const bmacSubscribers = await res.json();
    console.log(bmacSubscribers);
  } else {
    console.error('Error getting BMAC subscribers');
    console.error(`${res.status} -- ${res.statusText}`);
  }
  console.error('***************************************************');
  */

  return {
    props: {
      title: `Donate ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
      supporters: supportersData.default || {},
    },
  };
};
