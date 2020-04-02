import React from 'react';
import matter from 'gray-matter';
import Link from 'next/link';

const dateFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Blog = ({ posts }) => {

  const formatDate = (date) => {
    const actualDate = new Date(Date(date));
    return actualDate.toLocaleDateString('en-US', dateFormatOptions);
  };

  const renderDescription = (description) => {
    if (description && description.length > 0) {
      return (
        <>
          <br/>
          <p>frontmatter.description</p>
        </>
      );
    }
    return (<></>);
  };

  return (
    <>
      <ul>
        {(posts || []).map((it, i) => (
          <Link key={i} href={{ pathname: `/blog/${it.slug}` }}>
            <li>
              <div>
                <h5>{it.frontmatter.title}</h5>
                <h5>{formatDate(it.frontmatter.date)}</h5>
                {renderDescription(it.frontmatter.description)}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

Blog.getInitialProps = async () => {
  const posts = ((context) => {
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
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context('./../../content', true, /\.md$/));
  /*
  const posts = ((context) => context.keys()
    .map((key) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.');
      return {
        frontmatter: document.data,
        slug,
      };
    }))(require.context('./../../content', true, /\.md$/));
  */

  return { posts };
};

export default Blog;
