import readlineSync from 'readline-sync';

import * as index from '../index.js';

const generationNumber = () => Math.round(Math.random() * 100);

let result = '';

const logicForFindPrimrNum = () => {
  const num = generationNumber();
  if (num === 0 || num === 1) {
    result = 'no';
  } else if (num === 2) {
    result = 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i !== 0) {
      result = 'yes';
    } else if (num % i === 0) {
      console.log(`Question: ${num}?`);
      result = 'no';
      return result;
    }
  }
  console.log(`Question: ${num}?`);
  return result;
};

const findPrimeNum = () => {
  index.sayHi();
  index.taskForPrime();
  for (let j = 0; j < 3; j += 1) {
    logicForFindPrimrNum();
    const answerOfPrime = readlineSync.question('You answer:  ');
    if (answerOfPrime === result) {
      console.log('Correct!');
    } else if (answerOfPrime !== result) {
      return index.loseAnswer();
    }
  }
  return index.winAnswer();
};

export default findPrimeNum;
