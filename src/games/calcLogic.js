import loop from '../index.js';

import { generationNumber, getRandomFromOneToThree } from '../utils.js';

const getValuesForCalcGame = () => {
  const countFirstGenNumber = generationNumber();
  const countSecondGenNumber = generationNumber();
  let result = 0;
  const i = getRandomFromOneToThree();
  const str = ' +-*';

  if (str[i] === '-') {
    result = countFirstGenNumber - countSecondGenNumber;
  } if (str[i] === '+') {
    result = countFirstGenNumber + countSecondGenNumber;
  } if (str[i] === '*') {
    result = countFirstGenNumber * countSecondGenNumber;
  }
  const array = [result, countFirstGenNumber, str[i], countSecondGenNumber,
    'What is the result of the expression?'];
  return array;
};

const dialogWithGamerCalc = () => {
  loop(getValuesForCalcGame);
};

export default dialogWithGamerCalc;
