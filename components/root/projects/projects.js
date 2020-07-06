import hexToRGB from '@utils/hexToRgb';
import styles from './projects.module.css';

const Projects = ({ projects = [] }) => {
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
          return (
            <a className={styles.card} href={it.link} key={it.title}
               target={'_blank'} rel={'noopener noreferrer'}
               style={{
                 '--shadow-color': hexToRGB(it.color, 0.15),
                 '--border-color': hexToRGB(it.color, 0.2),
                 '--hl-color': it.color,
               }}>
              <div className={styles.icon}>
                <img src={it.icon} alt={it.title}/>
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
      <h3 className={styles.title}>👨‍💻&nbsp;&nbsp;Projects</h3>
      {renderProjects()}
    </div>
  );
};

export default Projects;
