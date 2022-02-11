/*
 * REQUIREMENTS
 * Code should have a variable `num` with a starting value of `99`
 * Code should use a `while` loop
 * The `while` loop should have a stop condition
 * Code should produce the expected output, and reflect proper pluralization/singularity of bottles
 */

// QUESTION: WHAT IS HAPPENING IN THIS CODE WITH NUM EQUIVALENTS TO 1 AND 2? ANSWER: Those sections of code are accounting for omission of a single letter s per the number of bottles ... Code runs on else condition except for when number equals 1 or 2
var num = 99;
// console.log(num === 1);
while (num >= 1) {
  if (num === 1) {
    console.log(
      "CURRENT BOTTLES REMAINING: " +
        num +
        " \nbottle of juice on the wall! " +
        num +
        " bottle of juice! Take one down, pass it around. . . " +
        (num - 1) +
        " bottles of juice on the wall!"
    );
  } else if (num === 2) {
    console.log(
      "CURRENT BOTTLES REMAINING: " +
        num +
        " \nbottles of juice on the wall! " +
        num +
        " bottles of juice! Take one down, pass it around. . . " +
        (num - 1) +
        " bottle of juice on the wall!"
    );
  } else {
    console.log(
      "CURRENT BOTTLES REMAINING: " +
        num +
        " \nbottles of juice on the wall! " +
        num +
        " bottles of juice! Take one down, pass it around. . . " +
        (num - 1) +
        " bottles of juice on the wall!"
    );
  }
  // decrement number
  num--;
}
