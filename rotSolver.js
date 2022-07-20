/*
Interview question: rot solver
Part I

(If you’ve heard of a rot13 letter substitution cipher, this question is a generalization of that cipher)

Write a function `rot` that:

- takes as arguments: an input string and an amount by which to shift the letters in the string
- returns: the input string, shifted by the shift amount

The function should preserve case — it should be able to handle both upper and lowercase letters — and it should not alter punctuation. The function should support negative numbers. The function should support large shift numbers.

Sample inputs and outputs:


    rot("HELLO", 1) -> "IFMMP" # shift right by 1
    rot("HELLO", 2) -> "JGNNQ" # shift right by 2
    rot("HELLO", -1) -> "GDKKN" # shift left by 1
    rot("HELLO", 27) -> "IFMMP" # shift right by 27, wrapping back to the beginning
    rot("Hello, Rick", 1) -> "Ifmmp, Sjdl" # Preserve case and punctuation
    rot(rot("Hello, Rick", 1), -1) -> "Hello, Rick"

Writing this function will require familiarity with converting between character and ordinals. For example, Python has the `ord` and `chr` functions, and JavaScript has the `charCodeAt` and `fromCharCode` String methods.

You may also find reviewing modular arithmetic (using `%`) to be helpful.

PSEUDOCODE
- assign variable value of alphabet
- given a letter, tell the program move in either direction by the specified number
*/
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

function rot(str, num) {
  const result = [];
  const symbols = [
    " ",
    ".",
    "!",
    "{",
    "}",
    "[",
    "]",
    "~",
    "`",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "|",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    let soughtIdx = 0;

    if (symbols.includes(letter)) {
      result.push(letter);
    }

    if (letter !== letter.toUpperCase()) {
      soughtIdx = alphabet.indexOf(letter.toUpperCase());

      if (soughtIdx === -1) {
        result.push(letter);
      } else {
        result.push(alphabet[soughtIdx + num].toLowerCase());
      }
    } else if (symbols.includes(letter)) {
      result.push(symbols[letter]);
    } else {
      soughtIdx = alphabet.indexOf(letter) + num;

      result.push(alphabet[soughtIdx]);
    }

    if (num === 27) {
      num = 1;
    }
  }
  return result.join("");
}
console.log(rot("Hello Edem!", -1));
console.log(rot("A{B}C!", 3)); // D{E}F!
console.log(rot("tEstinG!!!cASE", 1)); // uFtujoH!!!dBTF
console.log(rot("^CoDE", 27)); // start at beginning aka by one from current ... ^DpEF
// console.log(rot("123", 0)); // 123

// handle case ... done?
// handle punctation ... empty space etc ... done?
// handle wrapping around

// if (typeof parseInt(letter) === "number") {
//   result.push(letter);
// }
