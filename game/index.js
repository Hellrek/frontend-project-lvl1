/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import player from '../src/cli.js';

// Let's begin!
const check = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const someNum = (num = 100) => Math.floor(Math.random() * num);

const quest = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 3; i > 0; i -= 1) {
    const numIn = someNum();

    if (check(numIn)) {
      console.log(`Question: ${numIn}?`);
      const yourAnsYes = readlineSync.question('Your answer: ').toLowerCase();

      if (yourAnsYes === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`- "${yourAnsYes}" is wrong answer ;(. Correct answer was "yes"!`);
        return console.log(`Let's try again, ${player}.`);
      }
    } else {
      console.log(`Question: ${numIn}?`);
      const yourAnsNo = readlineSync.question('Your answer: ').toLowerCase();

      if (yourAnsNo === 'no') {
        console.log('Correct!');
      } else {
        console.log(`- "${yourAnsNo}" is wrong answer ;(. Correct answer was "no"!`);
        return console.log(`Let's try again, ${player}.`);
      }
    }
  }
  return console.log(`Congratulations, ${player}!`);
};

export { quest, check };
