import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngineGames = (task, genDataForGame) => {
  console.log('Welcome to The Brain-games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${task}`);
  for (let i = 0; i < roundsCount; i += 1) {
    const array = genDataForGame();
    const [dataForQuestion, rightAnswer] = array;
    console.log(`Question: ${dataForQuestion}`);
    const answerFromGamer = readlineSync.question('You answer:  ');
    if (answerFromGamer !== rightAnswer) {
      console.log(`${answerFromGamer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}`);
};

export default runEngineGames;
