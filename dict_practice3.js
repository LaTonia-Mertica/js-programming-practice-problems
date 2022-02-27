let favIceCreamDict = {};
favIceCreamDict["LaTonia"] = "Vanilla";
favIceCreamDict["Jessica"] = "Butter Pecan";
favIceCreamDict["LaTonia"] = "Strawberry";
favIceCreamDict["Jessica"] = "Strawberry";

// console.log(favIceCreamDict["Jessica"]);

for (let key in favIceCreamDict) {
  //   console.log(key, favIceCreamDict[key]);
}
// console.log(favIceCreamDict);

// key = strings of ice cream flavors
// values arrays of people who like that flavor
let newDict = { strawberry: ["LaTonia", "Jessica"] };
newDict["chocolate"] = ["Evelyn", "John"];
// console.log(newDict);

for (let key2 in newDict) {
  //   console.log(key2, newDict[key2]);
}
newDict["chocolate"].push("Karen");
console.log(newDict);
newDict["Swirl"] = ["Tessa"];
newDict["Tapioca"] = ["Cynthia"];

// flavor: flavor name ... people: flavor loved by those people
for (let key3 in newDict) {
  console.log("\n" + key3 + "\n========");
  let people = newDict[key3];
  for (let index = 0; index < people.length; index++) {
    console.log("*" + people[index]);
  }
}
