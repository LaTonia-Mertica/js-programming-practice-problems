const fs = require("fs");
const cArr = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim()
  .split("\n");

function getOneVowelCountries(arr) {
  const oneVowelCountries = [];
  const multiVowelCountries = [];
  const oneVowelCountryNamesThatAreAtLeast50PercentTheVowel = [];

  const vowels = ["A", "E", "I", "O", "U", "Y"];
  let vCount = 0;
  const invalidChars = [" ", "'", "(", ")", "-", "′", "."];
  let iCount = 0;

  // initial solution (attempt)
  for (const c of arr) {
    if (
      c.includes("A") ||
      c.includes("E") ||
      c.includes("I") ||
      c.includes("O") ||
      c.includes("U") ||
      c.includes("Y")
    ) {
      multiVowelCountries.push(c);
    }

    let firstVowel = null;
    let hasOneVowel = true;
    const trueCountryLength = c.length - iCount;
    const atLeast50PercentVowels = vCount / trueCountryLength >= 0.5;

    for (const l of c) {
      if (vowels.includes(l)) {
        if (firstVowel === null) {
          firstVowel = l;
        } else if (l !== firstVowel) {
          hasOneVowel = false;
        }
      }

      if (vowels.includes(l)) {
        if (vCount === undefined) {
          vCount = 1;
        } else {
          vCount++;
        }
      } else if (invalidChars.includes(l)) {
        if (iCount === undefined) {
          iCount = 1;
        } else {
          iCount++;
        }
      }
    }

    if (hasOneVowel) {
      oneVowelCountries.push(c);
      // console.log({ oneVowelCountries });
    }
    if (hasOneVowel && atLeast50PercentVowels) {
      oneVowelCountryNamesThatAreAtLeast50PercentTheVowel.push(c);
    }
  }
  return oneVowelCountryNamesThatAreAtLeast50PercentTheVowel;
}
// getOneVowelCountries();
// console.log(getOneVowelCountries(cArr));

// START HERE START HERE START HERE START HERE START HERE
// REFACTOR USING BOOL TO DETERMINE IF VOWEL IS ONLY VOWEL
function isOneVowelCountry(country) {
  const vowels = ["A", "E", "I", "O", "U"];
  let firstV = null;
  let hasOneV = true;
  for (const l of country) {
    if (vowels.includes(l)) {
      if (!firstV) {
        firstV = l;
      } else if (l !== firstV) {
        hasOneV = false;
        return false;
      }
    }
  }
  return true;
}
//console.log(isOneVowelCountry("FIJI"));

// REFACTOR USING BOOL TO DETERMINE IF VOWELS AT LEAST HALF OF LETTERS
function vowelsAtLeastHalfLettersOfCountry(country) {
  const vowels = ["A", "E", "I", "O", "U"];
  let vCount = 0;
  const invalidChars = [" ", "'", "(", ")", "-", "′", "."];
  let iCount = 0;

  for (const l of country) {
    if (isOneVowelCountry(country)) {
      if (vowels.includes(l)) {
        vCount++;
      } else if (invalidChars.includes(l)) {
        iCount++;
      }
    }
  }
  const trueCountryLength = country.length - iCount;
  const atLeast50PercentVowels = vCount / trueCountryLength >= 0.5;

  if (atLeast50PercentVowels >= 0.5) {
    return true;
  }
  return false;
}
// console.log(vowelsAtLeastHalfLettersOfCountry("CANADA"));

// FN TO OUTPUT SINGLE VOWEL COUNTRIES THAT ARE AT LEAST HALF VOWELS IN LETTERS
const cWithOneVowelAtLeastHalfLettersOfItsName = [];

for (const country of cArr) {
  if (vowelsAtLeastHalfLettersOfCountry(country)) {
    cWithOneVowelAtLeastHalfLettersOfItsName.push(country);
  }
}
console.log({ cWithOneVowelAtLeastHalfLettersOfItsName });
