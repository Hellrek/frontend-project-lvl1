/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import player from '../src/cli.js';
import {
  printText, someNum, divisor,
} from './src.js';

export const runGame = (num) => {
  printText(`Hello, ${player}`); printText('What is the result of the expression?');
  for (let i = 3; i > 0; i -= 1) {
    const numOne = someNum(99) + 1;
    const numTwo = someNum(99) + 1;
    const result = divisor(numOne, numTwo);
    printText('Find the greatest common divisor of given numbers.');
    printText(`Question: ${numOne} ${numTwo}`);
    const yourAnsw = readlineSync.question('Your answer: ');
    if (Number(yourAnsw) === result) {
      printText('Correct!');
    } else {
      printText(`'${yourAnsw}' is wrong answer ;(. Correct answer was '${result}'`);
      return printText(`Let's try again, ${player}!`);
    }
  }
  return printText(`Congratulations, ${player}!`);
};

export const defalt = 'Не отсвечивай!';
