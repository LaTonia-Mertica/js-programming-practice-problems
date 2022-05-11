// file system setup for use with all challenges
// data source for all challenges is sowpods.txt
const fs = require("fs");
const wordsAsStrings = fs.readFileSync("sowpods.txt").toString("utf-8");
const wordsInArray = wordsAsStrings.split("\n");

/* [x] Get how many words contain the substring "TYPE” without using includes and store the words */
let typeWordsCount = 0;
const typeWords = [];

for (let i = 0; i < wordsInArray.length; i++) {
  const word = wordsInArray[i];
  // match instead of includes gets same/correct result
  if (word.match("TYPE")) {
    typeWordsCount++;
    typeWords.push(word);
  }
}
// this is basic formatting to make the output easier to read
// used commas instead of plus signs here because commas work
// with the curly braces to add formatting in console log
console.log("\n", { typeWordsCount }, "\n", { typeWords }, "\n");
// ONE OF SEVEN DONE🤩

/* [x] Use substring to get words that end in "GHTLY" and store all the words */
const ghtlyWords = [];

for (const word of wordsInArray) {
  // setting a variable to value of number of characters at end of the word(s)
  const wordEndCriteria = word.length - 5;
  // must tell it what to look for
  if (word.substring(wordEndCriteria) === "GHTLY") {
    ghtlyWords.push(word);
  }
}
console.log({ ghtlyWords });
// TWO OF SEVEN DONE🤓

/* [x] Find shortest word that contains all 5 vowels and compare to shortest word that contains only vowel letter e and and handle ties for each code case, logging n/a if no ties */
let shortestAllVowelsWord;
// declared as a let not a const because will need to re-assign the array/value
let shortestAllVowelsWordLengthTies = [];
let shortestVowelEOnlyWord;
// declared as a let not a const because will need to re-assign the array/value
let shortestVowelEOnlyWordLengthTies = [];

for (const word of wordsInArray) {
  if (
    word.includes("A") &&
    word.includes("E") &&
    word.includes("I") &&
    word.includes("O") &&
    word.includes("U")
  ) {
    if (!shortestAllVowelsWord || word.length < shortestAllVowelsWord.length) {
      shortestAllVowelsWord = word;
      shortestAllVowelsWordLengthTies = [word];
    } else if (word.length === shortestAllVowelsWord.length) {
      shortestAllVowelsWordLengthTies.push(word);
    }
  }
}
// this will console log only if the array is empty
// the message logged previously because it was run
// while the for loop was iterating
// in this use case we should not see it logged
if (shortestAllVowelsWordLengthTies.length === 0) {
  console.log("No matching words!");
}
// if correct this will return an array with the shortest word that contains all vowels AND all words of equal length that also contain all five vowels
// looks good - typically the only word return is 'DOULEIA'
console.log({ shortestAllVowelsWordLengthTies });

// now we must do the second part of the challenge
for (let i = 0; i < wordsInArray.length; i++) {
  const word = wordsInArray[i];
  // look for e but no other vowels .. we are ignoring y
  if (
    word.includes("E") &&
    !word.includes("A") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    // if the value is undefined for the shortest word that meets this criteria set the value to that of the current word
    // OR .. . or is represented by the double pipe symbol ||
    // if the valus is defined BUT the length of the word is less than that of the variable being tracked then re-assign the variable to the current word
    if (
      !shortestVowelEOnlyWord ||
      word.length < shortestVowelEOnlyWord.length
    ) {
      // this is the re-assignment
      shortestVowelEOnlyWord = word;
      // this tells our program to re-assign the tracker
      // variable which is an array to the value of each
      // word in an/the array ... this is how we get each
      // word including the first into the output array
      shortestVowelEOnlyWordLengthTies = [word];
      // otherwise check the length to see if subsequent
      // words that meet our criteria are the same length
      // as the word that meets our criteria
    } else if (word.length === shortestVowelEOnlyWord.length) {
      // for all words that meet our criteria add them to
      // our tracker/array to be outputted
      shortestVowelEOnlyWordLengthTies.push(word);
    }
  }
}
// this will console log only if the array is empty
// the message logged previously because it was run
// while the for loop was iterating
// in this use case we should not see it logged
if (shortestVowelEOnlyWordLengthTies.length === 0) {
  console.log("No matching words!");
}
// looks good - typically only "AA" prints out when
// seeking shortest word of only vowels
console.log({ shortestVowelEOnlyWordLengthTies });
// THREE OF SEVEN DONE!!!🥸

/* [x] Find longest word that does not contain letters a, e, i, o, u and compare to longest word that does not contain those letter and does not contain letter y and handle ties for each code case, logging n/a if no ties */
// variable for word
let longestNo5VowelsWord;
// variable to handle ties to word
let longestNo5VowelsWordLengthTies = [];
// variable for word
let longestNo5VowelsAndNoYWord;
// variable to handle ties to word
let longestNo5VowelsAndNoYWordLengthTies = [];
// this is a for of loop and is basically a shorter
// option to writing out the basic for loop with let
// and length and the incrementer et cetera
for (const word of wordsInArray) {
  // first tell the program what the word must contain or not contain
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U")
  ) {
    // first check if the variable tracking the longest word
    // is defined
    // now tell the program what length we need the word to be .. . as in the longest comparatively through iteration
    if (!longestNo5VowelsWord || word.length > longestNo5VowelsWord.length) {
      // if variable not defined or length of word is greater than that of the variable THEN
      // re-assign the variable to the current word
      longestNo5VowelsWord = word;
      // also store each word that meet the same criteria as an array
      longestNo5VowelsWordLengthTies = [word];
    }
    // otherwise store all words that meet the criteria
    else if (word.length === longestNo5VowelsWord.length) {
      // by adding the words into the tracker/storage array
      longestNo5VowelsWordLengthTies.push(word);
    }
  }
}
if (longestNo5VowelsWordLengthTies.length === 0) {
  console.log("No words match the criteria - N/A!!!");
}
// looks good - typically only 'GLYCYLS' is console logged
console.log({ longestNo5VowelsWordLengthTies });

// this basic for loop is exactly the same as the for of
// in terms of output we will get ... just mixing things up
for (let i = 0; i < wordsInArray.length; i++) {
  // declare a word variable for efficiency/cleanness
  const word = wordsInArray[i];
  if (
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O") &&
    !word.includes("U") &&
    !word.includes("Y")
  ) {
    if (
      !longestNo5VowelsAndNoYWord ||
      word.length > longestNo5VowelsAndNoYWord.length
    ) {
      // must re-assign variable to current word
      // for both of these code cases
      longestNo5VowelsAndNoYWord = word;
      // also must tell program we want words in array
      // this is another re-assignment
      longestNo5VowelsAndNoYWordLengthTies = [word];
    } else if (word.length === longestNo5VowelsAndNoYWord.length) {
      // code line above tells our program to check for words
      // that meet the criteria and are same length as variable
      // then push/store in the array
      // this will grab and store all words, which handles ties
      longestNo5VowelsAndNoYWordLengthTies.push(word);
    }
  }
}
// checking to see if there are no words that meet our criteria
// setting the comparison operator to less than or equal to
// lets us console log that there are no other matching words
if (longestNo5VowelsAndNoYWordLengthTies.length <= 1) {
  console.log(
    "Not applicable! No other words match the variable that meets our criteria!!"
  );
}
// looks good - typically only 'TSKTSKS' is console logged
console.log({ longestNo5VowelsAndNoYWordLengthTies });
// FOUR OF SEVEN DONE!!!🎀

/* [x] Print commonality of the letters Q, X, and Z per their respective count ie. letter is more common than other letter yet less common than other other letter */
let countletterQ = 0;
let countletterX = 0;
let countletterZ = 0;

// lets see if we can get a better count than just one per word and try to get one per each occurrence

for (let i = 0; i < wordsInArray.length; i++) {
  const word = wordsInArray[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];

    if (letter === "Q") {
      // this setup is an incrementer for each time the letter is found in a word
      countletterQ++;
    } else if (letter === "X") {
      countletterX++;
    } else if (letter === "Z") {
      countletterZ++;
    }
  }
}
if (countletterQ < (countletterX && countletterZ)) {
  console.log("\nQ IS THE LEAST COMMON");
}
if (countletterX > countletterQ && countletterX < countletterZ) {
  console.log("X IS MORE COMMON THAN Q AND LESS COMMON THAN Z");
}
if (countletterZ > (countletterQ && countletterX)) {
  console.log("Z IS MORE COMMON\n");
}
// looks good - not sure of the count is the same though
console.log({ countletterQ }, { countletterX }, { countletterZ }, "\n");

// quick check to compare counts between words and letters
let qWordCount = 0;
let xWordCount = 0;
let zWordCount = 0;
for (const word of wordsInArray) {
  if (word.includes("Q")) {
    qWordCount++;
  } else if (word.includes("X")) {
    xWordCount++;
  } else if (word.includes("Z")) {
    zWordCount++;
  }
}
console.log({ qWordCount }, { xWordCount }, { zWordCount });

// yups, there's different outputs though the comparisons remain the same in terms of more/less relative between letters
// FIVE OF SEVEN DONE🤠

/* [x] Find longest palindrome that contains all vowels (there are none) and compare to longest palindrome that contains no vowels except sometimes vowel letter y (does not exist) and store all palindromes */
let longestPalindrome;
let longestPalindromeAll5Vowels;
let longestPalindromeOnlyVowelY;
const allPalindromes = [];
const allPalindromesWithLetterY = [];

for (let i = 0; i < wordsInArray.length; i++) {
  const word = wordsInArray[i];
  const wordInReverse = word.split("").reverse().join("");

  if (
    // check if palindrome
    word === wordInReverse
  ) {
    // inner if statement to check if variable is defined
    // OR if a longer palindrome exists
    if (!longestPalindrome || wordInReverse.length > longestPalindrome.length)
      // re-assign palindrome to defined AND current longest
      longestPalindrome = wordInReverse;
    allPalindromes.push(wordInReverse);
  }
}
for (const word of allPalindromes) {
  const wordInReverse = word.split("").reverse().join("");
  // check if palindrome contains all 5 vowels
  if (
    wordInReverse.includes("A") &&
    wordInReverse.includes("E") &&
    wordInReverse.includes("I") &&
    wordInReverse.includes("O") &&
    wordInReverse.includes("U")
  ) {
    longestPalindromeAll5Vowels = wordInReverse;
  }
}
if (longestPalindromeAll5Vowels === undefined) {
  console.log("\nNo palindromes listed contain all five vowels!");
}
for (const word of wordsInArray) {
  const wordInReverse = word.split("").reverse().join("");
  if (word === wordInReverse && wordInReverse.includes("Y")) {
    {
      if (
        !longestPalindromeOnlyVowelY ||
        wordInReverse.length > longestPalindromeOnlyVowelY.length
      ) {
        longestPalindromeOnlyVowelY = wordInReverse;
        allPalindromesWithLetterY.push(wordInReverse);
      }
    }
  }
}
if (longestPalindromeOnlyVowelY === undefined) {
  console.log("No long palindromes with only sometimes vowel y exist!");
}
console.log(
  { longestPalindrome },
  { longestPalindromeOnlyVowelY },
  { longestPalindromeAll5Vowels },
  { allPalindromes },
  { allPalindromesWithLetterY },
  "\n"
);
// SIX OF SEVEN DONE!!!😂

/* [x] List letters that never appear consecutively/back-to-back in an English word */

const lettersThatDoNotAppearBackToBack = [];
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const allOfTheWordsFromDataSource = [];
allOfTheWordsFromDataSource.push(wordsAsStrings);
// basic for loop to iterate alphabet
for (let i = 0; i < alphabet.length; i++) {
  // basic inner for loop to iterate word in comparison to letter
  const letter = alphabet[i];
  for (let j = 0; j < allOfTheWordsFromDataSource.length; j++) {
    // we are comparing the words via the strings (not the array)
    const word = allOfTheWordsFromDataSource[j];

    if (word.includes(letter + letter)) {
      continue;
    } else {
      lettersThatDoNotAppearBackToBack.push(letter);
    }
  }
}
console.log("\n", { lettersThatDoNotAppearBackToBack });

// SEVEN OF SEVEN DONE💥😜😇🥳🤠
