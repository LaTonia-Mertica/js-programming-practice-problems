const fs = require("fs");
const countriesStr = fs.readFileSync("countries.txt").toString("utf-8");
const countriesArr = countriesStr.toUpperCase().split("\n");

let shortest_word;
let equal_shortest_words = [];

for (word of countriesArr) {
  if (word === "") {
    continue;
  }
  if (!shortest_word) {
    shortest_word = word;
  }
  if (word.length < shortest_word.length) {
    console.log(equal_shortest_words);
    equal_shortest_words = [];
    console.log(equal_shortest_words);
    shortest_word = word;
  }
  if (word.length === shortest_word.length) {
    equal_shortest_words.push(word);
  }
  console.log("INSIDE LOOP:", shortest_word);
}
console.log("OUTSIDE LOOP:", shortest_word);
console.log("SHORTEST WORDS OF EQUAL LENGTH:", equal_shortest_words);

// below code block initial and basic approach to the ties solution:
// for (word of countriesArr) {
//   if (word.length === shortest_word.length) {
//     equal_shortest_words.push(word);
//   }
// }
///////////////////////
//////////////////////

// below two questions per initial results of basic approach to ties solution:
// reasons apparently two sets of short words but each set diff length from the other
// reasons apparently duplicate words listed
//////////////////////
/////////////////////

// sudo code for shortest word solution
// declare variable to be the shortest word if no shortest word exists
// declare a variable to store the shortest word
// loop through list of countries to get the length of each word
// check length of current word
// compare the length of previous and current word
// update the variable to the value of the shortest word
// console log/invoke function to display the shortest word
//////////////////////
/////////////////////

// sudo code for equal length shortest words solution
// declare variable to store shortest words of equal length
// compare all words and track the shortest word between each word
// update shortest word to be value of newest shortest word when newest shortest word is shorter than previous/current shortest word
// compare shortest word length for matching length with other shortest word
// add into the variable shortest words of the same length
// console log to display all the shortest words that are equal length
///////////////////////////////////////////
//////////////////////////////////////////

// MISC NOTES: in this scenario makes sense to ask what is meant by "handle ties"
// MISC OBSERVATION: interesting that the output of shortest word seems to change but remains a four-letter word from the overall list of shortest words ...
