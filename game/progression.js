/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import player from '../src/cli.js';
import {
  printText, someNum, divisor, progressionMiss, progression,
  progressionMissAnswer,
} from './src.js';

export const runGame = (num) => {
  printText(`Hello, ${player}`);
  for (let i = 3; i > 0; i -= 1) {
    const arr = progression();
    const numAns = someNum(9) + 1;
    const question = progressionMiss(arr, numAns);
    printText('What number is missing in the progression?');
    printText(`Question: ${question}`);
    const yourAnsw = readlineSync.question('Your answer: ');
    const result = progressionMissAnswer(arr, numAns);
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
