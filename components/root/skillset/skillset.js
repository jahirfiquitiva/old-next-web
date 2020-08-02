import Icon from '@mdi/react';
import {
  mdiAndroid, mdiGit, mdiLanguageCss3, mdiLanguageHtml5, mdiLanguageJava, mdiLanguageJavascript,
  mdiLanguageKotlin, mdiLanguagePython, mdiLeaf, mdiMaterialDesign, mdiNodejs, mdiReact, mdiTriangle
} from '@mdi/js';
import hexToRGB from '@utils/hexToRgb';
import styles from './skillset.module.css';

const iconSize = 0.75;
const SkillSet = () => {
  const getColorStyle = (color) => {
    if (!color) return {};
    return {
      '--bg-color': hexToRGB(color, 0.15),
      '--border-color': hexToRGB(color, 0.5),
    };
  };

  return (
    <div className={styles.skills}>
      <h4 className={styles.title}>🚀&nbsp;&nbsp;Skills</h4>
      <div className={styles.skillset}>
        <span className={styles.skill} style={getColorStyle('#3ddc84')}>
          <Icon path={mdiAndroid} size={iconSize}/>Android
        </span>
        <span className={styles.skill} style={getColorStyle('#6677e0')}>
          <Icon path={mdiLanguageKotlin} size={iconSize}/>Kotlin
        </span>
        <span className={styles.skill} style={getColorStyle('#ea2e2f')}>
          <Icon path={mdiLanguageJava} size={iconSize}/>Java
        </span>
        <span className={styles.skill} style={getColorStyle('#3a74a5')}>
          <Icon path={mdiLanguagePython} size={iconSize}/>Python
        </span>
        <span className={styles.skill} style={getColorStyle('#f7df1e')}>
          <Icon path={mdiLanguageJavascript} size={iconSize}/>JavaScript
        </span>
        <span className={styles.skill} style={getColorStyle('#e34f26')}>
          <Icon path={mdiLanguageHtml5} size={iconSize}/>HTLM5
        </span>
        <span className={styles.skill} style={getColorStyle('#3572b5')}>
          <Icon path={mdiLanguageCss3} size={iconSize}/>CSS3
        </span>
        <span className={styles.skill} style={getColorStyle('#61af43')}>
          <Icon path={mdiNodejs} size={iconSize}/>Node JS
        </span>
        <span className={styles.skill} style={getColorStyle('#00c2e6')}>
          <Icon path={mdiReact} size={iconSize}/>React
        </span>
        <span className={styles.skill} style={getColorStyle('#0070f3')}>
          <Icon path={mdiTriangle} size={iconSize}/>NextJS
        </span>
        <span className={styles.skill} style={getColorStyle('#69a14a')}>
          <Icon path={mdiLeaf} size={iconSize}/>Mongo DB
        </span>
        <span className={styles.skill} style={getColorStyle('#fc6d26')}>
          <Icon path={mdiGit} size={iconSize}/>Git
        </span>
        <span className={styles.skill} style={getColorStyle('#888888')}>
          <Icon path={mdiMaterialDesign} size={iconSize}/>Material Design
        </span>
      </div>
    </div>
  );
};

export default SkillSet;
