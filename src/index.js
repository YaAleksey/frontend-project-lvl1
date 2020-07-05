import readlineSync from 'readline-sync';

const runEngineGames = (task, funct) => {
  console.log('Welcome to The Brain-games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${task}`);
  const quentionRounds = 3;
  for (let i = 0; i < quentionRounds; i += 1) {
    const array = funct();
    console.log(`Question: ${array[0]}`);
    const answerFromGamer = readlineSync.question('You answer:  ');
    if (answerFromGamer === array[1]) {
      console.log('Correct!');
    } else if (answerFromGamer !== array[1]) {
      console.log(`${answerFromGamer} is wrong answer ;(. Correct answer was ${array[1]}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}`);
};

export default runEngineGames;
