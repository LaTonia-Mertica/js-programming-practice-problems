/*

concat arrays
- arr = arr1.concat(arr2)

return new array with all elements of the 
given array but not including a given index
for this example given index is the first (0)
- array.slice(n+1)

return new array from start aka first index (0)
of the array but not including the end of array
- array.slice(0, n)

return all except first of array
- array.slice(1)

return all except last of array
- array.slice(0, -1)
- arr.pop()

slice automatically copies to the end of the array

keys are strings
even when no quotes
always strings, but
not always words

bracket notation versus dot notation
- keys can have spaces when in quotes
- keys can have slash when in quotes
- bracket notation requires quotes
- bracket notation works in all use cases
- can concat strings in brackets to create key
- bracket notation works with keys called 'key
(because the name has to be in quotes)
- dot notation does not use quotes
- dot notation only works w/exact key
- dot notation won't work if key named 'key'

delete aka remove properties means delete/remove value(s) of the key




*/

// NEW ARRAY WITH ALL ELEMENTS EXCEPT GIVEN INDEX
let result = [];
for (let i = n + 1; i < array.length; i++) {
  result.push(array[i]);
}

// TURN STRING INTO ARRAY OF CHARACTERS
function getAllCharacters(str) {
  return str.split("");
}

// RETURN WORDS IN ARRAY OR EMPTY ARRAY
function getAllWords(str) {
  if (str === " ") {
    return [];
  } else {
    return str.split(" ");
  }
}

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
console.log("SELECT ARRAY IN OBJECT: ", select());

// EXTEND OBJECT FUNCTION
function extend(obj1, obj2) {
  for (let obj2Key in obj2) {
    if (obj1[obj2Key] === undefined) {
      obj1[obj2Key] = obj2[obj2Key];
    }
  }
}
console.log("EXTEND OBJECT: ", extend());

// NEW ARRAY WITH ELEMENT ADDED TO FRONT
function addToFrontOfNewArray(arr, element) {
  let newArr = arr.splice();
  newArr.unshift(element);
  return newArr;
}
console.log("NEW ARRAY WITH ELEMENT ADDED TO FRONT: ", addToFrontOfNewArray());

// GET INDEX WITHOUT USING indexOf()
function getIndexOf(char, str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}
console.log("GET INDEX WITHOUT USING INDEXOF: ", getIndexOf());

// REMOVE DOUBLE SPACE & RETURN SINGLE SPACE FOR STRINGS
function convertDoubleSpaceToSingle(str) {
  return str.split("  ").join(" ");
}
console.log(
  "REMOVE DOUBLE SPACE & RETURN SINGLE IN STRINGS: ",
  convertDoubleSpaceToSingle()
);

// GET ALL EXCEPT NTH ELEMENT OF ARRAY
function getAllBut(array, n) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (i === n) {
      continue;
    }
    result.push(array[i]);
  }
  return result;
}
console.log("GET ALL EXCEPT NTH ELEMENT OF ARRAY: ", getAllBut());

// GET ALL EXCEPT NTH ELEMENT OF ARRAY OTHER OPTION
function getAllButToo(array, n) {
  array.slice(n, 1);
  return array;
}
console.log("GET ALL EXCEPT NTH ELEMENT OF ARRAY TOO: ", getAllButToo());

// GET MINIMUM LENGTH OF 3 WORDS WITHOUT USING IF/ELSE
function findMinLengthOf3Words(word1, word2, word3) {
  let array = [word1, word2, word3];
  let minLength = word1.length;

  for (let i = 1; i < array.length; i++) {
    if (array[i].length < minLength) {
      minLength = array[i].length;
    }
  }
  return minLength;
}
console.log(
  "MINIMUM LENGTH OF 3 WORDS WITHOUT USING IF/ELSE: ",
  findMinLengthOf3Words()
);

// FIND MAXIMUM LENGTH OF 3 WORDS
function findMaxLengthOf3Words(word1, word2, word3) {
  let array = [word1, word2, word3];
  let maxLength = word1.length;

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > maxLength) {
      maxLength = array[i].length;
    }
  }
  return maxLength;
}
console.log("MAXIMUM LENGTH OF 3 WORDS: ", findMaxLengthOf3Words());

// GET LONGEST OF 3 WORDS
function getLongestOf3Words(word1, word2, word3) {
  let words = [word1, word2, word3];
  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log("LONGEST OF 3 WORDS: ", getLongestOf3Words());

// FIND SHORTEST OF 3 WORDS
function findShortestOf3Words(word1, word2, word3) {
  let words = [word1, word2, word3];
  let shortest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i];
    }
  }
  return shortest;
}
console.log("SHORTEST OF 3 WORDS: ", findShortestOf3Words());

// FIND SHORTEST OF 3 WORDS USING IF/ELSE
function findShortestOfThreeWords(word1, word2, word3) {
  if (word1.length <= word2.length) {
    if (word1.length <= word3.length) {
      return word1;
    } else {
      return word3;
    }
  } else {
    if (word2.length <= word3.length) {
      return word2;
    } else {
      return word3;
    }
  }
}
console.log("SHORTEST OF 3 WORDS: ", findShortestOfThreeWords());

// FIND SHORTEST OF 3 WORDS USING IF/ELSE OTHER OPTION
function findShortestOfTresWords(word1, word2, word3) {
  if (word1.length < word2.length) {
    return word1;
  } else if (word1.length <= word2.length) {
    return word1;
  } else if (word2.length < word3.length) {
    return word2;
  } else if (word2.length <= word3.length) {
    return word2;
  }
}
console.log("SHORTEST OF 3 WORDS: ", findShortestOfTresWords());
