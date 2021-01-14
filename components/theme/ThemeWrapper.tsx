import useDarkMode from 'use-dark-mode';
import { ComponentWithChildren } from '@components/types';
import ThemeContext from '@components/theme/ThemeContext';

const ThemeWrapper = ({ children }: ComponentWithChildren) => {
  const { value, toggle } = useDarkMode(false, { onChange: undefined });
  // noinspection PointlessBooleanExpressionJS
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
