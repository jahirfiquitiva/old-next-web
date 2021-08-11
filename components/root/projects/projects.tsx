import useTranslation from 'next-translate/useTranslation';
import Stats from '@components/root/projects/stats';
import ExtLink from '@components/global/ext-link/ext-link';
import { Project, ProjectProps } from '@components/root/projects/project';
import styles from './projects.module.css';

interface ProjectsProps {
  projects?: ProjectProps[];
}

const projectStyles = {
  stack: styles.stack,
  nomr: styles.nomr,
  skill: styles.skill,
  item: styles.item,
  preview: styles.preview,
  content: styles.content,
  wrapper: styles.wrapper,
  iconTitle: styles.iconTitle,
};

const Projects = ({ projects = [] }: ProjectsProps) => {
  const { t } = useTranslation();

  const renderProjects = () => {
    if (projects.length <= 0) {
      return (
        <>
          <br/>
          <p>{t('projects:no-projects')} 🙃</p>
        </>
      );
    }
    return (
      <div className={styles.grid}>
        {(projects || []).map((it, i) => (
          <Project key={i} {...it} projectStyles={projectStyles}/>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.projects}>
      <div className={styles.titlecontainer}>
        <div className={styles.titlebtncontainer}>
          <h2 className={styles.title}>
            👨‍💻&nbsp;&nbsp;
            <span className={'text-gradient grad-c'}>
              {t('projects:projects')}
            </span>
          </h2>
          <ExtLink label={'View resume'} to={'/resume'} newTab/>
        </div>
        {/* @ts-ignore */}
        <Stats className={styles.stats}/>
      </div>
      {renderProjects()}
    </div>
  );
};

export default Projects;
