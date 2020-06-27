import data from './projects.json';
import styles from './projects.module.css';

const hexToRGB = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
};

const Projects = () => {
  return (
    <div className={styles.projects} id={'projects'}>
      <h3 className={styles.title}>👨‍💻&nbsp;&nbsp;Projects</h3>
      <div className={styles.grid}>
        {(data || []).map((it, i) => {
          return (
            <a className={styles.card} href={it.link}
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
