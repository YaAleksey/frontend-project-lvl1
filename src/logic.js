import readlineSync from 'readline-sync';

const generationNumber = () => { return Math.round(Math.random() * 100); };

const dialogWithGamer = () => {

  const name = readlineSync.question('May I have your name? ');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {

    const countGenNumber = generationNumber();
    const checkForEven = countGenNumber % 2;
    console.log(`Question: ${String(countGenNumber)}`);
    const question = readlineSync.question('You answer: ');

    if ((checkForEven === 0 && question === 'yes') || (checkForEven !== 0 && question === 'no')) {

      console.log('Correct!');

    } else if (question === 'yes') {

      return console.log(`"yes" is wrong answer ;(. Correct answer was "no". Let's try again, ${name}!`);

    } else if (question === 'no') {

      return console.log(`"no" is wrong answer ;(. Correct answer was "yes". Let's try again, ${name}!`);

    } else return console.log(`Let's try again, ${name}!`);

  }

  return console.log(`Congratulations, ${name}`);

};

export default dialogWithGamer;
