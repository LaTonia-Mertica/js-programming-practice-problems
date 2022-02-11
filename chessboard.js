/*
CHESSBOARD
- Create program that uses a string to represent an 8×8 grid
- Use newline characters to separate lines
- Each position of the grid has a space or "#" character
- The characters should form a chessboard

Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

- Once done, define a binding aka variable aka storage location for value(s) named size and = aka assigned to number 8
- THEN modify the program to work for any size, outputting a grid per given width and height
*/

// declare and assign size of the chessboard
let size = 8;
// declare and assign chessboard to empty string, which will accept hash symbol
let chessboard = "";

// outer for loop to assign variable c to 0 as a starting point, variable c to less than value of variable size, and increment variable c per iterations through the loop
for (let c = 0; c < size; c++) {
  // inner for loop to assign variable b to 0 as a starting point, variable b to less than value of variable size, and increment variable b per iterations through the loop
  for (let b = 0; b < size; b++) {
    // if statement to set condition that when the sum of values for variables c and b is divisible by 2
    if ((c + b) % 2 === 0) {
      // add into the empty string for variable cheesboard, which starts as an empty string BUT add a space at the start of the additions into the string
      chessboard += " ";
      // otherwise
    } else {
      // add to the value of variable chessboard with hash symbol (AND no space is added at the start of the additions)
      chessboard += "#";
    }
  }
  // increment variable chessboard AND include a new line per each increment
  chessboard += "\n";
}
// console log value of chessboard variable
console.log(chessboard);
