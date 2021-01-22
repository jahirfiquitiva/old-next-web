// @ts-ignore
import { Color } from 'frostcolor';

const getAnalogousColors = (color?: string | null): string[] => {
  if (!color) return [];
  const myColor = Color.fromString(color);
  return myColor.analogous().map((col: Color) => col.toHexString());
};

export default getAnalogousColors;
