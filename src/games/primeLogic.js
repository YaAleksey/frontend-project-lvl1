import loop from '../index.js';

import { generationNumber } from '../utils.js';

const getStatusPrimeNum = () => {
  const num = generationNumber();
  const checkZeroOrOne = (num === 0 || num === 1);
  let rightAnswer = (checkZeroOrOne) ? false : '';
  rightAnswer = (num === 2);
  for (let i = 2; i < num; i += 1) {
    if (num % i !== 0) {
      rightAnswer = true;
    } else if (num % i === 0) {
      rightAnswer = false;
      break;
    }
  }
  const result = (rightAnswer) ? 'yes' : 'no';
  const array = [result, 'number is', num, '',
    'Answer "yes" if given number is prime. Otherwise answer "no".'];
  return array;
};

const findPrimeNum = () => {
  loop(getStatusPrimeNum);
};

export default findPrimeNum;
