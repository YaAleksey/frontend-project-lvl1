import readlineSync from 'readline-sync';

import * as index from '../index.js';

const generationNumber = () => Math.round(Math.random() * 100);

let result = 0;
let divisor = 0;
let firstGenNum = 0;
let secondGenNum = 0;

const findDivisor = () => {
  firstGenNum = generationNumber();
  secondGenNum = generationNumber();
  if (firstGenNum === secondGenNum || firstGenNum < secondGenNum) {
    divisor = firstGenNum;
  } else {
    divisor = secondGenNum;
  }
  return divisor;
};

const logicOfGcd = () => {
  findDivisor();
  console.log(`Question: ${firstGenNum}  ${secondGenNum}`);
  for (let i = divisor; i > 0; i -= 1) {
    if (firstGenNum % i === 0 && secondGenNum % i === 0) {
      result = i;
      return result;
    }
  }
  return result;
};

const gcd = () => {
  index.sayHi();
  index.taskForGcd();
  for (let j = 0; j < 3; j += 1) {
    logicOfGcd();
    const answerOfCalc = readlineSync.question('You answer:  ');
    if (answerOfCalc === String(result)) {
      console.log('Correct!');
    } else if (answerOfCalc !== String(result)) {
      console.log(`${answerOfCalc} is wrong answer ;(. Correct answer was ${result}.`);
      return index.loseAnswer();
    }
  }
  return index.winAnswer();
};

export default gcd;
