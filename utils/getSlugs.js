const getSlugs = (context) => {
  const keys = context.keys();
  const data = keys.map((key, index) => {
    return key.replace(/^.*[\\\/]/, '').slice(0, -3);
  });
  return data;
};

export default getSlugs;
