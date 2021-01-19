const getRandomItemFrom = (items: any[]) => {
  return items[Math.floor(Math.random() * items.length)];
};

export default getRandomItemFrom;
