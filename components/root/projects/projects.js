import { useContext } from 'react';
import { usePalette } from 'react-palette';
import ThemeContext from '@components/theme/ThemeContext';
import hexToRGB from '@utils/hexToRgb';
import getColorFromData from '@utils/getColorFromData';
import styles from './projects.module.css';
import Stats from '@components/root/projects/stats';

const Projects = ({ projects = [] }) => {
  const { isDark } = useContext(ThemeContext);

  const renderProjects = () => {
    if (projects.length <= 0) {
      return (<>
        <br/>
        <p>No projects available 🙃</p>
      </>);
    }
    return (
      <div className={styles.grid}>
        {(projects || []).map((it, i) => {
          const { data } = it.icon ? usePalette(it.icon) : { data: null };
          const color = isDark ? getColorFromData(data, isDark) || it.color : it.color;
          return (
            <a className={styles.card} href={it.link} key={it.title}
               target={'_blank'} rel={'noopener noreferrer'}
               style={{
                 '--shadow-color': hexToRGB(color, 0.15),
                 '--border-color': hexToRGB(color, 0.2),
                 '--hl-color': color,
               }}>
              <div className={styles.icon}>
                <img src={it.icon} alt={it.title} height={72} width={72}/>
              </div>
              <div className={styles.info}>
                <h5>{it.title}</h5>
                <p>{it.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.projects}>
      <div className={styles.titlecontainer}>
        <h3 className={styles.title}>👨‍💻&nbsp;&nbsp;Projects</h3>
        <Stats className={styles.stats}/>
      </div>
      {renderProjects()}
    </div>
  );
};

export default Projects;
