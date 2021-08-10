import { GetStaticProps } from 'next';
import { BaseInspoItem, InspoItem, PageProps } from '@components/types';
import Layout from '@components/Layout';
import InspirationContent from '@components/inspiration/inspiration';
import { getWebsiteFavicon } from '@lib/favicons';

interface InspirationProps extends PageProps {
  inspirationItems?: InspoItem[];
}

const Inspiration = ({
  title,
  description,
  keywords,
  inspirationItems,
}: InspirationProps) => {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      <InspirationContent items={inspirationItems || []} />
    </Layout>
  );
};

export default Inspiration;

const getItemFavicon = async (item: BaseInspoItem) =>
  new Promise(
    // eslint-disable-next-line no-async-promise-executor
    async (resolve) => {
      const results = await getWebsiteFavicon(item.link);
      resolve({
        ...item,
        favicon: results ? results?.results?.default ?? '' : '',
      });
    }
  );

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../siteconfig.json');

  const inspoData = await import('../data/inspiration.json');
  const mappedInspo = await Promise.all(
    (inspoData.default || []).map(getItemFavicon)
  ).catch(() => []);

  return {
    props: {
      title: `Inspiration ~ ${configData.default.title}`,
      description: configData.default.description,
      keywords: configData.default.keywords,
      inspirationItems: mappedInspo,
    },
  };
};
