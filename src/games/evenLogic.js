import readlineSync from 'readline-sync';

import * as index from '../index.js';

const generationNumber = () => Math.round(Math.random() * 100);

const dialogWithGamer = () => {
  index.sayHi();
  index.taskForEven();
  for (let i = 0; i < 3; i += 1) {
    const countGenNumber = generationNumber();
    const checkForEven = countGenNumber % 2;
    console.log(`Question: ${String(countGenNumber)}`);
    const answer = readlineSync.question('You answer: ');

    if ((checkForEven === 0 && answer === 'yes') || (checkForEven !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (answer === 'yes') {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      return index.loseAnswer();
    } else if (answer === 'no') {
      console.log('"no" is wrong answer ;(. Correct answer was "yes".');
      return index.loseAnswer();
    } else return index.loseAnswer();
  }
  return index.winAnswer();
};

export default dialogWithGamer;
