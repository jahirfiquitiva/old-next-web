import React from 'react';
import MDIcon from '../../base/mdi/mdicon';

const skillSet = [
  {
    icon: 'android',
    name: 'Android',
  },
  {
    icon: 'language-kotlin',
    name: 'Kotlin',
  },
  {
    icon: 'language-java',
    name: 'Java',
  },
  {
    icon: 'language-python',
    name: 'Python',
  },
  {
    icon: 'language-javascript',
    name: 'JavaScript',
  },
  {
    icon: 'language-html5',
    name: 'HTML5',
  },
  {
    icon: 'language-css3',
    name: 'CSS3',
  },
  {
    icon: 'nodejs',
    name: 'NodeJS',
  },
  {
    icon: 'react',
    name: 'React',
  },
  {
    icon: 'gatsby',
    name: 'Gatsby',
  },
  {
    icon: 'database',
    name: 'MySQL',
  },
  {
    icon: 'leaf',
    name: 'MongoDB',
  },
  {
    icon: 'git',
    name: 'Git',
  },
  {
    icon: 'material-design',
    name: 'Material Design',
  },
];

const Skills = () => (
  <div className={'has-text-centered'}>
    <h2 className={'has-text-shadow is-red'}>Skills 🚀</h2>
    <br/><br/><br/>
    <div className={'tags skills are-large'}>
      {skillSet.map((it, i) => (
        <span className={`tag is-rounded is-${it.icon}`} key={i}>
          <MDIcon size={42} iconName={it.icon} aria-hidden={true}/>
          <p className={'is-manrope has-text-weight-medium'}>{it.name}</p>
        </span>
      ))}
    </div>
  </div>
);

export default Skills;
