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
console.log("COUNTED WORDS: ", countWords("LaTonia Mertica"));

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
console.log("MORE COUNTED WORDS: ", countMoreWords("LaTonia Mertica"));

// REMOVE GREATER THAN FUNCTION
function removeNumberGreaterThan(num, obj) {
  for (let key in obj) {
    let value = obj[key];

    if (typeof value === "number" && value > num) {
      delete obj[key];
    }
  }
}
console.log("REMOVE GREATER THAN: ", removeNumberGreaterThan());

// REMOVE STRING VALUE LONGER THAN FUNCTION
function removeStringValueGreaterThan(num, obj) {
  for (let key in obj) {
    let value = obj[key];

    if (typeof value === "string" && value.length > num) {
      delete obj[key];
    }
  }
}
console.log(
  "REMOVE STRING VALUE GREATER THAN: ",
  removeStringValueGreaterThan("LaTonia Mertica")
);

// REMOVE SOMETHING SPECIFIC FROM OBJECT FUNCTION
function removeSomethingSpecific(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      delete obj[key];
    }
  }
}
console.log("REMOVE SOMETHING SPECIFIC: ", removeSomethingSpecific());

// REMOVE SOMETHING SPECIFIC FROM OBJECT USING Array.isArray FUNCTION
function removeSomethingSpecific(obj) {
  for (let key in obj) {
    if (Array.isArray(obj[key]) === true) {
      delete obj[key];
    }
  }
}
console.log(
  "REMOVE SOMETHING SPECIFIC FROM OBJECT USING Array.isArray: ",
  removeSomethingSpecific()
);

// REMOVE STRING VALUES FUNCTION
function removeStringValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      delete obj[key];
    }
  }
}
console.log("REMOVE STRING VALUES: ", removeStringValues("Seven"));

// COUNT NUMBER OF KEYS FUNCTION
function countNumberOfKeys(obj) {
  let count = 0;

  for (let key in obj) {
    count++;
  }
  return count;
}
console.log("COUNT NUMBER OF KEYS: ", removeStringValues());

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
console.log("SELECT ARRAY IN OBJECT: ", removeStringValues());
