/*
 * QUIZ REQUIREMENTS
 * Code should include a `while` loop
 * Code should count down to launch
 * The `while` loop should have a stop condition
 */

// declare and initialize t for time at number 60
let t = 60;
// while loop to run as long as t is greater than or equal to number 0
while (t >= 0) {
  // condition that when t is equal to number 1 console log this message
  if (t === 1) {
    console.log("We have lift off! (T-1 second)");
    // alt condition that when t is equal to number 50 console log this message
  } else if (t === 50) {
    console.log(
      "Orbiter transfers from ground to internal power (T-50 seconds)"
    );
    // alt condition that when t is equal to number 31 console log this message
  } else if (t === 31) {
    console.log(
      "Ground launch sequencer is go for auto sequence start (T-31 seconds)"
    );
    // alt condition that when t is equal to number 16 console log this message
  } else if (t === 16) {
    console.log("Activate launch pad sound suppression system (T-16 seconds)");
    // alt condition that when t is equal to number 10 console log this message
  } else if (t === 10) {
    console.log("Activate main engine hydrogen burnoff system (T-10 seconds)");
    // alt condition that when t is equal to number 6 console log this message
  } else if (t === 6) {
    console.log("Main engine start (T-6 seconds)");
    // alt condition that when t is equal to number 0 console log this message
  } else if (t === 0) {
    console.log("Solid rocket booster ignition and liftoff! (T-0 seconds)");
    // otherwise console log this message, which is equal to 60 seconds in the countdown
  } else {
    console.log("T-" + t + " seconds");
  }
  // decrement value of t variable
  t--;
}
