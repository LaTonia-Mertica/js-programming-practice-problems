// function name isEven w/one parameter named num
function isEven(num) {
  // when num value is equivalent 0
  if (num == 0) {
    // return true
    return true;
    // when num value equivalent 1
  } else if (num == 1) {
    // return false
    return false;
    // when num less than zero
  } else if (num < 0) {
    // return fn isEven passing parameter num negated from postive to negative
    return isEven(-num);
    // otherwise return fn isEven passing num minus 2
  } else return isEven(num - 2);
}
// console log
console.log(isEven(-1));
