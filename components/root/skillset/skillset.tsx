import Icon from '@mdi/react';
import {
  mdiAndroid,
  mdiGit,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJava,
  mdiLanguageJavascript,
  mdiLanguageKotlin,
  mdiLanguagePython,
  mdiLanguageTypescript,
  mdiLeaf,
  mdiMaterialDesign,
  mdiNodejs,
  mdiReact,
  mdiTriangle
} from '@mdi/js';
import hexToRGB from '@utils/hexToRgb';
import buildCustomStyles from '@utils/buildCustomStyles';
import styles from './skillset.module.css';
import useTranslation from 'next-translate/useTranslation';

export interface SkillProps {
  name: string;
  iconPath: string;
  color: string;
}

export const skills: SkillProps[] = [
  { name: 'Android', iconPath: mdiAndroid, color: '#3ddc84' },
  { name: 'Kotlin', iconPath: mdiLanguageKotlin, color: '#6677e0' },
  { name: 'Java', iconPath: mdiLanguageJava, color: '#ea2e2f' },
  { name: 'Python', iconPath: mdiLanguagePython, color: '#3a74a5' },
  { name: 'JavaScript', iconPath: mdiLanguageJavascript, color: '#f7df1e' },
  { name: 'TypeScript', iconPath: mdiLanguageTypescript, color: '#3178c6' },
  { name: 'HTLM5', iconPath: mdiLanguageHtml5, color: '#e34f26' },
  { name: 'CSS3', iconPath: mdiLanguageCss3, color: '#3572b5' },
  { name: 'Node JS', iconPath: mdiNodejs, color: '#61af43' },
  { name: 'React', iconPath: mdiReact, color: '#00c2e6' },
  { name: 'NextJS', iconPath: mdiTriangle, color: '#0070f3' },
  { name: 'Mongo DB', iconPath: mdiLeaf, color: '#69a14a' },
  { name: 'Git', iconPath: mdiGit, color: '#fc6d26' },
  { name: 'Material Design', iconPath: mdiMaterialDesign, color: '#888888' },
];

const iconSize = 0.75;
const SkillSet = () => {
  const { t } = useTranslation();

  const getColorStyle = (color: string) => {
    if (!color) return {};
    return buildCustomStyles({
      '--bg-color': hexToRGB(color, 0.2),
      '--border-color': hexToRGB(color, 0.6),
    });
  };

  return (
    <div className={styles.skills}>
      <h4 className={styles.title}>
        🚀&nbsp;&nbsp;
        <span className={['text-gradient', 'grad-b'].join(' ')}>
          {t('home:skills')}
        </span>
      </h4>
      <div className={styles.skillset}>
        {skills.map((it: SkillProps, i: number) => (
          <span
            key={i}
            className={styles.skill}
            style={getColorStyle(it.color)}
          >
            <Icon path={it.iconPath} size={iconSize} />
            {it.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
