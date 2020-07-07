const getColorFromData = (data, isDark) => {
  if (!data) return null;
  const {
    lightVibrant: colorLight = null,
    vibrant: color = null,
  } = data;
  return (isDark ? colorLight : color) || color;
};

export default getColorFromData;
