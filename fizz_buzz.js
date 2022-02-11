/*
FIZZ BUZZ
- Print numbers 1 to 100 to the console 
- For numbers divisible by 3, print "Fizz" (not the number)
- For numbers divisible by 5, print "Buzz" (not the number)
- Then, modify the program to print "FizzBuzz" for
numbers divisible by both 3 and 5 (AND continue the previous printing conditions)

PSEUDOCODE
- while loop 
- condition that number is less than or equal to 100
- console log fizz when number divisible by 3
- console log buzz when number divisible by 5
- add stopping condition
- include else to display number when number doesn't meet either criteria
- THEN modify code to output both words at once
---- this needs to happen before the single-criteria conditions 
---- otherwise some numbers will meet previous conditions and not be accessible to the combined condition farther down the conditions list/run/execution

NOTES
- double check outputs w/15 which is divisible by both numbers 3 and 5
- there are five other numbers divisible by both 3 and 5 (from 1 to 100)
- numbers not divisible by 3 &/or 5 ... 1,2,4,7,8,11,13,14,16,17,19,22,23,26,28,29  ...
- numbers not divisible by number 3 ... 1,2,4,5,7,8,10,11,13,14,16,17,19,20,22,23,25,26,28,29 ...
- numbers not divisible by number 5 ... 1,2,4,7,8,11,13,14,16,17,19,22,23,26,28,29 ...
*/

// FINAL PROGRAM CODED
let num1 = 1;
while (num1 <= 100) {
  if (num1 % 3 === 0 && num1 % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num1 % 3 === 0) {
    console.log("Fizz");
  } else if (num1 % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num1);
  }
  num1++;
}
console.log("END OF FINAL PROGRAM CALL\n\n");

// INITIAL PROGRAM CODED
let num0 = 1;
while (num0 <= 100) {
  if (num0 % 3 === 0 && num0 % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num0 % 3 === 0) {
    console.log("Fizz");
  } else if (num0 % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num0);
  }
  num0++;
}
console.log("END OF INITIAL PROGRAM CALL\n\n");
