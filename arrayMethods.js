function addTwo(values) {
  return values.map((x) => x + 2);
}
console.log(addTwo([1, 2, 3]));

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

// fn: accepts arr as input; returns bool re: all usernames are at least 4 chars long
const usernames = ["helloworld", "foobar", "bizbaz", "foobiz", "foo"];
function isAtLeast4Chars(arr) {
  return arr.every((un) => un.length >= 4); // false
}
console.log(isAtLeast4Chars(usernames));

// fn: uses filter to get uns that are at least 4 chars in length
const usernameList = ["helloworld", "foobar", "bizbaz", "foobiz", "foo"];
function is4CharsOrMore(arr) {
  return arr.filter((un) => un.length >= 4);
}
console.log(is4CharsOrMore(usernameList));

const todosList = [
  { id: 1, task: "Take out trash", isCompleted: true },
  { id: 2, task: "Walk the dog", isCompleted: false },
  { id: 3, task: "Buy groceries", isCompleted: false },
];
// fn: update todo by taking in array of todos and changing todos with isCompleted of false to true
function isCompleted(arr) {
  return arr.map((t) => {
    t.isCompleted = true;
    return t;
  });
}
console.log(isCompleted(todosList));

const listOfTodos = [
  { id: 1, task: "Take out trash" },
  { id: 2, task: "Walk the dog", isCompleted: false },
  { id: 3, task: "Buy groceries", isCompleted: false },
];
function isCompleteTodo(arr) {
  return arr.map((t) => {
    return { ...t, isCompleted: true, wasFun: "yes" };
  });
}
console.log(isCompleteTodo(listOfTodos));

// fn: using filter that takes two params (arr, id) where id reps id of todo to delete
const listedTodos = [
  { id: 1, task: "Take out trash" },
  { id: 2, task: "Walk the dog", isCompleted: false },
  { id: 3, task: "Buy groceries", isCompleted: false },
];
function deleteTodo(arr, id) {
  return arr.filter((td) => id !== td.id);
}
console.log(deleteTodo(listedTodos, 3));
