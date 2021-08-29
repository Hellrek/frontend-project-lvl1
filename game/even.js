/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import player from '../src/cli.js';
import { printText, someNum } from './src.js';
// Let's begin!

const check = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const runGame = () => {
  printText('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 3; i > 0; i -= 1) {
    const numIn = someNum();

    if (check(numIn)) {
      printText(`Question: ${numIn}`);
      const yourAnsYes = readlineSync.question('Your answer: ').toLowerCase();

      if (yourAnsYes === 'yes') {
        printText('Correct!');
      } else {
        printText(`'${yourAnsYes}' is wrong answer ;(. Correct answer was 'yes'.`);
        return printText(`Let's try again, ${player}!`);
      }
    } else {
      printText(`Question: ${numIn}`);
      const yourAnsNo = readlineSync.question('Your answer: ').toLowerCase();

      if (yourAnsNo === 'no') {
        printText('Correct!');
      } else {
        printText(`'${yourAnsNo}' is wrong answer ;(. Correct answer was 'no'.`);
        return printText(`Let's try again, ${player}!`);
      }
    }
  }
  return printText(`Congratulations, ${player}!`);
};

export { runGame, check };
