import Icon from '@mdi/react';
import {
  mdiAndroid, mdiLanguageKotlin, mdiLanguageJava, mdiLanguagePython, mdiLanguageJavascript,
  mdiLanguageHtml5, mdiLanguageCss3, mdiNodejs, mdiReact, mdiLeaf, mdiGit, mdiMaterialDesign
} from '@mdi/js';
import styles from './skillset.module.css';

const SkillSet = () => {
  return (
    <div className={styles.skills}>
      <h4 className={styles.title}>🚀&nbsp;&nbsp;Skills</h4>
      <div className={styles.skillset}>
        <span className={`${styles.skill} ${styles.android}`}>
         <Icon path={mdiAndroid} size={.75}/>Android
        </span>
        <span className={`${styles.skill} ${styles.kotlin}`}>
         <Icon path={mdiLanguageKotlin} size={.75}/>Kotlin
        </span>
        <span className={`${styles.skill} ${styles.java}`}>
         <Icon path={mdiLanguageJava} size={.75}/>Java
        </span>
        <span className={`${styles.skill} ${styles.python}`}>
         <Icon path={mdiLanguagePython} size={.75}/>Python
        </span>
        <span className={`${styles.skill} ${styles.javascript}`}>
         <Icon path={mdiLanguageJavascript} size={.75}/>JavaScript
        </span>
        <span className={`${styles.skill} ${styles.html}`}>
         <Icon path={mdiLanguageHtml5} size={.75}/>HTLM5
        </span>
        <span className={`${styles.skill} ${styles.css}`}>
         <Icon path={mdiLanguageCss3} size={.75}/>CSS3
        </span>
        <span className={`${styles.skill} ${styles.node}`}>
         <Icon path={mdiNodejs} size={.75}/>Node JS
        </span>
        <span className={`${styles.skill} ${styles.react}`}>
         <Icon path={mdiReact} size={.75}/>React
        </span>
        <span className={`${styles.skill} ${styles.mongo}`}>
         <Icon path={mdiLeaf} size={.75}/>Mongo DB
        </span>
        <span className={`${styles.skill} ${styles.git}`}>
         <Icon path={mdiGit} size={.75}/>Git
        </span>
        <span className={`${styles.skill} ${styles.md}`}>
         <Icon path={mdiMaterialDesign} size={.75}/>Material Design
        </span>
      </div>
    </div>
  );
};

export default SkillSet;
