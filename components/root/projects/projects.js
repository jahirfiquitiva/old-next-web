import hexToRGB from '@utils/hexToRgb';
import data from './projects.json';
import styles from './projects.module.css';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h3 className={styles.title}>👨‍💻&nbsp;&nbsp;Projects</h3>
      <div className={styles.grid}>
        {(data || []).map((it, i) => {
          return (
            <a className={styles.card} href={it.link} key={it.title}
               target={'_blank'} rel={'noopener noreferrer'}
               style={{
                 '--shadow-color': hexToRGB(it.color, .15),
                 '--border-color': hexToRGB(it.color, .2),
                 '--hl-color': it.color
               }}>
              <img src={it.icon} alt={it.title}/>
              <div className={styles.info}>
                <h5>{it.title}</h5>
                <p>{it.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
