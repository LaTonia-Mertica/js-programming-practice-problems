// CRUD exercises for data structures

// --------------------------------------------------------------------------
// PROBLEM SET 1: ARRAYS

// CREATE
// - First, create an empty array called fruitsArr
// - Now, append the array with 5 fruits (ex: "apple", "orange", etc)
let fruitsArr = [];
fruitsArr.push("lychee", "durian", "jackfruit", "rambutan", "goji berry");
console.log("\nFRUITS ARRAY\n", fruitsArr);

// READ: now that we have our fruits array, we want to be able to read from it
// to learn about what's in it
// - Print the first item in the array
// - Print the last item in the array
// - Iterate over the array with a for loop and print each item
console.log("\nFIRST ARRAY ITEM: " + fruitsArr[0]);
console.log("\nLAST ARRAY ITEM (SLICE METHOD): " + fruitsArr.slice(-1)[0]);
console.log(
  "LAST ARRAY ITEM (SLICE METHOD W/POP METHOD): " +
    fruitsArr.slice(-1).pop() +
    "\n"
);

for (let i = 0; i < fruitsArr.length; i++) {
  console.log(
    "\nFOR LOOP TO FRUITS\n" + "INDEX " + i + ": " + fruitsArr[i] + "\n"
  );
}

// UPDATE: you can update an array by adding items to the array or updating an
// existing item in the array
// - Now, change the first item in the array to be "mango"
// - Now, append the fruit "calamansi" to the fruits array (appending something
//   is a form of updating our existing array)
fruitsArr.unshift("mango");
console.log("UNSHIFT METHOD PREPENDS/ADDS TO FRONT OF ARRAY\n", fruitsArr);
fruitsArr.push("calamansi");
console.log("\nPUSH METHOD APPENDS/ADDS TO BACK OF ARRAY\n", fruitsArr);

// DELETE: you can also delete things from an array
// - Delete the last item in the array
fruitsArr.pop();
console.log("\nPOP METHOD DELETES LAST ARRAY ITEM\n", fruitsArr);
console.log("\n");

// --------------------------------------------------------------------------
// PROBLEM SET 2: DICTIONARIES (aka javascript objects)

// CREATE
// - First, create an empty dictionary called fruitsDict
// - Now, populate the dictionary with 5 fruit names (the keys) and their
//   prices (the values). The fruits should be:
//      - "apple" which costs 0.50
//      - "pear" which costs 1.14
//      - "orange" which costs 1.23
//      - "grapes" which costs 3.24
//      - "mango" which costs 2.20

let fruitsDict = {};
fruitsDict["apple🍎"] = 0.5;
fruitsDict["pear🍐"] = 1.14;
fruitsDict["orange🍊"] = 1.23;
fruitsDict["grapes🍇"] = 3.24;
fruitsDict["mango🥭"] = 2.2;

// test dict data accss
// console.log("\nFRUITS DICT KEYS\n", Object.keys(fruitsDict));
// console.log("\nFRUITS DICT VALUES\n", Object.values(fruitsDict));
// console.log("\nFRUITS DICT KEY-VALUE PAIRS\n", Object.entries(fruitsDict));
console.log("PRINT ALL PROPS", Object.getOwnPropertyNames(fruitsDict));
console.log(
  "PRINT EMPTY [] WHICH RETURNS BUILT-IN LENGTH METHOD",
  Object.getOwnPropertyNames([])
);
console.log(
  "PRINT NUM OF OBJ KEY-VALUE PAIRS",
  Object.entries(fruitsDict).length
);
console.log("\n");

// READ
// - Iterate over the dictionary with a for loop and print each key (fruit name)
for (let fruit in fruitsDict) {
  //   console.log(fruitsDict.length); // returns undefined
  console.log("PRINT KEY: ", fruit);
}
console.log("\n");

let fruitNames = Object.entries(fruitsDict);
for (let i = 0; i < Object.entries(fruitsDict).length; i++) {
  console.log("PRINT FRUIT NAMES ONE AT A TIME", fruitNames[i][0]);
}
console.log("\n");
console.log("PRINT KEY USING OBJ ENTRIES FOR FRUIT NAMES: ", fruitNames);
console.log("\n");

// - Iterate over the dictionary with a for loop and print each value (cost)
for (let fruit in fruitsDict) {
  let price = fruitsDict[fruit];
  console.log("PRINT PRICE: ", price);
}
console.log("\n");

// - Iterate over the dictionary with a for loop and print each key (fruit name) and value (cost)
for (let fruit in fruitsDict) {
  let value = fruitsDict[fruit];
  console.log("fruit:", fruit + " costs: ", value);
}
console.log("\n");

// UPDATE
// - Add a new key and value to the fruits dictionary, where "kiwi" is the key
//   and 5.13 is the value.
fruitsDict["kiwi🥝"] = 5.13;
console.log("UPDATED TO INCLUDE KIWI", fruitsDict);
console.log("\n");

// DELETE
// - Print the dictionary first. Then, delete the key for "kiwi" that you added
//   in the previous step. Then, print the dictionary again. Is the key for
//   "kiwi" and its value of 5.13 gone? Did we delete it successfully?
console.log("KIWI PRICE ONLY", fruitsDict["kiwi🥝"]);
delete fruitsDict["kiwi🥝"];
console.log("KIWI SHOULD NOW BE UNDEFINED", fruitsDict["kiwi🥝"]);
console.log("DELETED KIWI MEANS NO KIWI ON LIST", fruitsDict);
console.log("\n");

// --------------------------------------------------------------------------
// PROBLEM SET 3: ITERATING OVER THE FRUITS DICTIONARY
// Using the fruitsDict from the previous problem, can you tell me the total
// cost of all fruits in the dictionary?

// --------------------------------------------------------------------------
// PROBLEM SET 4: CHECKING FOR ITEMS IN YOUR FRUITS DICTIONARY
// A customer sends a message to your online fruit store. They send an array of
// fruits that they want to buy:
//      order = ["mango", "orange"]
// Using the array they sent and your fruitsDict, can you calculate the total
// cost of the fruits that they want to buy?

// A customer sends a message to your online fruit store. They send an array of
// fruits that they want to buy:
//      order = ["mango", "strawberry"]
// But oh no! Some of the fruits in their order are not in your fruitsDict. Can
// you find the fruits that are unavailable (not in your fruits dict) and let
// the customer know which ones they are?

// Now, the customer has sent both the fruit names and the quantities that they
// would like in the form of an order dictionary:
//      orderDict = {
//          "mango": 2,
//          "orange": 5
//      }
// In the orderDict, they are telling you they want 2 mangoes and 5 oranges.
// Using the dictionary they sent and your fruitsDict, can you calculate the total
// cost of the fruits that they want to buy?
