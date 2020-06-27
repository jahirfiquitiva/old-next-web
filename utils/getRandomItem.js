const getRandomItemFrom = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

export default getRandomItemFrom;
