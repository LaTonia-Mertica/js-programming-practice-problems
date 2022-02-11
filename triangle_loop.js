/*
CHALLENGE: Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######

PSEUDOCODE:
- declare and asign variable value of 0
- while loop to establish start, condition, and stopping point
- console log
*/

// for loop that declares variable named result, assigns result variable to the asterick symbol, sets the loop to iterate for the length of result being less than or equal to the number 7, reassigns result variable to result plus another asterick symbol, which increases by one for each iteration THEN console log the result(s) in a formatted string
for (let result = "*"; result.length <= 7; result = result + "*") {
  console.log("FOR LOOP TRIANGLE: ", result);
}
// console log a new line to add space between the two loop outputs
console.log("\n");
// declare variable named result and assign it the value of the asterick symbol, add to while loop the condition that the length of result variable is less than or equal to number 7, add into while loop statements 1) console log formatted string with the result(s) by applying the result variable, AND increase the value of result by one for each successive iteration
let result = "*";
while (result.length <= 7) {
  console.log("WHILE LOOP TRIANGLE: ", result);
  result = result + "*";
}
