import * as index from '../index.js';

const generationNumber = () => Math.round(Math.random() * 100);

let result = 0;
let divisor = 0;
let firstGenNum = 0;
let secondGenNum = 0;
let array = [];

const logicOfGcd = () => {
  firstGenNum = generationNumber();
  secondGenNum = generationNumber();
  if (firstGenNum === secondGenNum || firstGenNum < secondGenNum) {
    divisor = firstGenNum;
  } else {
    divisor = secondGenNum;
  }
  for (let i = divisor; i > 0; i -= 1) {
    if (firstGenNum % i === 0 && secondGenNum % i === 0) {
      result = i;
      break;
    }
  }
  array = [result];
  console.log(`Question: ${firstGenNum}  ${secondGenNum}`);
  return array;
};

const gcd = () => {
  index.sayHi();
  console.log('Find the greatest common divisor of given numbers.');
  index.loop(logicOfGcd);
};

export default gcd;
