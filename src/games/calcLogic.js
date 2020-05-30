import * as index from '../index.js';

const generationNumber = () => Math.round(Math.random() * 100);

const getRandom = () => Math.floor(Math.random() * 3 + 1);

let result = 0;
let array = [];

const logicOfCalc = () => {
  const countFirstGenNumber = generationNumber();
  const countSecondGenNumber = generationNumber();
  const i = getRandom();
  const str = ' +-*';

  if (str[i] === '-') {
    result = countFirstGenNumber - countSecondGenNumber;
  } if (str[i] === '+') {
    result = countFirstGenNumber + countSecondGenNumber;
  } if (str[i] === '*') {
    result = countFirstGenNumber * countSecondGenNumber;
  }
  array = [result];
  console.log(`Question: ${countFirstGenNumber} ${str[i]}  ${countSecondGenNumber}`);
  return array;
};

const dialogWithGamerCalc = () => {
  index.sayHi();
  console.log('What is the result of the expression?');
  index.loop(logicOfCalc);
};

export default dialogWithGamerCalc;
