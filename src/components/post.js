import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Post = ({
  id, title, date, description,
}) => (
  <Link href={'/blog/[id]'} as={`/blog/${id}`}>
    <article style={{
      border: '2px solid #000',
      margin: '1rem',
      padding: '1rem',
      cursor: 'pointer',
    }}>
      <h2>{title}</h2>
      <p>{date}</p>
      {description && description.length > 0 ? (<p>{description}</p>) : (<></>)}
    </article>
  </Link>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Post;
