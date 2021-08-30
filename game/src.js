/* eslint-disable no-console */

const printText = (str) => console.log(str);
const someNum = (num = 100) => Math.floor(Math.random() * num);

const operator = () => {
  const arrays = ['+', '-', '*', '/'];
  const choose = Math.floor(Math.random() * (3 - 0 + 1));
  return arrays[choose];
};

const mathIn = (numA, numB, opr) => {
  let result = 0;
  switch (opr) {
    case ('+'):
      result = numA + numB;
      break;
    case ('-'):
      result = numA - numB;
      break;
    case ('*'):
      result = numA * numB;
      break;
    case ('/'):
      result = (parseInt((numA / numB) * 100, 10) / 100);
      break;
    default:
      return null;
  }
  return result;
};

const mathOut = (numA, numB, opr) => {
  const some = (`${numA} ${opr} ${numB} `);
  return some;
};

const divisor = (a, b) => {
  let tmpA = a;
  let tmpB = b;
  while (tmpA !== tmpB) {
    if (tmpA > tmpB) {
      const numTMP = tmpA;
      tmpA = tmpB;
      tmpB = numTMP;
    }
    tmpB -= tmpA;
  }
  return tmpA;
};

const progression = () => {
  const numProgression = someNum(49) + 1;
  let zero = 0;
  const arraysResult = [];
  for (let i = 10; i > 0; i -= 1) {
    arraysResult.push(zero + numProgression);
    zero += numProgression;
  }
  return arraysResult;
};

const progressionMiss = (arr, missNum = someNum(9) + 1) => {
  const showArr = [];
  const size = arr.length;
  for (let i = 0; i < size; i += 1) {
    if (i === missNum) {
      showArr.push('..');
    } else {
      showArr.push(arr[i]);
    }
  }
  return showArr.join(' ');
};

const progressionMissAnswer = (arr, numAns) => {
  const result = arr[numAns];
  return result;
};

export {
  printText, someNum, operator, mathIn, mathOut,
  divisor, progression, progressionMiss, progressionMissAnswer,
};
