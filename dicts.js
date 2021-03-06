/*

- obj[key] means access key in object
- assign value by assigning obj[key] = obj2

objects have properties
properties have keys and values
keys access points for values
properties can be any elements in objects 

when need to look at properties of an
object aka dictionary without knowing
the properties of the object ...
use a FOR IN LOOP

STANDARD OPS FOR 'FOR IN' LOOP
- iterate through properties in object (aka for in)
- check typeof property === something specific iterating to find (aka condition)
- manipulate/act on properties that are that something specific iterated to find

*/

// COUNT WORDS FUNCTION
function countWords(str) {
  if (str === "") {
    return {};
  }
  let result = {};
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (result[words[i]] === undefined) {
      result[words[i]] - 1;
    } else {
      result[words[i]] += 1;
    }
  }
  return result;
}
// console.log("COUNTED WORDS: ", countWords("LaTonia Mertica"));

// COUNT MORE WORDS FUNCTION
function countMoreWords(str) {
  let obj = {};
  str.split(" ");
  let word = str.split(" ");
  let count = 0;

  for (let wordCount = 0; wordCount < word.length - 1; wordCount++) {
    let result = word.filter(function (result) {
      return result == word[wordCount];
    }).length;

    let key = word[wordCount];
    obj[key] = result;
  }
  return obj;
}
// console.log("MORE COUNTED WORDS: ", countMoreWords("LaTonia Mertica"));

// REMOVE GREATER THAN FUNCTION
function removeNumberGreaterThan(num, obj) {
  for (let key in obj) {
    let value = obj[key];

    if (typeof value === "number" && value > num) {
      delete obj[key];
    }
  }
}
// console.log("REMOVE GREATER THAN: ", removeNumberGreaterThan());

// REMOVE STRING VALUE LONGER THAN FUNCTION
function removeStringValueGreaterThan(num, obj) {
  for (let key in obj) {
    let value = obj[key];

    if (typeof value === "string" && value.length > num) {
      delete obj[key];
    }
  }
}
// console.log(
//   "REMOVE STRING VALUE GREATER THAN: ",
//   removeStringValueGreaterThan("LaTonia Mertica")
// );

// REMOVE SOMETHING SPECIFIC FROM OBJECT FUNCTION
function removeSomethingSpecific(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      delete obj[key];
    }
  }
}
// console.log("REMOVE SOMETHING SPECIFIC: ", removeSomethingSpecific());

// REMOVE SOMETHING SPECIFIC FROM OBJECT USING Array.isArray FUNCTION
function removeSomethingSpecificUsingArrayIsArray(obj) {
  for (let key in obj) {
    if (Array.isArray(obj[key]) === true) {
      delete obj[key];
    }
  }
}
// console.log(
//   "REMOVE SOMETHING SPECIFIC FROM OBJECT USING Array.isArray: ",
//   removeSomethingSpecificUsingArrayIsArray()
// );

// REMOVE STRING VALUES FUNCTION
function removeStringValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      delete obj[key];
    }
  }
}
// console.log("REMOVE STRING VALUES: ", removeStringValues("Seven"));

// COUNT NUMBER OF KEYS FUNCTION
function countNumberOfKeys(obj) {
  let count = 0;

  for (let key in obj) {
    count++;
  }
  return count;
}
// console.log("COUNT NUMBER OF KEYS: ", countNumberOfKeys());

// SELECT ARRAY IN OBJECT FUNCTION
function select(arr, obj) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      result[arr[i]] = obj[arr[i]];
    }
  }
  return result;
}
// console.log("SELECT ARRAY IN OBJECT: ", select());

// EXTEND OBJECT FUNCTION
function extend(obj1, obj2) {
  for (let obj2Key in obj2) {
    if (obj1[obj2Key] === undefined) {
      obj1[obj2Key] = obj2[obj2Key];
    }
  }
}
// console.log("EXTEND OBJECT: ", extend());

// FOR LOOP NESTED OBJECTS AKA DICTS IN AN ARRAY
let employees = [
  {
    name: "Hunny Bunny",
    age: 3,
    job: "Cute Rompabout",
  },
  {
    name: "Duece Jones",
    age: 17,
    job: "Unpredictably Needy Young Adult",
  },
  {
    name: "Mista Shills",
    age: 52,
    job: "Unassuming Mature Audience Member",
  },
];

for (let i = 0; i < employees.length; i++) {
  // console.log(employees[i].job);
}

// FOR LOOP WITH NESTED FOR IN LOOP USING NESTED OBJECTS AKA DICTS IN AN ARRAY
let workers = [
  {
    alias: "\nGypsy Jim",
    activeYears: 13,
    pastime: "volunteering",
  },
  {
    alias: "\nPoet Maire",
    activeYears: 7,
    pastime: "oration",
  },
  {
    alias: "\nDavid Jerome",
    activeYears: 30,
    pastime: "avid father",
  },
];

for (let i = 0; i < workers.length; i++) {
  for (let key in workers[i]) {
    // console.log(workers[i][key]);
  }
}

// FUNCTION TO RATE RESTAURANTS USING OBJECTS AKA DICTS AND ARRAYS
function restaurantRating(village) {
  let ratingsObj = {};
  let best = village[0];
  let good = [];
  let ratings = 0;

  for (let i = 0; i < village.length; i++) {
    if (village[i].rating > best.rating) {
      best = village[i];
    }
    if (village[i] >= 90) {
      good.push(village[i].name);
    }
    ratings += village[i].rating;
  }

  ratingsObj.best = best.name;
  ratingsObj.good = good;
  let avg = ratings / village.length;
  ratingsObj.avg = avg;

  return ratingsObj;
}

// let myRatings = restaurantRating(myVillage);
// console.log(myRatings);

// TRANSFORM FIRST AND LAST
// example output
// {
//   Kevin : 'Coleman'
// }
array = ["Kevin", "Bacon", "Love", "Hart", "Costner", "Coleman"];
function transformFirstAndLast(array) {
  // create empty object
  // access each element in array
  // set first element in array as key
  // return object with key that has values of elements in array

  let resultDict = {};

  for (let i = 0; i < array.length; i++) {
    let key = array[0];
    resultDict[key] = array[i];
  }
  return resultDict;
}

// OBJECT TO ARRAY OF KEYS ONLY
// expected output
// ['name', 'age', 'hasPets']
let input = {
  name: "Sam",
  age: 25,
  hasPets: true,
};
function getAllKeys(obj) {
  // create empty array
  // access keys in object
  // add keys to array

  let resultArray = [];
  for (let key in obj) {
    resultArray.push(key);
  }
  return resultArray;
}

// ARRAY OF ARRAYS TO OBJECT
// expected outcome
// {
//   make : 'Ford',
//   model : 'Mustang',
//   year : 1964
// }
let input = [
  ["make", "Ford"],
  ["model", "Mustang"],
  ["year", 1964],
];

function transformArrayToObject(array) {
  // create empty object
  // access elements in array
  // set first element in any given array to key in object
  // set second element in any given array to value in object
  // return object with elements as key-value pairs

  let outcomeDict = {};

  for (let i = 0; i < array.length; i++) {
    let key = array[i][0];
    let value = array[i][1];
    outcomeDict[key] = value;
  }
  return outcomeDict;
}

// RETURN OBJECT VALUES IN ARRAY
// expected output
// ['Krysten', 33, false]
let input = {
  name: "Krysten",
  age: 33,
  hasPets: false,
};

function listAllValues(obj) {
  // create empty array
  // access properties of object
  // declare value
  // add values to array

  let outcomeArray = [];

  for (let key in obj) {
    let value = obj[key];
    outcomeArray.push(value);
  }
  return outcomeArray;
}

// TRANSFORM NESTED ARRAYS INTO NESTED OBJECTS
// expected output
// [
//   {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//   {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]

let input = [
  [
    ["firstName", "Joe"],
    ["lastName", "Blow"],
    ["age", 42],
    ["role", "clerk"],
  ],
  [
    ["firstName", "Mary"],
    ["lastName", "Jenkins"],
    ["age", 36],
    ["role", "manager"],
  ],
];

function transformEmployeeData(employeeData) {
  // create empty dict
  // access elements in array of arrays
  // set first element of any given array as object key
  // set second element of any given array as object value
  // add properties to object as nested objects
  // return object

  let outcome = employeeData.map((x) => Object.fromEntries(x));
  return outcome;
}

// TRANSFORM SINGLE OBJECT TO NESTED ARRAYS
// expected output
// [['name', 'Holly'], ['age', 35], ['role', 'producer']]
let input = {
  name: "Holly",
  age: 35,
  role: "producer",
};

function convertObjectToArray(obj) {
  // create empty array
  // access properties of object
  // add object props into array as nested arrays

  let output = Object.keys(obj).map((i) => [i, obj[i]]);
  return output;
}
