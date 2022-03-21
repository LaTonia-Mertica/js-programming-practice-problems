let stateCapitals = {
  Alabama: "Montgomery",
  Alaska: "Juneau",
  Arizona: "Phoenix",
  Arkansas: "Little Rock",
  California: "Sacramento",
  Colorado: "Denver",
  Connecticut: "Hartford",
  Delaware: "Dover",
  Florida: "Tallahassee",
  Georgia: "Atlanta",
  Hawaii: "Honolulu",
  Idaho: "Boise",
  Illinois: "Springfield",
  Indiana: "Indianapolis",
  Iowa: "Des Moines",
  Kansas: "Topeka",
  Kentucky: "Frankfort",
  Louisiana: "Baton Rouge",
  Maine: "Augusta",
  Maryland: "Annapolis",
  Massachusetts: "Boston",
  Michigan: "Lansing",
  Minnesota: "Saint Paul",
  Mississippi: "Jackson",
  Missouri: "Jefferson City",
  Montana: "Helena",
  Nebraska: "Lincoln",
  Nevada: "Carson City",
  "New Hampshire": "Concord",
  "New Jersey": "Trenton",
  "New Mexico": "Santa Fe",
  "New York": "Albany",
  "North Carolina": "Raleigh",
  "North Dakota": "Bismarck",
  Ohio: "Columbus",
  Oklahoma: "Oklahoma City",
  Oregon: "Salem",
  Pennsylvania: "Harrisburg",
  "Rhode Island": "Providence",
  "South Carolina": "Columbia",
  "South Dakota": "Pierre",
  Tennessee: "Nashville",
  Texas: "Austin",
  Utah: "Salt Lake City",
  Vermont: "Montpelier",
  Virginia: "Richmond",
  Washington: "Olympia",
  "West Virginia": "Charleston",
  Wisconsin: "Madison",
  Wyoming: "Cheyenne",
};

// UNUSED POSSIBLY HELPFUL CODE BITS
// let vowels = ["A", "E", "I", "O", "U", "Y"];
// let stateStartsWithVowel = {};
// let capitalStartsWithVowel = {};

// // INITIAL OUTPUTS
console.log("\nSTATES:\n" + Object.keys(stateCapitals) + "\n");
console.log("CAPITALS:\n" + Object.values(stateCapitals) + "\n");

for (let stateKey in stateCapitals) {
  let capital = stateCapitals[stateKey];

  for (let capitalKey in stateCapitals) {
  }
  console.log("STATE: " + stateKey + ", CAPITAL: " + capital);
}

// SUBSEQUENT OUTPUTS
for (const key of Object.keys(stateCapitals)) {
  console.log("THE STATES: ", key);
}

for (const value of Object.values(stateCapitals)) {
  console.log("THE CAPITALS: ", value);
}

for (const [key, value] of Object.entries(stateCapitals)) {
  console.log("THE STATE: ", key + ", WITH CAPITAL: " + value);
}

for (const key of Object.keys(stateCapitals)) {
  // check whether key doesn't begin with specified letters
  if (
    !key.startsWith("A") &&
    !key.startsWith("I") &&
    !key.startsWith("O") &&
    !key.startsWith("U")
  ) {
    // skip when doesn't
    continue;
  }
  let value = stateCapitals[key];
  console.log("VOWEL START STATE: ", key + ", WITH CAPITAL: ", value);
}

for (const [key, value] of Object.entries(stateCapitals)) {
  // check whether value doesn't begin with specified letters
  if (
    !value.startsWith("A") &&
    !value.startsWith("I") &&
    !value.startsWith("O") &&
    !value.startsWith("U")
  ) {
    // skip when doesn't
    continue;
  }
  console.log("VOWEL START CAPITAL: ", value + ", IN STATE: ", key);
}

// INSTRUCTIONS
// Console log all of the keys in the dictionary, using the Object.keys method. (This will be console logging an array)

// Console log all of the values in the dictionary, using the Object.values method. (This will be console logging an array)

// Print all of the key, value pairs in the dictionary, one key, value pair per line.
// Example output:
//     State: Wisconsin, capital: Madison
//     State: Wyoming, capital: Cheyenne

// Print all of the key, value pairs in the dictionary, where the key starts with a vowel, one key, value pair per line.
// Example output:
//    These are all of the states+capitals whose states start with a vowel:
//    State: Idaho, capital: Boise
//    State: Illinois, capital: Springfield

// Print all of the key, value pairs in the dictionary, where the value starts with a vowel, one key, value pair per line.
// Example output:
//    These are all of the states+capitals whose capitals start with a vowel:
//    State: Georgia, capital: Atlanta
//    State: Maryland, capital: Annapolis
