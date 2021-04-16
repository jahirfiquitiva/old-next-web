import { mdiGithub, mdiInstagram, mdiLinkedin, mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';
import useTranslation from 'next-translate/useTranslation';
import styles from './social.module.css';

const socialLinks = [
  {
    siteName: 'GitHub',
    iconPath: mdiGithub,
    className: styles.github,
    link: 'https://github.com/jahirfiquitiva',
  },
  {
    siteName: 'LinkedIn',
    iconPath: mdiLinkedin,
    className: styles.linkedin,
    link: 'https://linkedin.com/in/jahirfiquitiva',
  },
  {
    siteName: 'Twitter',
    iconPath: mdiTwitter,
    className: styles.twitter,
    link: 'https://twitter.com/jahirfiquitiva',
  },
  {
    siteName: 'Instagram',
    iconPath: mdiInstagram,
    className: styles.instagram,
    link: 'https://instagram.com/jahirfiquitiva',
  }, /* {
  siteName: 'Telegram',
  iconPath: mdiTelegram,
  className: styles.telegram,
  link: 'https://t.me/jahirfiquitiva',
}, {
  siteName: 'Twitch',
  iconPath: mdiTwitch,
  className: styles.twitch,
  link: 'https://twitch.com/jahirdotdev',
}, {
  siteName: 'Contact',
  iconPath: mdiEmailOutline,
  className: styles.email,
  link: '/contact',
} */
];

const iconSize = 0.9;
const Social = ({
  centered, size = iconSize,
}: { centered?: boolean, size?: number }) => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.social} ${centered ? styles.centered : ''}`}>
      {(socialLinks || [])
        // @ts-ignore
        .filter((it) => it.disabled === 'undefined' || !it.disabled)
        .map((it, index) => {
          const title = t('common:social-link', { site: it.siteName });
          return (
            <a
              title={title}
              aria-label={title}
              className={`button ${styles.button} ${it.className}`}
              href={it.link}
              key={index}
              rel={'noopener noreferrer'}
              target={'_blank'}
            >
              <Icon path={it.iconPath} size={size}/>
            </a>
          );
        })}
    </div>
  );
};

export default Social;
