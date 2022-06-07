/*
Create fn to get last character of a string
*/

function getLastCharacterOfString(str) {
  const lastIdx = str.length - 1;
  const lastChar = str[lastIdx];
  return lastChar;
}
console.log(
  getLastCharacterOfString(
    "Practice as much as possible while diversifying study methods for maximum results!"
  )
);
