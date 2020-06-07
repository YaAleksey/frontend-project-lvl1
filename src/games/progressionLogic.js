import loop from '../index.js';

import { generationNumber, gen1To10 } from '../utils.js';

const getLoseElement = () => {
  let result1 = '';
  let result2 = '';
  const genNum1 = generationNumber();
  const genNum2 = gen1To10(0.1, 10);
  const genNum3 = gen1To10(0.1, 10);

  for (let i = genNum1; i < (genNum2 * (genNum3 - 1) + genNum1); i += genNum2) {
    result1 += ` ${String(i)}`;
  }
  for (let j = (genNum2 * genNum3 + genNum1); j <= (genNum2 * 9 + genNum1); j += genNum2) {
    result2 += ` ${String(j)}`;
  }
  const result = ((genNum3 - 1) * genNum2 + genNum1);
  const array = [result, result1, '..', result2,
    'What number is missing in the progression?'];
  return array;
};

const progression = () => {
  loop(getLoseElement);
};

export default progression;
