import { PaletteColors } from 'react-palette';

export interface ColorData {
  vibrant?: string;
  lightVibrant?: string;
}

const getColorFromData = (
  data?: PaletteColors | null,
  isDark?: boolean,
  darkColor?: string | null
) => {
  if (!data) return null;
  if (isDark && darkColor) return darkColor;
  const { lightVibrant: colorLight = null, vibrant: color = null } = data;
  return (isDark ? colorLight : color) || color;
};

export default getColorFromData;
