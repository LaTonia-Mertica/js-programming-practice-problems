const fs = require("fs");
const words = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsByLine = words.split("\n");

const readlines = () => {
  let q_count = 0;
  let x_count = 0;
  let z_count = 0;

  let allWords = [];

  for (const words of wordsByLine) {
    allWords.push(words);

    for (let letterIndex = 0; letterIndex < words.length; letterIndex++) {
      const letter = words.charAt(letterIndex);

      if (letter === "Q") {
        q_count++;
      } else if (letter === "X") {
        x_count;
      } else if (letter === "Z") {
        z_count++;
      }
    }
  }

  if (q_count < x_count && q_count < z_count) {
    console.log("The least common letter of 'q', 'x', and 'z' is: 'Q'");
  } else if (x_count < q_count && x_count < z_count) {
    console.log("The least common letter of 'q', 'x', and 'z' is: 'X'");
  } else if (z_count < x_count && z_count < q_count) {
    console.log("The least common letter of 'q', 'x', and 'z' is: 'Z'");
  } else {
    console.log(
      "Comparing 'q', 'x', and 'z' - at least two of the letters has equal representation."
    );
  }
};

readlines();
