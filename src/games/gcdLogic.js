import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const isMaxDivisor = (number1, number2) => {
  const divisorForStart = (number1 === number2 || number1 < number2)
    ? number1 : number2;
  for (let i = divisorForStart; i > 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  }
  return 1;
};

const genDataForGame = () => {
  const firstNumber = genNumber(0, 100);
  const secondNumber = genNumber(0, 100);
  const rightAnswer = isMaxDivisor(firstNumber, secondNumber);
  const question = `${firstNumber}   ${secondNumber}`;
  return [question, String(rightAnswer)];
};

const runGame = () => {
  runEngineGames(task, genDataForGame);
};

export default runGame;
