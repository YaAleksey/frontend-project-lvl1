import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const genDataForGame = () => {
  const countFirstGenNumber = genNumber(0, 100);
  const countSecondGenNumber = genNumber(0, 100);
  let rightAnswer = 0;
  const randomIndex = genNumber(0, 2);
  const setOperations = '+-*';

  if (setOperations[randomIndex] === '-') {
    rightAnswer = countFirstGenNumber - countSecondGenNumber;
  } if (setOperations[randomIndex] === '+') {
    rightAnswer = countFirstGenNumber + countSecondGenNumber;
  } if (setOperations[randomIndex] === '*') {
    rightAnswer = countFirstGenNumber * countSecondGenNumber;
  }
  const array = [rightAnswer, countFirstGenNumber, setOperations[randomIndex],
    countSecondGenNumber, 'What is the result of the expression?'];
  return array;
};

const runGame = () => {
  runEngineGames(genDataForGame);
};

export default runGame;
