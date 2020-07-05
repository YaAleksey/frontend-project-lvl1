import runEngineGames from '../index.js';

import { genNumber } from '../utils.js';

const genDataForGame = () => {
  let firstPartProgression = '';
  let secondPartProgression = '';
  const startNumber = genNumber(0, 100);
  const stepForMakeProgression = genNumber(1, 10);
  const indexWithoutElement = genNumber(1, 10);

  for (let i = startNumber; i < (stepForMakeProgression * (indexWithoutElement - 1) + startNumber);
    i += stepForMakeProgression) {
    firstPartProgression += ` ${String(i)}`;
  }
  for (let j = (stepForMakeProgression * indexWithoutElement + startNumber); 
    j <= (stepForMakeProgression * 9 + startNumber); j += stepForMakeProgression) {
    secondPartProgression += ` ${String(j)}`;
  }
  const rightAnswer = ((indexWithoutElement - 1) * stepForMakeProgression + startNumber);
  const array = [rightAnswer, firstPartProgression, '..', secondPartProgression,
    'What number is missing in the progression?'];
  return array;
};

const runGame = () => {
  runEngineGames(genDataForGame);
};

export default runGame;
