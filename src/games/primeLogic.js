import * as index from '../index.js';

const generationNumber = () => Math.round(Math.random() * 100);

let rightAnswer = '';
let array = [];

const logicForFindPrimeNum = () => {
  const num = generationNumber();
  if (num === 0 || num === 1) {
    rightAnswer = 'no';
  } else if (num === 2) {
    rightAnswer = 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i !== 0) {
      rightAnswer = 'yes';
    } else if (num % i === 0) {
      rightAnswer = 'no';
      break;
    }
  }
  array = [rightAnswer];
  console.log(`number is: ${num}`);
  return array;
};

const findPrimeNum = () => {
  index.sayHi();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  index.loop(logicForFindPrimeNum);
};

export default findPrimeNum;
