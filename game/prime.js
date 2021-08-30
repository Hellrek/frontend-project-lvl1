/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import player from '../src/cli.js';
import {
  printText, someNum, divisor, progressionMiss, progression,
  progressionMissAnswer, simpleNum,
} from './src.js';

export const runGame = () => {
  printText(`Hello, ${player}`);
  for (let i = 3; i > 0; i -= 1) {
    const numAns = someNum();
    const question = simpleNum(numAns) ? 'yes' : 'no';

    printText('Answer "yes" if given number is prime. Otherwise answer "no".');
    printText(`Question: ${numAns}`);
    const yourAnsw = readlineSync.question('Your answer: ').toLowerCase();
    if (yourAnsw === question) {
      printText('Correct!');
    } else {
      printText(`'${yourAnsw}' is wrong answer ;(. Correct answer was '${question}'`);
      return printText(`Let's try again, ${player}!`);
    }
  }
  return printText(`Congratulations, ${player}!`);
};

export const defalt = 'Не отсвечивай!';
