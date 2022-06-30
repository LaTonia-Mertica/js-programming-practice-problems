const scores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
  _: 0,
};

/*
  THE GOAL:
  - helper fn to get count of letters
  */
function getLetterCount(word) {
  const letterCountObj = {};
  for (const letter of word) {
    if (!letterCountObj[letter]) {
      letterCountObj[letter] = 1;
    } else {
      letterCountObj[letter]++;
    }
  }
  return letterCountObj;
}
// console.log("\n", getLetterCount("OVERBOARD"));

/*
  THE GOAL:
  - helper fn to get if inputted word can be made
  - input  of two objs
  - output bool re: whether word can be made
  */
function isWordCanMNake(rackObj, inputObj) {
  let wildcards = 0;
  if (rackObj["_"]) {
    wildcards = rackObj["_"];
  }

  for (const [key, value] of Object.entries(inputObj)) {
    if (!rackObj[key] || value > rackObj[key]) {
      if (wildcards < 1) {
        return false;
      }
      wildcards--;
    }
  }
  return true;
}
// const rackObj = getCountOfLetters("DFLAOKSHJUTSFY");
// const inputObj = getCountOfLetters("SHY");
// console.log(isWordCanMNake(rackObj, inputObj));

/*
  THE GOAL:
  - fn
  - input single string
  - return array of words from word list that can be made from available letters in input 
  - return array of words from previous array with respective scores
  */
const words = [
  "BENDECIDA",
  "BENDECIDO",
  "LOSIENTO",
  "AYUDAR",
  "EXCELENTE",
  "PERDONAME",
  "PERDONEME",
];

function getWordsFromLetters(availableLetters) {
  const availableLettersObj = getLetterCount(availableLetters);
  const wordsFromLetters = [];

  for (const word of words) {
    const wordObj = getLetterCount(word);

    if (isWordCanMNake(availableLettersObj, wordObj)) {
      wordsFromLetters.push(word);
    }
  }

  const scoreResults = [];
  for (const word of wordsFromLetters) {
    let score = 0;
    for (const letter of word) {
      score = score + scores[letter];
    }
    scoreResults.push({ word: word, score: score });
  }
  // return wordsFromLetters;
  return scoreResults;
}
// console.log(getWordsFromLetters("HAUYGRARDES"));
console.log(getWordsFromLetters("PL_SIEN_OMELETE"));

// AGAIN!
/*
    THE GOAL:
    - helper fn to get count of letters
    */
function getCountOfLetters(word) {
  const countOfLettersObj = {};
  for (const letter of word) {
    if (!countOfLettersObj[letter]) {
      countOfLettersObj[letter] = 1;
    } else {
      countOfLettersObj[letter]++;
    }
  }
  return countOfLettersObj;
}
// console.log("\n", getCountOfLetters("UNDERWHELM"));

/*
    THE GOAL:
    - helper fn to get if inputted word can be made
    - input  of two objs
    - output bool re: whether word can be made
    */
function isValidWord(scrabbleObj, wordObj) {
  let wildcards = 0;
  if (scrabbleObj["_"]) {
    wildcards = scrabbleObj["_"];
  }

  for (const [key, value] of Object.entries(wordObj)) {
    if (!scrabbleObj[key] || value > scrabbleObj[key]) {
      if (wildcards < 1) {
        return false;
      }
      wildcards--;
    }
  }
  return true;
}
// const scrabbleObj = getCountOfLetters("GOODDAY");
// const wordObj = getCountOfLetters("DAYBREAK");
// console.log(isValidWord(scrabbleObj, wordObj));

/*
    THE GOAL:
    - fn
    - input single string
    - return array of words from those made
    - return array of words with their scores from those made
    */
const wordList = ["HONEY", "MONEY", "SUGAR", "SALTS"];

function createWordsFromLetters(availableLetters) {
  const availableLettersObj = getCountOfLetters(availableLetters);
  const createdWords = [];

  for (const word of wordList) {
    const wordObj = getCountOfLetters(word);

    if (isValidWord(availableLettersObj, wordObj)) {
      createdWords.push(word);
    }
  }

  const wordAndScore = [];
  for (const word of createdWords) {
    let score = 0;
    for (const letter of word) {
      score = score + scores[letter];
    }
    wordAndScore.push({ word: word, score: score });
  }
  return createdWords;
}
// console.log(createWordsFromLetters("HALPOKITHYSNEY"));
console.log(createWordsFromLetters("_ONG_Y"));

// AGAIN!!
/*
        THE GOAL:
        - helper fn to get count of letters
        */
function letterPerWord(word) {
  const letterPerWordObj = {};
  for (const letter of word) {
    if (!letterPerWordObj[letter]) {
      letterPerWordObj[letter] = 1;
    } else {
      letterPerWordObj[letter]++;
    }
  }
  return letterPerWordObj;
}
// console.log("\n", letterPerWord("EXTRACODERICCULAR"));

/*
        THE GOAL:
        - helper fn to get if inputted word can be made
        - input  of two objs
        - output bool re: whether word can be made
        */
function canMakeWord(scrabbleRackWord, wordInput) {
  let wildcards = 0;
  if (scrabbleRackWord["_"]) {
    wildcards = scrabbleRackWord["_"];
  }

  for (const [key, value] of Object.entries(wordInput)) {
    if (!scrabbleRackWord[key] || value > scrabbleRackWord[key]) {
      if (wildcards < 1) {
        return false;
      }
      wildcards--;
    }
  }
  return true;
}
// const scrabbleRackWord = letterPerWord("TRUE");
// const wordInput = letterPerWord("FALSE");
// console.log(canMakeWord(scrabbleRackWord, wordInput));

/*
        THE GOAL:
        - fn
        - input single string
        - return array of words from those made
        - return array of words with their scores from those made
        */

const wordListArr = ["GO", "STOP", "DWELL", "STAY", "LEAVE"];

function getWords(availableLetters) {
  const availableLettersObj = letterPerWord(availableLetters);
  const words = [];

  for (const word of wordListArr) {
    const wordObj = letterPerWord(word);

    if (canMakeWord(availableLettersObj, wordObj)) {
      words.push(word);
    }
  }

  const scoreForEachWord = [];
  for (const word of words) {
    let score = 0;
    for (const letter of word) {
      score = score + scores[letter];
    }
    scoreForEachWord.push({ word: word, score: score });
  }
  return words;
}
// console.log(getWords("DWELL"));
console.log(getWords("_______"));

// FINAL LAP!!
/*
        THE GOAL:
        - helper fn to get count of letters
        */
function wordLettersCount(word) {
  const wordLettersCount = {};
  for (const letter of word) {
    if (!wordLettersCount[letter]) {
      wordLettersCount[letter] = 1;
    } else {
      wordLettersCount[letter]++;
    }
  }
  return wordLettersCount;
}
// console.log("\n", wordLettersCount("GOLDEN"));

/*
        THE GOAL:
        - helper fn to get if inputted word can be made
        - input  of two objs
        - output bool re: whether word can be made
        */
function wordCanBeMade(letterRack, inputWord) {
  let wildcards = 0;
  if (letterRack["_"]) {
    wildcards = letterRack["_"];
  }

  for (const [key, value] of Object.entries(inputWord)) {
    if (!letterRack[key] || value > letterRack[key]) {
      if (wildcards < 1) {
        return false;
      }
      wildcards--;
    }
  }
  return true;
}
// const letterRack = wordLettersCount("CRAZY");
// const inputWord = wordLettersCount("AY");
// console.log(wordCanBeMade(letterRack, inputWord));

/*
        THE GOAL:
        - fn
        - input single string
        - return array of words from those made
        - return array of words with their scores from those made
        */

const wordsListArray = ["MUSIC", "SONG", "HUM"];
function getWordsFromAvailableLetters(availableLetters) {
  const availableLettersObj = wordLettersCount(availableLetters);
  const wordResults = [];

  for (const word of wordsListArray) {
    const wordObj = wordLettersCount(word);

    if (wordCanBeMade(availableLettersObj, wordObj)) {
      wordResults.push(word);
    }
  }

  const wordToScore = [];
  for (const word of wordsListArray) {
    let score = 0;
    for (const letter of word) {
      score = score + scores[letter];
    }
    wordToScore.push({ word: word, score: score });
  }
  return wordResults;
}
// console.log(getWordsFromAvailableLetters("HUM"));
console.log(getWordsFromAvailableLetters("SM_NG_"));
