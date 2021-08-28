#!/usr/bin/env node
/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import usrName from '../src/cli.js';

const answer = (str) => console.log(`Hello, ${str}!`);

answer(usrName);

export default answer;
