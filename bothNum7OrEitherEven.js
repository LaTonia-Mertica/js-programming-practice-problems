function eitherEvenOrBoth7(num1, num2) {
  // check for evenness of either
  // or
  // that both equal or are 7
  if (num1 % 2 === 0 || num2 % 2 === 0 || (num1 && num2 === 7)) {
    return true;
  } else {
    return false;
  }
}
console.log(eitherEvenOrBoth7(22, 13));
// one is even
// one is 7
// return true
