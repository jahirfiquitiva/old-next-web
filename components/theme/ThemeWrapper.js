import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';
import ThemeContext from '@components/theme/ThemeContext';

const ThemeWrapper = ({ children }) => {
  const { value, toggle } = useDarkMode(false, { onChange: null });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderContent = () => {
    if (!mounted) return (<div style={{ visibility: 'hidden' }}>{children}</div>);
    return children;
  };

  return (
    <ThemeContext.Provider value={{ isDark: !!value, toggleTheme: toggle }}>
      {renderContent()}
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
