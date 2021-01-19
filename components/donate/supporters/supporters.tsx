/* eslint-disable react/jsx-no-undef */
import { CSSProperties, Fragment, useContext } from 'react';
import Image from 'next/image';
import { usePalette } from 'react-palette';
import hexToRGB from '@utils/hexToRgb';
import getColorFromData from '@utils/getColorFromData';
import ThemeContext from '@components/theme/ThemeContext';
import styles from './supporters.module.css';
import buildCustomStyles from '@utils/buildCustomStyles';

export interface SupporterProps {
  name: string,
  link: string,
  photo: string,
}

export interface SupportersCategoryProps {
  id?: string,
  name?: string,
  key?: string,
  description?: string,
}

const Supporters = ({ supporters }: any) => {
  const { isDark } = useContext(ThemeContext);

  const getColorStyle = (color?: string | null): CSSProperties => {
    if (!color) return {};
    return buildCustomStyles({
      '--bg-color': hexToRGB(color, 0.15),
      '--border-color': hexToRGB(color, 0.5),
    });
  };

  const renderSupporters = (actualSupporters?: SupporterProps[]) => {
    if (!actualSupporters || actualSupporters.length <= 0) {
      return (<><p>None</p></>);
    }
    return (<>
      <ul>
        {(actualSupporters || []).map((it, i) => {
          const { data } = it.photo ? usePalette(it.photo) : { data: null };
          const color = getColorFromData(data, isDark) || null;
          return (
            <li key={i}>
              <a
                title={`${it.name} link`} aria-label={`${it.name} link`}
                href={it.link} target={'_blank'}
                rel={'noopener noreferrer'}
                className={styles.supporter}
                style={getColorStyle(color)}>
                <div
                  className={styles.photo}
                  style={{ backgroundImage: `url(${it.photo || ''})` }}/>
                <p className={styles.name}>{it.name}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </>);
  };

  const renderSupportersCategory = (category?: SupportersCategoryProps) => {
    if (!category) return (<></>);
    const { id, name, key, description } = category;
    if (!name || name.length <= 0 || !key || key.length <= 0) return (<></>);
    const namePortions = name.split(' ');
    const emoji = namePortions.shift();
    return (<>
      <h5 className={styles.sponsortitle}>
        <a
          target={id && id.length > 0 ? '_blank' : '_self'}
          rel={'noopener noreferrer'}
          href={id && id.length > 0
                ? `https://github.com/sponsors/jahirfiquitiva/sponsorships?tier_id=${id}`
                : '#'}>
          {emoji}&nbsp;&nbsp;{namePortions.join(' ')} Sponsor
        </a>
      </h5>
      {description && description.length > 0
       ? (<p className={styles.sponsordesc}>{description}</p>)
       : (<></>)}
      {renderSupporters(supporters[key] || [])}
    </>);
  };

  return (
    <div className={styles.supporters}>
      <h3 className={styles.title}>🙌&nbsp;&nbsp;Thanks!</h3>
      <p>I&apos;m really grateful to all the awesome people that support my
        work.</p>
      {/*
      <p>You can sponsor me via <ExtLink label={'GitHub Sponsors'}
                                         to={'https://github.com/sponsors/jahirfiquitiva'}/>,
        and have your name and photo listed in this page.</p>
      */}
      {(supporters ? supporters.categories || [] : []).map(
        (it: SupportersCategoryProps, i: number) => {
          // noinspection JSUnresolvedVariable
          return (<Fragment key={i}>
            {renderSupportersCategory(it)}
          </Fragment>);
        })}
      <div className={styles.thanksgif}>
        <Image
          layout={'fill'}
          objectFit={'contain'}
          loading={'lazy'}
          src={'/assets/images/gifs/thanks.gif'}
          alt={'Adventure Time characters hugging each other and saying thanks'}/>
      </div>
    </div>
  );
};

export default Supporters;
