/*
Create fn that outputs boolean value if both values are number seven or either are an even number

EXPECTED OUTPUT:
- return bool value true if both numbers are 7
- return bool value true if either number value is even
- for all other values return false
*/
const eitherNumIsEvenOrBothNumsAre7 = (num1, num2) => {
  let isEvenOrBothNum7 = false;
  if ((num1 === 7 && num2 === 7) || num1 % 2 === 0 || num2 % 2 === 0) {
    isEvenOrBothNum7 = true;
    return true;
  } else {
    return false;
  }
};
console.log(eitherNumIsEvenOrBothNumsAre7(1, 3));
