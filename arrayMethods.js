function addTwo(values) {
  return values.map((x) => x + 2);
}
// console.log(addTwo([1, 2, 3]));

const users = [
  { name: "Danny", username: "helloworld" },
  { name: "Ryan", username: "foobar" },
  { name: "David", username: "bizbaz" },
];
// output array of user names
function getNames(arr) {
  return arr.map((user) => user.name);
}
console.log(getNames(users));

function getUserNames(arr) {
  return arr.map((user) => user.username);
}
console.log(getUserNames(users));

function extendMapOnUserNamesAndConcat(arr) {
  return arr
    .map((user) => user.username)
    .map((str) => str + "hello")
    .reverse();
}
console.log(extendMapOnUserNamesAndConcat(users));

const numbers = [1, 2, 4, 4, 3, 2, 2, 5, 100];
// output array of nums w/o number 2s
function noTwos(arr) {
  const result = arr.filter((num) => {
    if (num !== 2) {
      return true;
    } else {
      return false;
    }
  });
  return result;
}
console.log(noTwos(numbers));

// refactor
const numberList = [1, 2, 4, 4, 3, 2, 2, 5, 100];
// output array of nums w/o number 2s
function noTwos(arr) {
  return arr.filter((num) => num !== 2);
}
console.log(noTwos(numberList));
