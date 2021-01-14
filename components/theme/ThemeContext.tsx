import { createContext } from 'react';
import { nofunc } from '@components/types';

interface ThemeContextProps {
  isDark: boolean,
  toggleTheme: (newTheme: boolean) => void,
}

const defaultImplementation: ThemeContextProps = {
  isDark: false,
  toggleTheme: nofunc,
};

const ThemeContext = createContext<ThemeContextProps>(defaultImplementation);

export default ThemeContext;
