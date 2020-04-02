import React from 'react';
import MyLink from '../link/my-link';
import MDIcon from '../mdi/mdicon';
import styles from './social-links.module.scss';

const socialLinksItems = [
  {
    icon: 'twitter',
    url: 'https://jahir.xyz/twitter',
  },
  {
    icon: 'github',
    url: 'https://jahir.xyz/github',
  },
  {
    icon: 'linkedin',
    url: 'https://jahir.xyz/linkedin',
  },
  {
    icon: 'google-play',
    url: 'https://play.google.com/store/apps/dev?id=7438639276314720952',
  },
  {
    icon: 'telegram',
    url: 'https://jahir.xyz/tlgrm',
  },
];

const SocialLinks = () => (
  <ul className={styles.socialLinks}>
    {socialLinksItems.map((it, i) => (
      <li key={i}>
        <MyLink className={`button is-${it.icon} ${styles.socialLink}`} url={it.url}>
          <MDIcon iconName={it.icon} size={18}/>
        </MyLink>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
