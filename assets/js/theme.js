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

function updateThemeSwitch() {
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
      document.body.classList.add('is-dark');
    } else {
      document.body.classList.remove('is-dark');
    }
    try {
      const iconName = currentTheme === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-weather-night';
      const otherThemeName = currentTheme === 'dark' ? 'Light' : 'Dark';
      toggleSwitch.innerHTML =
        `${initialThemeSwitchHTML}${iconName}${finalThemeSwitchHTML}${otherThemeName} Theme`;
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
