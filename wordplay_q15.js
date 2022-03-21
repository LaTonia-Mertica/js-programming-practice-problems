// to read text file with data to manipulate
const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  // declare variables to serve as counters
  let q_count = 0;
  let x_count = 0;
  let z_count = 0;

  // declare array to serve as tracker
  let allWords = [];

  // add all words to array
  for (const words of wordsByLine) {
    allWords.push(words);

    // loop through and increment by index of letter
    // with letter being the value of the letter at a specified index
    for (let letterIndex = 0; letterIndex < words.length; letterIndex++) {
      const letter = words.charAt(letterIndex);

      // when is a specified letter increment that letter respectively
      if (letter === "Q") {
        q_count++;
      } else if (letter === "X") {
        x_count;
      } else if (letter === "Z") {
        z_count++;
      }
    }
  }

  // compare the count of each letter
  // in every possible combination to
  // determine the least common letter
  if (q_count < x_count && q_count < z_count) {
    console.log("The least common letter of 'q', 'x', and 'z' is: 'Q'");
  } else if (x_count < q_count && x_count < z_count) {
    console.log("The least common letter of 'q', 'x', and 'z' is: 'X'");
  } else if (z_count < x_count && z_count < q_count) {
    console.log("The least common letter of 'q', 'x', and 'z' is: 'Z'");
  } else {
    // in case a tie
    console.log(
      "Comparing 'q', 'x', and 'z' - at least two of the letters has equal representation."
    );
  }
};

readlines();
