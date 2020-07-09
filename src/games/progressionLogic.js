import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const countElementsProgression = 10;

const makeDataArray = () => {
  let element = genNumber(0, 100);
  const stepForMakeProgression = genNumber(1, 10);
  const indexWithoutElement = genNumber(1, 9);
  const arrayProgression = [];
  for (let i = 0; i < countElementsProgression; i += 1) {
    arrayProgression.push(element);
    element += stepForMakeProgression;
  }
  const rightAnswer = arrayProgression[indexWithoutElement];
  const arrayForQuestion = arrayProgression;
  arrayForQuestion[indexWithoutElement] = '...';
  return [rightAnswer, arrayForQuestion];
};

const genDataForGame = () => {
  const [rightAnswer, arrayForQuestion] = makeDataArray();
  const question = arrayForQuestion.join(', ');
  return [question, String(rightAnswer)];
};

const runGame = () => {
  runEngineGames(task, genDataForGame);
};

export default runGame;
