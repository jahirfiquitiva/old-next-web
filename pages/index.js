import Layout from '@components/Layout';
import About from '@components/root/about/about';
import Projects from '@components/root/projects/projects';

const Index = ({ title, description, keywords, projects, ...props }) => {
  return (
    <Layout title={title} description={description} keywords={keywords} page={0}>
      <About/>
      <hr id={'projects'}/>
      <Projects projects={projects}/>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const configData = await import('../siteconfig.json');
  const projectsData = await import('../data/projects.json');
  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
      keywords: configData.default.keywords,
      projects: projectsData.default || [],
    },
  };
};
