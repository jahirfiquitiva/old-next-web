import Layout from '@components/Layout';
import Intro from '@components/donate/intro/intro';
import Supporters from '@components/donate/supporters/supporters';

const Donate = () => {
  return (
    <Layout page={3}>
      <Intro/>
      <hr id={'supporters'}/>
      <Supporters/>
    </Layout>
  );
};

export default Donate;
