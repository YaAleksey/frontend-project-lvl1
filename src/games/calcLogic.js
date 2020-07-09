import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const task = 'What is the result of the expression?';

const operations = '+-*';

const isAnswerCalcOperation = (number1, number2) => {
  const maxIndex = operations.length - 1;
  const randomIndex = genNumber(0, maxIndex);
  let result = 0;
  const arrayCount = [];
  switch (operations[randomIndex]) {
    case '-':
      result = number1 - number2;
      break;
    case '+':
      result = number1 + number2;
      break;
    default:
      result = number1 * number2;
      break;
  }
  arrayCount.push(result, operations[randomIndex]);
  return arrayCount;
};

const genDataForGame = () => {
  const firstNumber = genNumber(0, 100);
  const secondNumber = genNumber(0, 100);
  const [rightAnswer, operation] = isAnswerCalcOperation(firstNumber, secondNumber);
  const question = `${firstNumber} ${operation} ${secondNumber}`;

  return [question, String(rightAnswer)];
};

const runGame = () => {
  runEngineGames(task, genDataForGame);
};

export default runGame;
