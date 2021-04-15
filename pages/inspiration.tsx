import { GetStaticProps } from 'next';
import { BaseInspoItem, PageProps } from '@components/types';
import Layout from '@components/Layout';
import InspirationContent from '@components/inspiration/inspiration';
import { getWebsiteFavicon } from '@lib/favicons';

const Inspiration = ({ title, description, keywords }: PageProps) => {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <InspirationContent/>
    </Layout>
  );
};

export default Inspiration;

const getItemFavicon = async (item: BaseInspoItem) => new Promise(
// eslint-disable-next-line no-async-promise-executor
  async (resolve) => {
    const results = await getWebsiteFavicon(item.link);
    resolve({
      ...item,
      favicon: results?.results?.default ?? '',
    });
  });

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../siteconfig.json');

  const inspoData = await import('../data/inspiration.json');
  const mappedInspo = await Promise.all(
    (inspoData.default || []).map(getItemFavicon))
    .catch(() => []);

  return {
    props: {
      title: `Inspiration ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
      mappedInspo,
    },
  };
};
