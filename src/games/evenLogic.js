import loop from '../index.js';

import { generationNumber } from '../utils.js';

const getEvenStatus = () => {
  const genNumber = generationNumber();
  const checkForEven = (genNumber % 2 === 0);
  const result = (checkForEven) ? 'yes' : 'no';
  const array = [result, genNumber, '', '',
    'Answer "yes" if the number is even, otherwise answer "no".'];
  return array;
};

const dialogWithGamer = () => {
  loop(getEvenStatus);
};

export default dialogWithGamer;
