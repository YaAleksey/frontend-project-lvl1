import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const genDataForGame = () => {
  const firstNumber = genNumber(0, 100);
  const secondNumber = genNumber(0, 100);
  let rightAnswer = 0;
  const divisorForStart = (firstNumber === secondNumber || firstNumber < secondNumber)
    ? firstNumber : secondNumber;
  for (let i = divisorForStart; i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      rightAnswer = i;
      break;
    }
  }
  const question = `${firstNumber}   ${secondNumber}`;
  return [String(question), String(rightAnswer)];
};

const runGame = () => {
  runEngineGames(task, genDataForGame);
};

export default runGame;
