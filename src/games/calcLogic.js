import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const task = 'What is the result of the expression?';

const operations = '+-*';

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Error:did not find operation!');
  }
};

const genDataForGame = () => {
  const maxIndex = operations.length - 1;
  const randomIndex = genNumber(0, maxIndex);
  const operation = operations[randomIndex];
  const firstNumber = genNumber(0, 100);
  const secondNumber = genNumber(0, 100);
  const rightAnswer = calculate(firstNumber, secondNumber, operation);
  const question = `${firstNumber} ${operation} ${secondNumber}`;

  return [question, String(rightAnswer)];
};

const runGame = () => {
  runEngineGames(task, genDataForGame);
};

export default runGame;
