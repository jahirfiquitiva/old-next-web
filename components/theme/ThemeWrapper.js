import useDarkMode from 'use-dark-mode';
import ThemeContext from '@components/theme/ThemeContext';

const ThemeWrapper = ({ children }) => {
  const { value, toggle } = useDarkMode(false, { onChange: null });
  return (
    <ThemeContext.Provider value={{
      isDark: !!value,
      toggleTheme: toggle,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
