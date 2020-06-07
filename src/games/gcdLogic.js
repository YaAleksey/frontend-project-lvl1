import loop from '../index.js';

import { generationNumber } from '../utils.js';

const getMaxDivisor = () => {
  const firstGenNum = generationNumber();
  const secondGenNum = generationNumber();
  let result = 0;
  const pointForStartDivisor = (firstGenNum === secondGenNum || firstGenNum < secondGenNum);
  const divisor = (pointForStartDivisor) ? firstGenNum : secondGenNum;
  for (let i = divisor; i > 0; i -= 1) {
    if (firstGenNum % i === 0 && secondGenNum % i === 0) {
      result = i;
      break;
    }
  }
  const array = [result, firstGenNum, secondGenNum, '',
    'Find the greatest common divisor of given numbers.'];
  return array;
};

const gcd = () => {
  loop(getMaxDivisor);
};

export default gcd;
