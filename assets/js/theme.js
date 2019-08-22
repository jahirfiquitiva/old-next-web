const toggleSwitch = document.getElementById('theme-switch');
const initialThemeSwitchHTML = '<span class="mdi ';
const finalThemeSwitchHTML = '"></span>&nbsp;&nbsp;';
const currentThemeId = 'jahir-fiquitiva-theme';
let currentTheme = 'light';
try {
  currentTheme = localStorage.getItem(currentThemeId) || 'light';
} catch (e) {
  currentTheme = 'light';
}

const setupLogo = () => {
  let date = new Date();
  let month = date.getMonth() + 1;
  let logo = document.getElementById('logo');
  let logoName = currentTheme === 'light' ? 'def' : 'def-dark';
  // TODO: Add more month-styled logos
  if (month === 6) logoName = '6';
  if (logo) {
    logo.setAttribute('src', './assets/images/brand/logo-' + logoName + '.svg');
    logo.setAttribute('onerror',
      'this.onerror=null;' +
      'this.src=\'./assets/images/brand/logo-' + logoName + '.png\'');
  }
  let copy = document.getElementById('copyright-notice');
  if (copy) copy.innerHTML = `Copyright © ${date.getFullYear()} | All Rights Reserved`;
};

function updateThemeSwitch() {
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      document.querySelector('meta[name=\'theme-color\']').setAttribute('content', '#020409');
      document.body.classList.add('is-dark');
    } else {
      document.querySelector('meta[name=\'theme-color\']').setAttribute('content', '#ebf0fb');
      document.body.classList.remove('is-dark');
    }
    try {
      const iconName = currentTheme === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-weather-night';
      const otherThemeName = currentTheme === 'dark' ? 'Light' : 'Dark';
      toggleSwitch.innerHTML =
        `${initialThemeSwitchHTML}${iconName}${finalThemeSwitchHTML}${otherThemeName} Theme`;
    } catch (e) {
    }
    try {
      setupLogo();
    } catch (e) {
    }
  }
}

function switchTheme() {
  localStorage.setItem(currentThemeId, currentTheme === 'light' ? 'dark' : 'light');
  currentTheme = localStorage.getItem(currentThemeId);
  updateThemeSwitch();
}

updateThemeSwitch();
