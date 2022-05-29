const fs = require("fs");
const cStr = fs
  .readFileSync("countries.txt")
  .toString("utf-8")
  .toUpperCase()
  .trim();
const cArr = cStr.split("\n");

function getOneVowelCountries(arr) {
  const oneVowelCountries = [];
  const multiVowelCountries = [];
  const oneVowelCountryNamesThatAreAtLeast50PercentTheVowel = [];

  const vowels = ["A", "E", "I", "O", "U", "Y"];
  let vCount = 0;
  const invalidChars = [" ", "'", "(", ")", "-", "′", "."];
  let iCount = 0;

  for (const c of cArr) {
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
      console.log({ oneVowelCountries });
    }
    if (hasOneVowel && atLeast50PercentVowels) {
      oneVowelCountryNamesThatAreAtLeast50PercentTheVowel.push(c);
    }
  }
  return oneVowelCountryNamesThatAreAtLeast50PercentTheVowel;
}

// getOneVowelCountries();
console.log(getOneVowelCountries());
