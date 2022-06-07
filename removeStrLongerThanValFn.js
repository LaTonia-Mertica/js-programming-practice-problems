/*
Create fn to remove a string if that string is longer than a value
*/
function removeStringLongerThanInputNumValue(num, obj) {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "string" && value.length > num) {
      delete obj[key];
    }
    return "VALUE AFTER LONG STRING DELETED: " + value;
  }
}
console.log(
  removeStringLongerThanInputNumValue(22, {
    key: "thisStringValueIsLongEnoughToBeDeleted",
    key: "Keep This String!",
  })
);
