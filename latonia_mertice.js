/*
 * REQUIREMENTS
 * Code should have a variable `x` with a starting value of `1`
 * Code should use a `while` loop
 * The `while` loop should have a stop condition
 * Code should use a conditional statement
 * Code should increment `x` by `1` each time the loop executes
 * Code should produce proper output of La'Tonia Mertica using single quotes ... (per persistence of prettier, solution: 'La\'Tonia Mertica')
 */

// QUESTION: HOW TO REFACTOR CODE TO OUTPUT BOTH NAMES PER INITIAL SOLUTION? ANSWER: NOT DOABLE/MUST CODE TOP DOWN IN THIS SCENARIO

// declare and assign variable a starting point
let x = 1;
//while loop with condition that x continues as long as less than or equal to specified number
while (x <= 44) {
  // if statement re: x being wholly divisible by numbers 3 and 5
  if (x % 3 === 0 && x % 5 === 0) {
    // when true console log whole first name
    console.log(x + " La'Tonia Mertica");
    // otherwise when condition is true that x is wholly divisible by number 3
  } else if (x % 3 === 0) {
    // console log only first first name
    console.log(x + " La'Tonia");
    // otherwise when condition is true that x is wholly divisible by number 5
  } else if (x % 5 === 0) {
    // console log second first name
    // note no space before second first name below for proper overall spacing in output
    console.log(x, "Mertica");
    // otherwise console log valeu of x
  } else {
    console.log(x);
  }
  // increment variable x
  x++;
}

// INITIAL SOLUTION BELOW OUTPUTS NO APPEARANCE OF LA'TONIAMERTICA BECAUSE IF ELSE IF ONLY ALLOWS FOR ONE CONSIDERATION - MEANING ONCE CONSIDERED THE VALUE IS NOT CONSIDERED AGAIN FOR ANOTHER/SUBSEQUENT CONDITION

// let x = 1;
// while (x < 44) {
//   if (x % 3 === 0) {
//     console.log("La'Tonia");
//   } else if (x % 5 === 0) {
//     console.log("Mertica");
//   } else if (x % 3 === 0 && x % 5 === 0) {
//     console.log("La'Tonia Mertica");
//   } else {
//     console.log(x);
//   }
//   x++;
// }
