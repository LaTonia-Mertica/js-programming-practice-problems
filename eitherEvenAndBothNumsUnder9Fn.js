/*
Create a fn that returns a boolean value of true when
- numbers are both less than number 9
- AND either number is even
*/

function eitherNumIsEvenAndBothNumsAreUnder9(num1, num2) {
  let oneEvenAndBothUnder9 = false;
  if (num1 < 9 && num2 < 9 && (num1 % 2 === 0 || num2 % 2 === 0)) {
    oneEvenAndBothUnder9 = true;
    return true;
  } else {
    return false;
  }
}
console.log(eitherNumIsEvenAndBothNumsAreUnder9(13, 7));
