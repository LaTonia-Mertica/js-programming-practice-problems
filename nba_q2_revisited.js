/*
QUESTION: Write a function that takes as an argument a team name and returns an array of all of the years the team has won the NBA finals.
*/

// visualize intended setup/output
// team name: Miami Heat
// year won: 2006, 2013
// console logged: [2006, 2013]

// helps to pull exact row/string from data set
// break down elements of data set into needed steps toward outcomes
let oneRecord = "2006,Miami Heat,Dallas Mavericks,4-2,Dwyane Wade";
let recordArray = oneRecord.split(",");
let teamThatWon = recordArray[1];
let yearTeamWon = recordArray[0];

// test case one
const words = [
  "apple",
  "banana",
  "carrot",
  "acorn",
  "broccoli",
  "cheesecake",
  "black olive",
];
// visual intended outcome
// let resultsDict = {
//   a: ["apple", "acorn"],
// };
// test case two
const wordsToo = [
  "kittens",
  "puppies",
  "cats",
  "dogs",
  "rabbits",
  "guinea pigs",
  "birds",
  "fishes",
  "felines",
  "canines",
  "pigs",
  "cows",
  "chickens",
];

// declare variable assigned first letter of each word
let firstChar = words[0][0];

function getAllWordsThatStartWithLetter(letter, wordArr) {
  let dictOfCharToWord = {};
  for (let word of wordArr) {
    let firstChar = word[0];

    if (firstChar in dictOfCharToWord) {
      dictOfCharToWord[firstChar].push(word);
    } else {
      dictOfCharToWord[firstChar] = [];
      dictOfCharToWord[firstChar].push(word);
    }
  }
  console.log(dictOfCharToWord[letter]);
}
getAllWordsThatStartWithLetter("b", words);
getAllWordsThatStartWithLetter("f", wordsToo);

// initial function ... outputs all - not by individual key
// function arrayOfWords(wordArr) {
//   let dictOfCharToWord = {};
//   for (let word of wordArr) {
//     let firstChar = word[0];

//     if (firstChar in dictOfCharToWord) {
//       dictOfCharToWord[firstChar].push(word);
//     } else {
//       dictOfCharToWord[firstChar] = [];
//       dictOfCharToWord[firstChar].push(word);
//     }

//     // check to see if first char is in dict as a key
//     // if it is already in dict use the push
//     // when not in dict, tell js dict w/key frstChar will be an array THEN push
//     // dictOfCharToWord[firstChar] = word;
//     // dictOfCharToWord[firstChar].push(word);
//     console.log(dictOfCharToWord);
//   }
// }
// arrayOfWords(words);

// PSEUDOCODE
// iterate through array of words to access each word
// pull out first char of each word
// create first char as key in dict
// add any words that start with the key as the value at that key
// return key-value pair from dict

// check to see if first char is in dict as a key
// if first char is already in dict use push to add word to array that is value of key in dict
// when first char is not in dict, tell js the dict w/key firstChar will have a value that is an array THEN push word(s) prn
// ie...dictOfCharToWord[firstChar] = word;
// ie...dictOfCharToWord[firstChar].push(word);
