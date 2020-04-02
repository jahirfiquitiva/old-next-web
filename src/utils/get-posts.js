import matter from 'gray-matter';

const dateFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const formatDate = (date) => {
  const actualDate = new Date(Date.parse(date));
  return actualDate.toLocaleDateString('en-US', dateFormatOptions);
};

const getBlogPosts = async () => {
  let posts = [];
  try {
    posts = await ((context) => {
      const keys = context.keys();
      const values = keys.map(context);
      const data = keys.map((key, index) => {
        // Create slug from filename
        const slug = key
          .replace(/^.*[\\/]/, '')
          .split('.')
          .slice(0, -1)
          .join('.');
        const value = values[index];

        // Parse yaml metadata & markdownbody in document
        const document = matter(value.default);
        return {
          id: slug || '',
          title: document.data.title || '',
          date: formatDate(document.data.date.toString()) || '',
          description: document.data.description || '',
          body: document.content || '',
          slug,
        };
      });
      return data.filter((it) => (it.id.length > 0 && it.title.length > 0 && it.body.length > 0));
    })(require.context('./../../content', true, /\.md$/));
  } catch (e) {
  }
  return posts;
};

export default getBlogPosts;
