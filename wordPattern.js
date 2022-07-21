/*
Interview question: Word Pattern

This is a retired 60-minute coding question from Dropbox. A good goal would be to be able to finish Part 1 within the 60 minutes, and then to come up with a plan for Part 2 even if you don’t have time to implement it fully.

Part 1
Write a function that takes as arguments two strings: `pattern` and `input`. Return whether or not the words in `input` match the pattern of the characters in `pattern`.

Example 1:
| `pattern: 'abba'`            |
| ---------------------------- |
| `input: 'red blue blue red'` |
| `result: True`               |

PSEUDOCODE
- fn
- input of two strings
- split each string into array of elements (split chars; split on space; ...)
- storage object w/keys of unique element from pattern string
- same storage object w/value of unique element from input string
- ensure elements in each string array retain initial order/index
- compare the order of each element in the pattern string by ensuring the initial value set to the key remains the same per each input string
- return true when pattern matches
- return false when pattern does not match
*/
function wordPattern(pattern, input) {
  const wordPatternObj = {};
  pattern = pattern.split("");
  input = input.split(" ");

  if (pattern.length !== input.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const pEle = pattern[i];
    const iEle = input[i];

    if (!wordPatternObj[pEle]) {
      wordPatternObj[pEle] = iEle;
    } else if (wordPatternObj[pEle]) {
      if (wordPatternObj[pEle] !== iEle) {
        return false;
      }
    }
  }
  return true;
}
console.log(wordPattern("abba", "red blue blue red"));
console.log(wordPattern("abba", "red purple blue red"));
