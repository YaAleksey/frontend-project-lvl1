import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const genDataForGame = () => {
  const question = genNumber(0, 100);
  const rightAnswer = (isNumberPrime(question)) ? 'yes' : 'no';
  return [String(question), rightAnswer];
};

const runGame = () => {
  runEngineGames(task, genDataForGame);
};

export default runGame;
