import Image from 'next/image';
import { CSSProperties, useContext } from 'react';
import { usePalette } from 'react-palette';
import hexToRGB from '@utils/hexToRgb';
import getColorFromData from '@utils/getColorFromData';
import getReadableColor from '@utils/getReadableColor';
import getAnalogousColors from '@utils/getAnalogousColors';
import buildCustomStyles from '@utils/buildCustomStyles';
import ThemeContext from '@components/theme/ThemeContext';
import Stats from '@components/root/projects/stats';
import styles from './projects.module.css';

import { SkillProps, skills } from '@components/root/skillset/skillset';
import Icon from '@mdi/react';
import useTranslation from 'next-translate/useTranslation';
import ExtLink from '@components/global/ext-link/ext-link';

export interface ProjectProps {
  title: string;
  description: string;
  icon: string;
  preview?: string;
  link?: string;
  color?: string;
  tag?: string;
  stack?: string[];
}

interface ProjectsProps {
  projects?: ProjectProps[];
}

// @ts-ignore
const buildCustomLinkStylesForColor = (
  color?: string | null,
  isDark?: boolean
): CSSProperties => {
  const [aColor, cColor] = getAnalogousColors(color);
  const safeColor = getReadableColor(color, isDark);
  return buildCustomStyles({
    '--shadow-color': hexToRGB(safeColor, 0.3),
    '--border-color': hexToRGB(safeColor, 0.4),
    '--hl-color': safeColor,
    '--a-bg-grad-color': cColor,
    '--b-bg-grad-color': color,
    '--c-bg-grad-color': aColor
  });
};

const getSkill = (skillName: string): SkillProps | null => {
  try {
    return skills.filter(
      (it: SkillProps) => it.name.toLowerCase() === skillName.toLowerCase()
    )[0];
  } catch (e) {
    return null;
  }
};

const iconSize: number = 0.9;
const Projects = ({ projects = [] }: ProjectsProps) => {
  const { t } = useTranslation();
  const { isDark } = useContext(ThemeContext);

  const renderProjectStack = (stack?: string[]) => {
    if (!stack || !stack.length) return null;
    return (
      <ul className={styles.stack}>
        {stack.map((skillName: string, i: number) => {
          const skill = getSkill(skillName);
          if (!skill) return null;
          return (
            <li
              key={i}
              className={
                skillName.toLowerCase().includes('kotlin') ? styles.nomr : ''
              }
            >
              <span className={styles.skill}>
                <Icon
                  path={skill.iconPath}
                  color={skill.color}
                  size={skillName === 'android' ? iconSize * 1.25 : iconSize}
                />
              </span>
            </li>
          );
        })}
      </ul>
    );
  };

  const renderNewProject = (it: ProjectProps) => {
    const { data } = it.icon ? usePalette(it.icon) : { data: null };
    const color = isDark
                  ? getColorFromData(data, isDark) || it.color
                  : it.color;
    const linkStyles = buildCustomLinkStylesForColor(color, isDark);
    return (
      <a
        title={`${it.title} link`}
        aria-label={`${it.title} link`}
        className={styles.item}
        href={it.link}
        key={it.title}
        target={'_blank'}
        rel={'noopener noreferrer'}
        style={linkStyles}
      >

        <div className={styles.preview}>
          {it.preview?.length && (
            <Image
              src={it.preview}
              alt={it.title}
              width={341}
              height={256}
              layout={'fixed'}
              loading={'lazy'}
            />
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.wrapper}>
            <div className={styles.iconTitle}>
              <Image
                src={it.icon}
                alt={it.title}
                width={48}
                height={48}
                layout={'fixed'}
                loading={'lazy'}
              />
              <h5>{it.title}</h5>
            </div>
            <p>{t(`projects:${it.description}`)}</p>
            {renderProjectStack(it.stack)}
          </div>
        </div>
      </a>
    );
  };

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
        {(projects || []).map(renderNewProject)}
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
