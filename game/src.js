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
export {
  printText, someNum, operator, mathIn, mathOut,
};
