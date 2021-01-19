import Layout from '@components/Layout';
import Release, { ReleaseProps } from '@components/releases/release';
import { GetStaticPaths, GetStaticProps } from 'next';

const releasesRepos = ['Frames', 'Blueprint', 'Kuper', 'ChipView', 'FABsMenu'];

const Releases = ({ repo }: ReleaseProps) => {
  return (<Layout><Release repo={repo}/></Layout>);
};

export default Releases;

export const getStaticProps: GetStaticProps = async ({ ...ctx }) => {
  // @ts-ignore
  const { repo } = ctx.params;
  return { props: { repo } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = releasesRepos.map(
    (slug) => `/gh-releases/${slug.toLowerCase()}`);
  return { paths, fallback: false };
};
