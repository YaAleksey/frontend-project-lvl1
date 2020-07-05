import readlineSync from 'readline-sync';

const runEngineGames = (funct) => {
  console.log('Welcome to The Brain-games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let array = funct();
  console.log(`${array[4]}`);
  for (let i = 0; i < 3; i += 1) {
    console.log(`Question: ${array[1]} ${array[2]} ${array[3]}`);
    const answerFromGamer = readlineSync.question('You answer:  ');
    if (answerFromGamer === String(array[0])) {
      console.log('Correct!');
      array = funct();
    } else if (answerFromGamer !== String(array[0])) {
      console.log(`${answerFromGamer} is wrong answer ;(. Correct answer was ${array[0]}.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

export default runEngineGames;
