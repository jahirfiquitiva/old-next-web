// eslint-disable-next-line no-undef
const Fetcher = async (...args: Parameters<typeof fetch>) => {
  const res = await fetch(...args);
  return res.json();
};

export default Fetcher;
