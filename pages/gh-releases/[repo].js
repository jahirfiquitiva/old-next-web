import Layout from '@components/Layout';
import Release from '@components/releases/release';

const releasesRepos = ['Frames', 'Blueprint', 'Kuper', 'ChipView', 'FABsMenu'];

const Releases = ({ repo, ...props }) => {
  return (<Layout><Release repo={repo}/></Layout>);
};

export default Releases;

export const getStaticProps = async ({ ...ctx }) => {
  const { repo } = ctx.params;
  return { props: { repo } };
};

export const getStaticPaths = async () => {
  const paths = releasesRepos.map((slug) => `/gh-releases/${slug.toLowerCase()}`);
  return { paths, fallback: false };
};
