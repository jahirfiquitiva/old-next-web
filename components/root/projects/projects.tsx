import Image from 'next/image';
import { CSSProperties, useContext } from 'react';
import { usePalette } from 'react-palette';
import hexToRGB from '@utils/hexToRgb';
import getColorFromData from '@utils/getColorFromData';
import buildCustomStyles from '@utils/buildCustomStyles';
import ThemeContext from '@components/theme/ThemeContext';
import Stats from '@components/root/projects/stats';
import styles from './projects.module.css';
import UnsizedImage from '@components/global/image/UnsizedImage';
import getAnalogousColors from '@utils/getAnalogousColors';
import getReadableColor from '@utils/getReadableColor';

export interface ProjectProps {
  title: string,
  description: string,
  icon: string,
  preview?: string,
  link?: string,
  color?: string,
  tag?: string,
}

interface ProjectsProps {
  projects?: ProjectProps[]
}

// @ts-ignore
const buildCustomLinkStylesForColor = (color?: string | null,
  isDark?: boolean): CSSProperties => {
  const [aColor, cColor] = getAnalogousColors(color);
  const safeColor = getReadableColor(color, isDark);
  return buildCustomStyles({
    '--shadow-color': hexToRGB(safeColor, 0.2),
    '--border-color': hexToRGB(safeColor, 0.3),
    '--hl-color': safeColor,
    '--a-bg-grad-color': aColor,
    '--b-bg-grad-color': color,
    '--c-bg-grad-color': cColor,
  });
};

const Projects = ({ projects = [] }: ProjectsProps) => {
  const { isDark } = useContext(ThemeContext);

  const renderNewProject = (it: ProjectProps) => {
    const { data } = it.icon ? usePalette(it.icon) : { data: null };
    const color = isDark
                  ? getColorFromData(data, isDark) || it.color
                  : it.color;
    const linkStyles = buildCustomLinkStylesForColor(color, isDark);
    return (
      <a
        title={`${it.title} link`} aria-label={`${it.title} link`}
        className={styles.item} href={it.link} key={it.title}
        target={'_blank'} rel={'noopener noreferrer'}
        style={linkStyles}>
        <div>
          <div className={styles.preview}>
            {it.preview && <UnsizedImage src={it.preview} alt={it.title}/>}
          </div>
          <div className={styles.content}>
            <div className={styles.iconTitle}>
              <Image
                src={it.icon} alt={it.title}
                height={48} width={48}
                layout={'fixed'}
                loading={'lazy'}/>
              <h4>{it.title}</h4>
            </div>
            <p>{it.description}</p>
          </div>
        </div>
      </a>
    );
  };

  const renderProjects = () => {
    if (projects.length <= 0) {
      return (<>
        <br/>
        <p>No projects available 🙃</p>
      </>);
    }
    return (
      <div className={styles.grid}>
        {(projects || []).map(renderNewProject)}
      </div>
    );
  };

  return (
    <div className={styles.projects}>
      <div className={styles.titlecontainer}>
        <h2 className={styles.title}>👨‍💻&nbsp;&nbsp;Projects</h2>
        {/* @ts-ignore */}
        <Stats className={styles.stats}/>
      </div>
      {renderProjects()}
    </div>
  );
};

export default Projects;
