import { useContext } from 'react';
import { usePalette } from 'react-palette';
import hexToRGB from '@utils/hexToRgb';
import getColorFromData from '@utils/getColorFromData';
import ThemeContext from '@components/theme/ThemeContext';
import styles from './supporters.module.css';

const Supporters = ({ supporters = [] }) => {
  const { isDark } = useContext(ThemeContext);

  const getColorStyle = (color) => {
    if (!color) return {};
    return {
      '--bg-color': hexToRGB(color, 0.15),
      '--border-color': hexToRGB(color, 0.4),
    };
  };

  const renderSupporters = () => {
    if (supporters.length <= 0) {
      return (<p>There&apos;s no people supporting me yet 😔</p>);
    }
    return (
      <ul>
        {(supporters || []).map((it, i) => {
          const { data } = it.photo ? usePalette(it.photo) : { data: null };
          const color = getColorFromData(data, isDark) || null;
          return (
            <li key={i}>
              <a href={it.link} target={'_blank'}
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
    );
  };

  return (
    <div className={styles.supporters}>
      <h3 className={styles.title}>🙌&nbsp;&nbsp;Thanks!</h3>
      <p>I&apos;m really grateful to all the awesome people that support my work.</p>
      {renderSupporters()}
      <div className={styles.thanksgif}>
        <img src={'/assets/images/gifs/thanks.gif'}
             alt={'Adventure Time characters hugging each other and saying thanks'}/>
      </div>
    </div>
  );
};

export default Supporters;
