import { CSSProperties } from 'react';

const buildCustomStyles = (customStyles?: Object): CSSProperties => {
  if (!customStyles) return {};
  // noinspection UnnecessaryLocalVariableJS
  const newStyles = { ...customStyles };
  // @ts-ignore
  return newStyles;
};

export default buildCustomStyles;
