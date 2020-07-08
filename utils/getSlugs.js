import matter from 'gray-matter';

const getSlugs = (context) => {
  const keys = context.keys();
  const values = keys.map(context);
  const data = keys.map((key, index) => {
    const slug = key.replace(/^.*[\\/]/, '')
      .slice(0, -3);
    const value = values[index];
    const document = matter(value.default);
    const frontmatter = { ...document.data };
    const isInProgress = frontmatter['in-progress'] === true;
    if (isInProgress) return null;
    return slug;
  });

  return (data || []).filter((it) => it);
};

export default getSlugs;
