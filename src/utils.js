export const generationNumber = () => Math.round(Math.random() * 100);

export const getRandomFromOneToThree = () => Math.floor(Math.random() * 3 + 1);

export const gen1To10 = (min, max) => {
  const min2 = Math.ceil(min);
  const max2 = Math.floor(max);
  return Math.round(Math.random() * (max2 - min2)) + min2;
};
