import runEngineGames from '../index.js';

import { genNumber } from '../utils.js';

const genDataForGame = () => {
  const randomNumber = genNumber(0, 100);
  const checkZeroOrOne = (randomNumber === 0 || randomNumber === 1);
  let isNumberPrime = (checkZeroOrOne) ? false : '';
  isNumberPrime = (randomNumber === 2);
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i !== 0) {
      isNumberPrime = true;
    } else if (randomNumber % i === 0) {
      isNumberPrime = false;
      break;
    }
  }
  const rightAnswer = (isNumberPrime) ? 'yes' : 'no';
  const array = [rightAnswer, 'number is', randomNumber, '',
    'Answer "yes" if given number is prime. Otherwise answer "no".'];
  return array;
};

const runGame = () => {
  runEngineGames(genDataForGame);
};

export default runGame;
