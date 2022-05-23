// generate a number between 0 and 1
// console.log("\nRANDOM NUMBER BETWEEN 0 AND 1: ", Math.random());

// running it again will output a diff number
// number generated will always be between zero and one though not including one ...

let randomNumBetween1And13 = Math.random() * (13 - 1) + 1;
// console.log("\nRANDOM BETWEEN 1 AND 13: ", randomNumBetween1And13);

function generateRandomNumber(min, max) {
  let result = Math.random() * (max - min) + min;
  return result;
}
console.log("\nGENERATE RANDOM NUMBER FUNCTION", generateRandomNumber(1, 47));

// nice work folks!
