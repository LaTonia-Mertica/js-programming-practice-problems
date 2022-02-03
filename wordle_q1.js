// Wordle is a word game that's been taking over the internet for the past few weeks!
// You have to figure out what the 5 letter word of the day is. For each guess,
// Wordle will show a different colored square for each letter in your guess:
// - Black means the letter in this spot is NOT in the word
// - Yellow means the letter in this spot is in the word but NOT in this position
// - Green means the letter in this spot is correct! (Correct letter in correct position)
// Let's write the function that will output a row of B/Y/G letters for a given guess.

// INITIAL HELPER COMMENTS
// the answer is "?????"
// the guess is "stone"
// this function should return "BYYGB"
//Assert equal?

// DEBUG TO DEFEND AGAINST REPEAT LETTERS
let calculate_wordle_score = function (answer, guess) {
  let result = "";

  for (i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      result += "g";
    } else if (answer.includes(guess[i]) && guess[i] !== answer[i]) {
      result += "y";
    } else {
      result += "b";
    }
  }
  return result;
};

let word_contains_letter = function (guess, letter) {
  if (guess.includes(letter)) {
    return true;
  } else {
    return false;
  }
};

// ggggg
console.log(
  "EXPECTED OUTPUT 'GGGGG': ",
  calculate_wordle_score("tongs", "tongs")
);
//yyyyy
console.log(
  "EXPECTED OUTPUT 'YYYYY': ",
  calculate_wordle_score("tongs", "gnost")
);
// bbbbb
console.log(
  "EXPECTED OUTPUT 'BBBBB': ",
  calculate_wordle_score("tongs", "whack")
);

// yyyyb
console.log(
  "EXPECTED OUTPUT 'YYYYB': ",
  calculate_wordle_score("tongs", "osgte")
);
// gggby
console.log(
  "EXPECTED OUTPUT 'GGGBY': ",
  calculate_wordle_score("wheel", "where")
);
// ggbbg
console.log(
  "EXPECTED OUTPUT 'GGBBG': ",
  calculate_wordle_score("tongs", "tools")
);
//yybyg
console.log(
  "EXPECTED OUTPUT 'YYBYG': ",
  calculate_wordle_score("tongs", "gnats")
);

// SUDO CODE TO OUTLINE NEEDED STEPS/CODE FOR "Y" USE CASE
// check guess for multiple occurences of same letter
// store multiple occurences of same letter
// output "y" for all occurences of same letter
// let charOccurence = function (guess, letter) {
//   for (let char = 0; char < guess.length; char++) {
//     if (guess[char] === letter) charOccurence.push(guess[char] + 1);
//   }
//   return charOccurence;
// };

/* COMMENTS TO FOCUS ON STEPS/CODE NEEDED FOR "Y" USE CASE
  is the letter in there and not already used
  remove the includes function and go thru each letter and check if answer at [i] is equal to my letter and not equal to the letter in the guess at that index
  */

/* COMMENTS TO FOCUS ON STEPS/CODE NEEDED FOR BASIC USE CASES
  for loop for each letter/character in the guess
  if statement to check for matching letters (ggggg)
  if statement to check if letter included (yyyyy)
  if statement for no matches (bbbbb)
  variable assigned to empty string
  add to empty string each letter/character
  return result
  */

// MISC WORDED VISUALIZATIONS TO TRY TO UNDERSTAND THE PROBLEM
// check each letter of guess
// compare each letter of guess to answer
// output 'b' 'y' 'g' for status

// let charPos = "b" || "y" || "g";
// let black = "not in this word";
// let yellow = "in word but different position";
// let green = "in word in this position";
// guess.split('').filter(guess => answer.includes(guess)).length === 0 or "B"
// guess.toLowerCase().split("").join("").match(/(.)\1+/g).length;

// answer.indexof() === guess.indexof()

// answer.charAt(0) === guess.charAt(0);
// answer.charAt(1) === guess.charAt(1);
// answer.charAt(2) === guess.charAt(2);
// answer.charAt(3) === guess.charAt(3);
// answer.charAt(4) === guess.charAt(4);

// if (answer.charAt() === guess.charAt()) {
//   return "G"
// } else if (answer.charAt() !== guess.charAt()) && guess.includes(answer 'characters') {
//   return "Y"
// } else (answer.charAt() !== guess.charAt()) && !guess.includes(answer 'characters') {
//   return "letter not found"
// }

// CODE/FUNCTIONS TO PRACTICE DEBUG CONSOLE MORE EFFICIENTLY
// let firstfunction = function (x) {
//   console.log(x);
// };

// let secondfunction = function (x) {
//   console.log(x * 2);
//   firstfunction(3);
// };

// let mainfunction = function (x, y) {
//   firstfunction(5);
//   secondfunction(5);
//   secondfunction(10);
// };

// mainfunction(1, 1);
