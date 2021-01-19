import Icon from '@mdi/react';
import {
  mdiGithub, mdiInstagram, mdiLinkedin, mdiTwitch, mdiTwitter
} from '@mdi/js';
import styles from './social.module.css';

const socialLinks = [{
  siteName: 'Twitter',
  iconPath: mdiTwitter,
  className: styles.twitter,
  link: 'https://twitter.com/jahirfiquitiva',
}, {
  siteName: 'GitHub',
  iconPath: mdiGithub,
  className: styles.github,
  link: 'https://github.com/jahirfiquitiva',
}, {
  siteName: 'LinkedIn',
  iconPath: mdiLinkedin,
  className: styles.linkedin,
  link: 'https://linkedin.com/in/jahirfiquitiva',
}, {
  siteName: 'Instagram',
  iconPath: mdiInstagram,
  className: styles.instagram,
  link: 'https://instagram.com/jahirfiquitiva',
}, {
  siteName: 'Twitch',
  iconPath: mdiTwitch,
  className: styles.twitch,
  link: 'https://twitch.com/jahirdotdev',
  disabled: true,
}];

const iconSize = 0.8;
const Social = ({ centered }: { centered?: boolean }) => {
  return (
    <div className={`${styles.social} ${centered ? styles.centered : ''}`}>
      {(socialLinks || [])
        // @ts-ignore
        .filter((it) => it.disabled === 'undefined' || !it.disabled)
        .map((it, index) => {
          return (<a
            title={`${it.siteName} link`} aria-label={`${it.siteName} link`}
            className={`button ${styles.button} ${it.className}`}
            href={it.link} key={index}
            rel={'noopener noreferrer'} target={'_blank'}>
            <Icon path={it.iconPath} size={iconSize}/>
          </a>);
        })}
    </div>
  );
};

export default Social;
