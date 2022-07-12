var person1 = {
  name: "Adam",
  age: 44,
  occupation: "Software Engineer",
};
var person2 = {
  name: "Betty",
  age: 18,
  occupation: "Student",
};
var person3 = {
  name: "Candice",
  age: 87,
  occupation: "Retired",
};
var person4 = {
  name: "Dorothy",
  age: 2,
  occupation: "Baby",
};

var peopleArr = [person1, person2, person3, person4];

// switch peopleObj1 with peopleObj2 to sort eldest to youngest
peopleArr.sort(function (peopleObj1, peopleObj2) {
  return peopleObj1.age - peopleObj2.age;
});
console.log({ peopleArr });
