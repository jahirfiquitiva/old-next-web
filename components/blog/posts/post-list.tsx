import { CSSProperties, useContext, useState } from 'react';
import Link from 'next/link';
import Icon from '@mdi/react';
import { mdiMagnify, mdiPencil } from '@mdi/js';
import hexToRGB from '@utils/hexToRgb';
import getColorFromData from '@utils/getColorFromData';
import ThemeContext from '@components/theme/ThemeContext';
import styles from './post-list.module.css';
import buildCustomStyles from '@utils/buildCustomStyles';
import { usePalette } from 'react-palette';
import { Suggestions } from '@components/blog/suggestions/suggestions';

export interface FrontmatterProps {
  title: string,
  date: string,
  hero?: string,
  description?: string,
  color?: string,
  link?: string,
  page?: number,
}

export interface PostProps {
  slug: string,
  color?: string,
  frontmatter: FrontmatterProps,
  markdownBody?: string
}

export interface PostsListProps {
  posts?: PostProps[]
  form?: Object
}

const PostItem = (props: PostProps) => {
  const { frontmatter, color: defaultColor, slug } = props;
  const { isDark } = useContext(ThemeContext);

  const defHero = frontmatter?.hero || '';
  const heroUrl = defHero.length > 0 ? defHero.startsWith('..') ? null : defHero
                                     : null;

  const { data: paletteData } = heroUrl ? usePalette(heroUrl) : { data: null };
  const color = getColorFromData(paletteData, isDark) ||
    frontmatter.color || defaultColor;

  const rightLink = frontmatter.link && frontmatter.link.length > 0
                    ? frontmatter.link : `/blog/${slug}`;

  const renderPostHero = (url?: string, color?: string) => {
    return (
      <div
        className={styles.hero}
        style={{
          backgroundImage: `url(${url})`,
          backgroundColor: color || '#000'
        }}>
        {(!url || url.length <= 0)
         ? (<Icon path={mdiPencil} size={2} color={'rgba(0,0,0,0.5)'}/>)
         : (<></>)}
      </div>
    );
  };

  const getColorStyle = (): CSSProperties => {
    if (!color) return {};
    return buildCustomStyles({
      '--shadow-color': hexToRGB(color, 0.15),
      '--border-color': hexToRGB(color, 0.2),
      '--hl-color': color,
    });
  };

  const renderPostLinkContent = (heroUrl?: string) => {
    return (<div className={styles.details}>
      {renderPostHero(heroUrl, color)}
      <div className={styles.info}>
        <h6>{frontmatter.title}</h6>
        <p>{frontmatter.date}</p>
        {frontmatter.description && <p>{frontmatter.description || ''}</p>}
      </div>
    </div>);
  };

  const renderPostLink = (heroUrl: string, rightLink?: string) => {
    const extras = rightLink && rightLink.length > 0
                   ? {
        key: slug, rel: 'noopener noreferrer', href: rightLink,
        target: '_blank'
      } : {};
    return (<a
      title={frontmatter.title} aria-label={frontmatter.title}
      className={styles.card} style={getColorStyle()} {...extras}>
      {renderPostLinkContent(heroUrl)}
    </a>);
  };

  if (rightLink.startsWith('/')) {
    return (<Link href={rightLink} key={slug}>
      {renderPostLink(heroUrl || '')}
    </Link>);
  }
  return renderPostLink(heroUrl || '', rightLink);
};

const PostsList = ({ posts, form }: PostsListProps) => {
  const [filter, setFilter] = useState('');

  const filteredPosts = (posts || [])
    .filter(it =>
      it.frontmatter.title.toLowerCase().includes(filter.toLowerCase()) ||
      it.frontmatter.description?.toLowerCase().includes(filter.toLowerCase()));

  const renderPostsList = () => {
    if (filteredPosts.length <= 0) {
      return (
        <div className={styles.noposts}>
          <p>No posts found.</p>
        </div>
      );
    }
    return (<div className={styles.posts}>
      {filteredPosts.map((post, index) => {
        return <PostItem key={index} {...post} />;
      })}
    </div>);
  };

  return (
    <div className={styles.blog}>
      <h3 className={styles.title}>📝 &nbsp;&nbsp;
        <span className={'text-gradient grad-b'}>
          Blog
        </span>
      </h3>
      <div className={styles.search}>
        <input type={'text'} placeholder={'Search blog posts...'} value={filter}
               onChange={(e) => {setFilter(e.target.value);}}/>
        <Icon path={mdiMagnify} size={1}/>
      </div>
      {renderPostsList()}
      <Suggestions form={form}/>
    </div>
  );
};

export default PostsList;
