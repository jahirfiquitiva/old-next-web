import matter from 'gray-matter';

const getSlugs = (context: any) => {
  const keys = context.keys();
  const values = keys.map(context);
  const data = keys.map((key: any, index: number) => {
    const slug = key.replace(/^.*[\\/]/, '')
      .slice(0, -3);
    const value = values[index];
    const document = matter(value.default);
    const frontmatter = { ...document.data };
    const isInProgress = frontmatter['in-progress'] === true;
    const { link } = frontmatter;
    if ((link && link.length > 0) || isInProgress) return null;
    return slug;
  });

  return (data || []).filter((it: any) => it);
};

export default getSlugs;
