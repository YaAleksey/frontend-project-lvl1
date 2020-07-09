import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => (number % 2 === 0);

const genDataForGame = () => {
  const question = genNumber(0, 100);
  const rightAnswer = (isNumberEven(question)) ? 'yes' : 'no';
  return [String(question), rightAnswer];
};

const runGame = () => {
  runEngineGames(task, genDataForGame);
};

export default runGame;
