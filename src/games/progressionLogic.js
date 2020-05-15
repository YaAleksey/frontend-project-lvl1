import readlineSync from 'readline-sync';

import * as index from '../index.js';

const generationNumber = () => Math.round(Math.random() * 100);
let result = '';
let result1 = '';
let result2 = '';

const gen1to10 = (min, max) => {
  const min2 = Math.ceil(min);
  const max2 = Math.floor(max);
  return Math.round(Math.random() * (max2 - min2)) + min2;
};

const logicProgression = () => {
  const genNum1 = generationNumber();
  const genNum2 = gen1to10(0.1, 10);
  const genNum3 = gen1to10(0.1, 10);

  for (let i = genNum1; i < (genNum2 * (genNum3 - 1) + genNum1); i += genNum2) {
    result1 += ` ${String(i)}`;
  }
  for (let j = (genNum2 * genNum3 + genNum1); j <= (genNum2 * 9 + genNum1); j += genNum2) {
    result2 += ` ${String(j)}`;
  }
  result = ((genNum3 - 1) * genNum2 + genNum1);
  console.log(`Question:${result1} ..${result2}`);
  result1 = '';
  result2 = '';
};

const progression = () => {
  index.sayHi();
  index.taskForProgression();
  for (let h = 0; h < 3; h += 1) {
    logicProgression();
    const answerOfProgression = readlineSync.question('You answer:  ');
    if (answerOfProgression === String(result)) {
      console.log('Correct!');
    } else if (answerOfProgression !== String(result)) {
      console.log(`${answerOfProgression} is wrong answer ;(. Correct answer was ${result}.`);
      return index.loseAnswer();
    }
  }
  return index.winAnswer();
};

export default progression;
