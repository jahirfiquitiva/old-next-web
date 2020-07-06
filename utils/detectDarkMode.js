const detectDarkMode = () => {
  try {
    return window ? window.matchMedia('(prefers-color-scheme: dark)').matches || false : false;
  } catch (e) {
    return false;
  }
};

export default detectDarkMode;
