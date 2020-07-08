import Icon from '@mdi/react';
import {
  mdiAndroid, mdiGit, mdiLanguageCss3, mdiLanguageHtml5, mdiLanguageJava, mdiLanguageJavascript,
  mdiLanguageKotlin, mdiLanguagePython, mdiLeaf, mdiMaterialDesign, mdiNodejs, mdiReact
} from '@mdi/js';
import styles from './skillset.module.css';

const iconSize = 0.75;
const SkillSet = () => {
  return (
    <div className={styles.skills}>
      <h4 className={styles.title}>🚀&nbsp;&nbsp;Skills</h4>
      <div className={styles.skillset}>
        <span className={`${styles.skill} ${styles.android}`}>
          <Icon path={mdiAndroid} size={iconSize}/>Android
        </span>
        <span className={`${styles.skill} ${styles.kotlin}`}>
          <Icon path={mdiLanguageKotlin} size={iconSize}/>Kotlin
        </span>
        <span className={`${styles.skill} ${styles.java}`}>
          <Icon path={mdiLanguageJava} size={iconSize}/>Java
        </span>
        <span className={`${styles.skill} ${styles.python}`}>
          <Icon path={mdiLanguagePython} size={iconSize}/>Python
        </span>
        <span className={`${styles.skill} ${styles.javascript}`}>
          <Icon path={mdiLanguageJavascript} size={iconSize}/>JavaScript
        </span>
        <span className={`${styles.skill} ${styles.html}`}>
          <Icon path={mdiLanguageHtml5} size={iconSize}/>HTLM5
        </span>
        <span className={`${styles.skill} ${styles.css}`}>
          <Icon path={mdiLanguageCss3} size={iconSize}/>CSS3
        </span>
        <span className={`${styles.skill} ${styles.node}`}>
          <Icon path={mdiNodejs} size={iconSize}/>Node JS
        </span>
        <span className={`${styles.skill} ${styles.react}`}>
          <Icon path={mdiReact} size={iconSize}/>React
        </span>
        <span className={`${styles.skill} ${styles.mongo}`}>
          <Icon path={mdiLeaf} size={iconSize}/>Mongo DB
        </span>
        <span className={`${styles.skill} ${styles.git}`}>
          <Icon path={mdiGit} size={iconSize}/>Git
        </span>
        <span className={`${styles.skill} ${styles.md}`}>
          <Icon path={mdiMaterialDesign} size={iconSize}/>Material Design
        </span>
      </div>
    </div>
  );
};

export default SkillSet;
