// basic exercises that build up to larger exercises/outcomes

let animals = ["dog", "cat", "kangaroo"];
let animalsDict = {};

// for (let i = 0; i < animals.length; i++) {
//   console.log("JUST I: ", i);
//   console.log("ARRAY ITEMS: ", animals[i]);
// }

// console.log(animals[0]);

for (let i = 0; i < animals.length; i++) {
  key = animals[i];
  value = i;
  animalsDict[key] = value;
}

// animals.push("frog");
// animals.unshift("monkey");
// console.log(animals);

// key = animal name ... dog
// value = index of animal ... 0
// output s/b dog: 0
// animals = {
//   dog: 0,
//   cat: 1,
//   kangaroo: 2,
// };
// console.log(animals["cat"]);

// animals["monkey"] = 3;
// console.log(animals);

// delete animals["kangaroo"];

// ACTIVE CODE PER PSEUDOCODE BELOW
// instantiate empty dict
// iterate animals array
// add every animal and its index as key-value pair to dict

console.log(animalsDict);
