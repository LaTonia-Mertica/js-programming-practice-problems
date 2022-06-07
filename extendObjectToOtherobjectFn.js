/*
Create fn that takes properties from one object and adds the properties to another if the properties are not already in the target object

note: this does not modify the source object meaning the object properties are being taken from
*/
function extendObj(obj1, obj2) {
  console.log({ obj1 });
  for (const obj2Key in obj2) {
    if (obj1[obj2Key] === undefined) {
      obj1[obj2Key] = obj2[obj2Key];
    }
  }
  return obj1;
}
// note properties of second object added to front of first object
console.log(
  extendObj({ a: "ayy", b: "bee", c: "see" }, { 1: "one", 2: "two", c: "see" })
);
