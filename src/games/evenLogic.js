import runEngineGames from '../index.js';

import { genNumber } from '../utils.js';

const genDataForGame = () => {
  const randomNumber = genNumber(0, 100);
  const isNumberEven = (randomNumber % 2 === 0);
  const rightAnswer = (isNumberEven) ? 'yes' : 'no';
  const array = [rightAnswer, randomNumber, '', '',
    'Answer "yes" if the number is even, otherwise answer "no".'];
  return array;
};

const runGame = () => {
  runEngineGames(genDataForGame);
};

export default runGame;
