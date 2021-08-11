import { CSSProperties, useContext } from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { usePalette } from 'react-palette';
import Icon from '@mdi/react';
import hexToRGB from '@utils/hexToRgb';
import getReadableColor from '@utils/getReadableColor';
import getAnalogousColors from '@utils/getAnalogousColors';
import buildCustomStyles from '@utils/buildCustomStyles';
import { SkillProps, skills } from '@components/root/skillset/skillset';
import ThemeContext from '@components/theme/ThemeContext';
import getColorFromData from '@utils/getColorFromData';

interface ProjectStyles {
  stack?: string;
  nomr?: string;
  skill?: string;
  item?: string;
  preview?: string;
  content?: string;
  wrapper?: string;
  iconTitle?: string;
}

export interface ProjectProps {
  title: string;
  description: string;
  icon: string;
  preview?: string;
  link?: string;
  color?: string;
  darkColor?: string;
  tag?: string;
  stack?: string[];
  projectStyles?: ProjectStyles;
}

const getSkill = (skillName: string): SkillProps | null => {
  try {
    return skills.filter(
      (it: SkillProps) => it.name.toLowerCase() === skillName.toLowerCase()
    )[0];
  } catch (e) {
    return null;
  }
};

// @ts-ignore
const buildCustomLinkStylesForColor = (
  color?: string | null,
  textColor?: string | null,
  isDark?: boolean
): CSSProperties => {
  const [aColor, cColor] = getAnalogousColors(color);
  const safeColor = getReadableColor(textColor || color, isDark);
  return buildCustomStyles({
    '--shadow-color': hexToRGB(safeColor, 0.3),
    '--border-color': hexToRGB(safeColor, 0.4),
    '--hl-color': safeColor,
    '--a-bg-grad-color': cColor,
    '--b-bg-grad-color': color,
    '--c-bg-grad-color': aColor,
  });
};

const iconSize: number = 0.9;
export const Project = (it: ProjectProps) => {
  const { projectStyles } = it;
  const { t } = useTranslation();
  const { isDark } = useContext(ThemeContext);
  const { data } = it.icon ? usePalette(it.icon) : { data: null };

  const color = isDark
                ? getColorFromData(data, true, it?.darkColor) || it.color
                : it.color;

  const linkStyles = buildCustomLinkStylesForColor(
    isDark ? it?.darkColor || color : color,
    it?.darkColor ? it.color : color,
    isDark
  );

  const renderProjectStack = (stack?: string[]) => {
    if (!stack || !stack.length) return null;
    return (
      <ul className={projectStyles?.stack}>
        {stack.map((skillName: string, i: number) => {
          const skill = getSkill(skillName);
          if (!skill) return null;
          return (
            <li
              key={i}
              className={
                skillName.toLowerCase().includes('kotlin')
                ? projectStyles?.nomr
                : ''
              }
            >
              <span className={projectStyles?.skill}>
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

  return (
    <a
      title={`${it.title} link`}
      aria-label={`${it.title} link`}
      className={projectStyles?.item}
      href={it.link}
      key={it.title}
      target={'_blank'}
      rel={'noopener noreferrer'}
      style={linkStyles}
    >
      <div className={projectStyles?.preview}>
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
      <div className={projectStyles?.content}>
        <div className={projectStyles?.wrapper}>
          <div className={projectStyles?.iconTitle}>
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

export default Project;
