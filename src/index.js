import readlineSync from 'readline-sync';

let sayHi  = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
};

export default sayHi;
