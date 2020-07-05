import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const task = 'What is the result of the expression?';

const genDataForGame = () => {
  const firstNumber = genNumber(0, 100);
  const secondNumber = genNumber(0, 100);
  let rightAnswer = 0;
  const randomIndex = genNumber(0, 2);
  const setOperations = '+-*';

  if (setOperations[randomIndex] === '-') {
    rightAnswer = firstNumber - secondNumber;
  } if (setOperations[randomIndex] === '+') {
    rightAnswer = firstNumber + secondNumber;
  } if (setOperations[randomIndex] === '*') {
    rightAnswer = firstNumber * secondNumber;
  }
  const question = `${firstNumber} ${setOperations[randomIndex]} ${secondNumber}`;

  return [String(question), String(rightAnswer)];
};

const runGame = () => {
  runEngineGames(task, genDataForGame);
};

export default runGame;
