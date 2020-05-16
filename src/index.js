import readlineSync from 'readline-sync';

let name = '';

export const sayHi = () => {
  console.log('Welcome to The Brain-games!');
  name = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${name}!`);
};

export const taskForEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const loseAnswer = () => {
  console.log(`Let's try again, ${name}!`);
};

export const winAnswer = () => {
  console.log(`Congratulations, ${name}`);
};

export const taskForCalc = () => {
  console.log('What is the result of the expression?');
};

export const taskForGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export const taskForProgression = () => {
  console.log('What number is missing in the progression?');
};

export const taskForPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};
