import readlineSync from 'readline-sync';

let name = '';

export const sayHi = () => {
  console.log('Welcome to The Brain-games!');
  name = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${name}!`);
};

export const loseAnswer = () => {
  console.log(`Let's try again, ${name}!`);
};

export const winAnswer = () => {
  console.log(`Congratulations, ${name}`);
};

export const loop = (funct) => {
  for (let i = 0; i < 3; i += 1) {
    const array = funct();
    const answerFromGamer = readlineSync.question('You answer:  ');
    if (answerFromGamer === String(array[0])) {
      console.log('Correct!');
    } else if (answerFromGamer !== String(array[0])) {
      console.log(`${answerFromGamer} is wrong answer ;(. Correct answer was ${array[0]}.`);
      return loseAnswer();
    }
  }
  return winAnswer();
};
