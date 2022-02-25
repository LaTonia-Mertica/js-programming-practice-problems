// basic exercises that build up to larger exercises/outcomes

const animals = ["dog", "cat", "kangaroo", "dog", "dog"];
let animalsDict = {};

for (let i = 0; i < animals.length; i++) {
  let key = animals[i];
  let index = i;
  //   console.log(animalsDict[key]);

  if (animalsDict[key] === undefined) {
    animalsDict[key] = 1;
  } else {
    animalsDict[key] += 1;
  }
}

console.log(animalsDict);

// expected output
// {
//     dog: 3,
//     cat: 1,
//     kangaroo: 1
// }
