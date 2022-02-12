// function name min with parameters m and n
function min(m, n) {
  // check whether value of m is less than value of n and return m if it has lower value
  if (m < n) return m;
  // otherwise return n because it must have the lower value
  else return n;
}
// console log accepting two values for m and n respectively
// outputs value of n in this case
console.log(min(44, 13));

// another option using math min
// single line multi variable declaration with each assigned a unique value
let a = 13,
  b = 7,
  c = 24;
// new variable assigned the value of the variable of lowest value from the three previously defined variables
let def = Math.min(a, b, c);
// console log
console.log(def);
