import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const genDataForGame = () => {
  const randomNumber = genNumber(0, 100);
  let isNumberPrime = (randomNumber === 2);
  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i !== 0) {
      isNumberPrime = true;
    } else if (randomNumber % i === 0) {
      isNumberPrime = false;
      break;
    }
  }
  const rightAnswer = (isNumberPrime) ? 'yes' : 'no';
  const question = randomNumber;
  return [String(question), String(rightAnswer)];
};

const runGame = () => {
  runEngineGames(task, genDataForGame);
};

export default runGame;
