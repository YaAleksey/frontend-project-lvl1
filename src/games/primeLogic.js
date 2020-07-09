import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  let result = (number === 2);
  for (let i = 2; i < number; i += 1) {
    if (number % i !== 0) {
      result = true;
    } else if (number % i === 0) {
      result = false;
      break;
    }
  }
  return result;
};

const genDataForGame = () => {
  const randomNumber = genNumber(0, 100);
  const rightAnswer = (isNumberPrime(randomNumber)) ? 'yes' : 'no';
  const question = randomNumber;
  return [String(question), rightAnswer];
};

const runGame = () => {
  runEngineGames(task, genDataForGame);
};

export default runGame;
