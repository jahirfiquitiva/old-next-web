export default async (...args) => {
  // noinspection JSCheckFunctionSignatures
  const res = await fetch(...args);
  return res.json();
};
