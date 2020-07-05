import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const genDataForGame = () => {
  const question = genNumber(0, 100);
  const isNumberEven = (question % 2 === 0);
  const rightAnswer = (isNumberEven) ? 'yes' : 'no';
  return [String(question), String(rightAnswer)];
};

const runGame = () => {
  runEngineGames(task, genDataForGame);
};

export default runGame;
