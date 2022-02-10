// fn declared and assigned 2 parameters
let calculate_wordle_score = function (answer, guess) {
  // variable result assigned to empty string to store/return output
  let result = "";
  // variable histogram assigned empty object to store/track characters/letters of answer and guess
  let histogram = {};

  // for loop to iterate through each letter of answer
  for (let letter of answer) {
    // if statement to check if letter of histogram exists
    if (histogram[letter] === undefined) {
      // histogram reassigned to start each letter at a count of zero if letter doesn't yet exist
      histogram[letter] = 0;
    }
    // otherwise histogram is to increment by one for each appearance of each letter
    histogram[letter]++;
  }

  // for loop to iterate through the length of characters in guess
  for (i = 0; i < guess.length; i++) {
    // if statement to check if character in guess is at same position as character in answer
    if (guess[i] === answer[i]) {
      // if yes add a letter g to that character position/index
      result += "g";
      // and remove one allowance/count from the histogram for that character
      histogram[answer[i]]--;
      // otherwise check if answer includes current character in guess AND if current character in guess does not match current character in answer AND if current character in guess in the histogram is greater than zero - meaning it already exists
    } else if (
      answer.includes(guess[i]) &&
      guess[i] !== answer[i] &&
      histogram[guess[i]] > 0
    ) {
      // when all 3 parts of previous condition are met add a letter y to that character position/index
      result += "y";
      // and remove one allowance/count from the histogram for that character
      histogram[guess[i]]--;
      // otherwise the only other option is that the letter/character is not in the answer and a letter b can be added to that character position/index
    } else {
      result += "b";
    }
  }
  // return the result to allow output of result
  return result;
};

// console log
console.log(
  "EXPECTED OUTPUT 'GGGGG': ",
  calculate_wordle_score("tongs", "tongs")
);

console.log(
  "EXPECTED OUTPUT 'YYYYY': ",
  calculate_wordle_score("tongs", "gnost")
);

console.log(
  "EXPECTED OUTPUT 'BBBBB': ",
  calculate_wordle_score("tongs", "whack")
);

console.log(
  "EXPECTED OUTPUT 'YYYYB': ",
  calculate_wordle_score("tongs", "osgte")
);

console.log(
  "EXPECTED OUTPUT 'GGGBY': ",
  calculate_wordle_score("wheel", "where")
);

console.log(
  "EXPECTED OUTPUT 'GGBBG': ",
  calculate_wordle_score("tongs", "tools")
);

console.log(
  "EXPECTED OUTPUT 'YYBYG': ",
  calculate_wordle_score("tongs", "gnats")
);
