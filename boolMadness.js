function or(expression1, expression2) {
  return !(!expression1 && !expression2);
}
console.log(or(false, true));
// not true is false
// not false is true
// not either is false
// not not either therefore must be true

function nor(expression1, expression2) {
  if (!expression1 && !expression2) {
    return false;
  } else {
    return true;
  }
}
console.log(nor(false, true));

// if not either option then is false
// otherwise must be true
