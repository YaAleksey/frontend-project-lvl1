import readlineSync from 'readline-sync';

import * as index from '../index.js';

const generationNumber = () => Math.round(Math.random() * 100);

const getRandom = () => Math.floor(Math.random() * 3 + 1);

let result = 0;

const logicOfCalc = () => {
  const countFirstGenNumber = generationNumber();
  const countSecondGenNumber = generationNumber();
  const i = getRandom();
  const str = ' +-*';

  if (str[i] === '-') {
    result = countFirstGenNumber - countSecondGenNumber;
    return console.log(`Question: ${countFirstGenNumber} - ${countSecondGenNumber}`);
  } if (str[i] === '+') {
    result = countFirstGenNumber + countSecondGenNumber;
    return console.log(`Question: ${countFirstGenNumber} + ${countSecondGenNumber}`);
  }
  result = countFirstGenNumber * countSecondGenNumber;
  return console.log(`Question: ${countFirstGenNumber} * ${countSecondGenNumber}`);
};

const dialogWithGamerCalc = () => {
  index.sayHi();
  index.taskForCalc();
  for (let j = 0; j < 3; j += 1) {
    logicOfCalc();
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

export default dialogWithGamerCalc;
