#!/usr/src/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games');
const youName = readlineSync.question('May I have your name?:');

export default youName;
