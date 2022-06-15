/*
isPrime

Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

> isPrime(2)
true

> isPrime(10)
false

> isPrime(15485863)
true

> isPrime(3548563)
false

NOTE: this challenge courtesy App Academy https://open.appacademy.io/learn/full-stack-online/javascript/intro-javascript-problems--part-1-
*/
function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}
console.log(isPrime(2));
