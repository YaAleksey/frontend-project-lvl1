import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  const maxDivisor = Math.max(number1, number2);
  for (let divisor = maxDivisor; divisor >= 2; divisor -= 1) {
    if (number1 % divisor === 0 && number2 % divisor === 0) {
      return divisor;
    }
  }
  return 1;
};

const genDataForGame = () => {
  const firstNumber = genNumber(0, 100);
  const secondNumber = genNumber(0, 100);
  const rightAnswer = getGCD(firstNumber, secondNumber);
  const question = `${firstNumber}   ${secondNumber}`;
  return [question, String(rightAnswer)];
};

const runGame = () => {
  runEngineGames(task, genDataForGame);
};

export default runGame;
