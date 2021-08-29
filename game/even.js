/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import player from '../src/cli.js';

// Let's begin!
const showtest = (str) => console.log(str);

const check = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const someNum = (num = 100) => Math.floor(Math.random() * num);

const quest = () => {
  showtest('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 3; i > 0; i -= 1) {
    const numIn = someNum();

    if (check(numIn)) {
      showtest(`Question: ${numIn}`);
      const yourAnsYes = readlineSync.question('Your answer: ').toLowerCase();

      if (yourAnsYes === 'yes') {
        showtest('Correct!');
      } else {
        showtest(`'${yourAnsYes}' is wrong answer ;(. Correct answer was 'yes'.`);
        return showtest(`Let's try again, ${player}!`);
      }
    } else {
      showtest(`Question: ${numIn}`);
      const yourAnsNo = readlineSync.question('Your answer: ').toLowerCase();

      if (yourAnsNo === 'no') {
        showtest('Correct!');
      } else {
        showtest(`'${yourAnsNo}' is wrong answer ;(. Correct answer was 'no'.`);
        return showtest(`Let's try again, ${player}!`);
      }
    }
  }
  return showtest(`Congratulations, ${player}!`);
};

export { quest, check };
