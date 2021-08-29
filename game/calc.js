/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import player from '../src/cli.js';
import {
  printText, someNum, operator, mathIn, mathOut,
} from './src.js';

export const runGame = (num) => {
  printText(`Hello, ${player}`); printText('What is the result of the expression?');
  for (let i = 3; i > 0; i -= 1) {
    const numA = someNum();
    const numB = someNum();
    const opr = operator();
    const ans = mathIn(numA, numB, opr);
    printText(`Question: ${mathOut(numA, numB, opr)}`);
    const yourAnsMath = readlineSync.question('Your answer: ');
    if (Number(yourAnsMath) === mathIn(numA, numB, opr)) {
      printText('Correct!');
    } else {
      printText(`'${yourAnsMath}' is wrong answer ;(. Correct answer was ${mathIn(numA, numB, opr)}`);
      return printText(`Let's try again, ${player}!`);
    }
  }
  return printText(`Congratulations, ${player}!`);
};

export const defalt = 'Не отсвечивай!';
