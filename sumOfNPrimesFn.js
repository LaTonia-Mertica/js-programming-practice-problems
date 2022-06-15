/*
sumOfNPrimes

Using firstNPrimes, write a function sumOfNPrimes(n) that returns the sum of the first n prime numbers. Hint: use isPrime as a helper method.

> sumOfNPrimes(0)
0

> sumOfNPrimes(1)
2

> sumOfNPrimes(4)
17

NOTE: The first few prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29. ..

NOTE: this challenge courtesy App Academy https://open.appacademy.io/learn/full-stack-online/javascript/intro-javascript-problems--part-1-
*/

// helper fn
// return bool of true when number is a prime number
function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}
// console.log(isPrime(10));

// helper fn
// return array of prime numbers
function getNPrimes(n) {
  const arr = [];
  let i = 2;

  while (arr.length < n) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr;
}
// console.log(getNPrimes(3));

// output fn for sum of specified number of prime numbers
function sumOfNPrimes(n) {
  let sum = 0;
  let countPrimes = 0;
  let i = 2;

  while (countPrimes < n) {
    if (isPrime(i)) {
      sum += i;
      countPrimes++;
    }
    i++;
  }
  return sum;
}
console.log(sumOfNPrimes(5));
