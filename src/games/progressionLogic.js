import runEngineGames from '../index.js';

import genNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const makeProgression = (element, step, progressionLength) => {
  const progression = [];
  let elementProgression = element;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(elementProgression);
    elementProgression += step;
  }
  return progression;
};

const genDataForGame = () => {
  const progressionLength = 10;
  const element = genNumber(0, 100);
  const step = genNumber(1, 10);
  const hiddenElementIndex = genNumber(0, progressionLength - 1);
  const progression = makeProgression(element, step, progressionLength);
  const rightAnswer = progression[hiddenElementIndex];
  progression[hiddenElementIndex] = '...';
  const question = progression.join(', ');

  return [question, String(rightAnswer)];
};

const runGame = () => {
  runEngineGames(task, genDataForGame);
};

export default runGame;
