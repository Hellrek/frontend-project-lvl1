/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// import readlineSync from 'readline-sync';
import * as even from './even.js';
import * as calc from './calc.js';
import * as gcd from './gcd.js';
import * as progression from './progression.js';
import * as prime from './prime.js';

export const runEvenGame = () => even.runGame();
export const runCalcGame = () => calc.runGame();
export const runGcdGame = () => gcd.runGame();
export const runProgressionGame = () => progression.runGame();
export const runPrimeGame = () => prime.runGame();
