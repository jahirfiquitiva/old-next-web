import { usePalette } from 'react-palette';
import data from './supporters.json';
import styles from './supporters.module.css';
import hexToRGB from '@utils/hexToRgb';

const Supporters = () => {
  const getColorStyle = (color) => {
    if (!color) return {};
    return {
      '--bg-color': hexToRGB(color, 0.15),
      '--border-color': hexToRGB(color, 0.4),
    };
  };

  const getColorFromData = (data) => {
    if (!data) return null;
    const { vibrant: color = null } = data;
    return color;
  };

  const renderSupportersPhotos = () => {
    return (
      <ul>
        {(data || []).map((it, i) => {
          const { data } = it.photo ? usePalette(it.photo) : { data: null };
          const color = getColorFromData(data) || null;
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
      {renderSupportersPhotos()}
    </div>
  );
};

export default Supporters;
