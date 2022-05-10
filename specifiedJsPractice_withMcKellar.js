// What are all of the words that both start with a “TH” and end with a “TH”?

const fs = require("fs");
const wordStr = fs.readFileSync("sowpods.txt").toString("utf-8").trim();
const wordArr = wordStr.split("\n");

const thStartAndEndWords = [];

for (let i = 0; i < wordArr.length; i++) {
  const word = wordArr[i];

  if (word.startsWith("TH") && word.endsWith("TH")) {
    thStartAndEndWords.push(word);
  }
}
//console.log({ thStartAndEndWords });

// What are all of the words that have only “U”s for vowels?

const uOnlyVowelWords = [];

for (let i = 0; i < wordArr.length; i++) {
  const word = wordArr[i];

  if (
    word.includes("U") &&
    !word.includes("A") &&
    !word.includes("E") &&
    !word.includes("I") &&
    !word.includes("O")
  ) {
    uOnlyVowelWords.push(word);
  }
}
//console.log({ uOnlyVowelWords });

//What are all of the words that have only “E”s for vowels and are at least 15 letters long?

const eOnlyVowelAtLeast15LetterWords = [];

for (let i = 0; i < wordArr.length; i++) {
  const word = wordArr[i];
  if (
    word.includes("E") &&
    !word.includes("A") &&
    !word.includes("U") &&
    !word.includes("I") &&
    !word.includes("O") &&
    word.length >= 15
  ) {
    eOnlyVowelAtLeast15LetterWords.push(word);
  }
}
//console.log({ eOnlyVowelAtLeast15LetterWords });

// What are the shortest words that start with “PRO” and end in “ING”? Make sure your solution can handle ties.

let shortestWords;
let proStartIngEndShortestWords = [];

for (let i = 0; i < wordArr.length; i++) {
  let word = wordArr[i];
  if (word.startsWith("PRO") && word.endsWith("ING")) {
    if (!shortestWords || shortestWords.length > word.length) {
      shortestWords = word;
      proStartIngEndShortestWords = [word];
    } else if (word.length === shortestWords.length) {
      proStartIngEndShortestWords.push(word);
    }
  }
}
// for (let i = 0; i < wordArr.length; i++) {
//   const word = wordArr[i];
//   if (
//     word.startsWith("PRO") &&
//     word.endsWith("ING") &&
//     word.length === shortestWords.length
//   ) {
//     proStartIngEndShortestWords.push(word);
//   }
// }

// console.log({ shortestWords });
// console.log({ proStartIngEndShortestWords });

// What are the shortest words that start with “ANT” and end in “INE”? Make sure your solution can handle ties.

// declare a variable un-assigned a value to store word(s) being tracked
let shortAntStartIneEndWords;
// create array to store all words that meet criteria
let antStartIneEndWords = [];
// basic for loop to iterate through word array
for (let i = 0; i < wordArr.length; i++) {
  // create variable assigned value of each word iterated by for loop
  const word = wordArr[i];
  // set condition with if statement
  // start first filter of condition to get words that have needed letters
  if (word.includes("A") && word.endsWith("GHY")) {
    // set next condition with inner if statement
    // tell program to look for the variable while it is undefined OR
    // to read the length of the variable and compare it to each word
    // until the shortest word is found
    if (
      !shortAntStartIneEndWords ||
      word.length < shortAntStartIneEndWords.length
    ) {
      // re-assign the variable for the word(s) that meet the criteria
      // to value of each word being iterated AND reassign the variable to store
      // each word that meets the criteria to value of each word in an array
      shortAntStartIneEndWords = word;
      antStartIneEndWords = [word];
      // otherwise check if the length of the variable for the word and
      // the length of each word being iterated are equal
      // and when their lengths are equal add the word to the array storing them
    } else if (word.length === shortAntStartIneEndWords.length) {
      antStartIneEndWords.push(word);
    }
  }
}
//console.log({ antStartIneEndWords });

// What are the longest words that include letter C, end in “EIN”, and are not under 7 letters long? Make sure your solution can handle ties.
let c6EinWords;
let cLetterOver6LettersEinEndWords = [];

for (let i = 0; i < wordArr.length; i++) {
  const word = wordArr[i];
  if (word.includes("C") && word.endsWith("EIN") && word.length >= 7) {
    if (!c6EinWords || c6EinWords.length < word.length) {
      c6EinWords = word;
      cLetterOver6LettersEinEndWords = [word];
    } else if (word.length === c6EinWords.length) {
      cLetterOver6LettersEinEndWords.push(word);
    }
  }
}
//console.log({ cLetterOver6LettersEinEndWords });

// What are the longest words that include letter F, end in “S”, and are not under 9 letters long? Make sure your solution can handle ties.

let fLetterOver8LettersEndS;
let fLetterOver8LettersEndSArr = [];

for (let i = 0; i < wordArr.length; i++) {
  const word = wordArr[i];
  if (
    word.includes("F") &&
    word.charAt(3) === "A" &&
    word[word.length - 1] === "S" &&
    word.length >= 9
  ) {
    if (
      !fLetterOver8LettersEndS ||
      word.length > fLetterOver8LettersEndS.length
    ) {
      fLetterOver8LettersEndS = word;
      fLetterOver8LettersEndSArr = [word];
    } else if (word.length === fLetterOver8LettersEndS.length) {
      fLetterOver8LettersEndSArr.push(word);
    }
  }
}
//console.log({ fLetterOver8LettersEndSArr });

// What are the shortest words that contain uga? Make sure your solution can handle ties.
let shortUgaWords;
let shortUgaWordsArr = [];
for (let i = 0; i < wordArr.length; i++) {
  const word = wordArr[i];
  // sensible to first check for words that have letters and/or length need
  if (word.includes("UGA")) {
    // then to check for the sought variable value to be defined or swapped per subsequent length
    if (!shortUgaWords || word.length < shortUgaWords.length) {
      shortUgaWords = word;
      // re-assign the array to house each word in an array
      shortUgaWordsArr = [word];
    } else if (word.length === shortUgaWords.length) {
      // then push all words after get those of same length that also meet other criteria
      shortUgaWordsArr.push(word);
    }
  }
}
//console.log({ shortUgaWordsArr });

// What are the shortest words that consist only of vowels? Make sure your solution can handle ties.
let tinyVowelWords;
let tinyVowelWordsArr = [];

const vowels = ["A", "E", "I", "O", "U", "Y"];

for (let i = 0; i < wordArr.length; i++) {
  const word = wordArr[i];
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    if (!vowels.includes(letter)) {
      continue;
    } else if (!tinyVowelWords || word.length < tinyVowelWords.length) {
      tinyVowelWords = word;

      tinyVowelWords = [word];
      console.log({ tinyVowelWords });
    } else if (word.length === tinyVowelWords.length) {
      tinyVowelWordsArr.push(word);
    }
  }
}
if (tinyVowelWordsArr.length === 0) {
  //console.log("\nNo Other All Vowels Words!");
}
//console.log({ tinyVowelWordsArr }, "\n");

// What words are the shortest that contain abc in no specific order?
let abcAnyOrderShortWords;
let abcAnyOrderShortWordsArr = [];

for (let i = 0; i < wordArr.length; i++) {
  const word = wordArr[i];
  if (word.includes("A") && word.includes("B") && word.includes("C")) {
    if (!abcAnyOrderShortWords || word.length < abcAnyOrderShortWordsArr) {
      abcAnyOrderShortWords = word;
      abcAnyOrderShortWordsArr = [word];
    } else if (word.length === abcAnyOrderShortWords.length) {
      abcAnyOrderShortWordsArr.push(word);
    }
  }
}
//console.log({ abcAnyOrderShortWordsArr });

// use foreach to log words that are 13 letter long, do not include the letter e, and contain the letter p
const forEach13LetterNoEYesPWords = [];
wordArr.forEach((words) => {
  if (words.includes("P") && !words.includes("E") && words.length === 13) {
    forEach13LetterNoEYesPWords.push(words);
  }
});
console.log({ forEach13LetterNoEYesPWords });
