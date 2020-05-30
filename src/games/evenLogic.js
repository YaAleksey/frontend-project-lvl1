import * as index from '../index.js';

const generationNumber = () => Math.round(Math.random() * 100);
let array = [];

const logicForEven = () => {
  const genNumber = generationNumber();
  const result = (genNumber % 2 === 0) ? 'yes' : 'no';
  array = [result];
  console.log(`Question: ${genNumber}`);
  return array;
};

const dialogWithGamer = () => {
  index.sayHi();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  index.loop(logicForEven);
};

export default dialogWithGamer;
