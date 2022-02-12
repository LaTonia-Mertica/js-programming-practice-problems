// function named countBs w/two parameters named string and letter
function countBs(string, letter) {
  // declare variable named count and assign value zero
  let count = 0;
  // loop declaring char variable initialized at 0, less than length of string, and to increment
  for (let char = 0; char < string.length; char++) {
    // statement that when char of string equals value of letter
    if (string[char] === letter) {
      // increase by one the count for the letter
      count++;
    }
  }
  // return value of count
  return count;
}
// console log per value passed as argument for string and specified letter
console.log(countBs("BOISBERBOUSBBCUSABRITISHTVBROADCAST", "B"));

// another option
// function named countLetter passing string argument
function countLetter(string) {
  // returning via countBs function established in previous code block passing string and letter with letter actual letter value (not param)
  return countBs(string, "L");
}
// console log count for specified letter in second position of previous return statement and per string in first/only argument position of console.log
console.log(countLetter("LAVISHISLANDLYLOCALEOFHOPE"));
