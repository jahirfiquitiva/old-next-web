import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

const PostTemplate = ({ content, data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <ReactMarkdown source={content}/>
    </div>
  );
};

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;

  // Import our .md file using the `slug` from the URL
  // eslint-disable-next-line
  const content = await import(`./../../../content/${slug}.md`);

  // Parse .md data through `matter`
  const data = matter(content.default);

  // Pass data to the component props
  return { ...data };
};

export default PostTemplate;
