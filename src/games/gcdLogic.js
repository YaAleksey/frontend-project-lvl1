import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const genDataForGame = () => {
  const firstGenNum = genNumber(0, 100);
  const secondGenNum = genNumber(0, 100);
  let rightAnswer = 0;
  const findLeastNumber = (firstGenNum === secondGenNum || firstGenNum < secondGenNum);
  const divisorForStart = (findLeastNumber) ? firstGenNum : secondGenNum;
  for (let i = divisorForStart; i > 0; i -= 1) {
    if (firstGenNum % i === 0 && secondGenNum % i === 0) {
      rightAnswer = i;
      break;
    }
  }
  const array = [rightAnswer, firstGenNum, secondGenNum, '',
    'Find the greatest common divisor of given numbers.'];
  return array;
};

const runGame = () => {
  runEngineGames(genDataForGame);
};

export default runGame;
