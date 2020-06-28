import Layout from '@components/Layout';
import About from '@components/root/about/about';
import Projects from '@components/root/projects/projects';

const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title} description={description} page={0}>
      <About/>
      <hr id={'projects'}/>
      <Projects/>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
