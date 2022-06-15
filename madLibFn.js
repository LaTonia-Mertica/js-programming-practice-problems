/*
madLib

Write a function that takes three strings - a verb, an adjective, and a noun - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.

For example,

> madLib('make', 'best', 'guac');
"We shall MAKE the BEST GUAC."

NOTE: this challenge courtesy App Academy https://open.appacademy.io/learn/full-stack-online/javascript/intro-javascript-problems--part-1-
*/
function madLib(verb, adj, noun) {
  verb = verb.toUpperCase();
  adj = adj.toUpperCase();
  noun = noun.toUpperCase();

  return `We Shall ${verb} the ${adj} ${noun}`;
}
console.log(madLib("solve", "worst", "crises"));
