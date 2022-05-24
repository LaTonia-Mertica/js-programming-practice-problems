function countWordsOfString(str) {
  const obj = {};

  for (const letter of str) {
    if (letter === " " || letter === "," || letter === "!") {
      continue;
    }
    if (obj[letter] === undefined) {
      obj[letter] = 1;
    } else {
      obj[letter]++;
    }
  }
  return obj;
}
console.log(
  countWordsOfString("string whose words we are counting, are we not!")
);
