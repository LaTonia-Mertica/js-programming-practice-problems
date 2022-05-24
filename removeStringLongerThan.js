function removeStringLongerThan(num, obj) {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "string" && value.length > num) {
      delete obj[key];
      return value.length;
    }
  }
  return obj;
}
console.log(
  removeStringLongerThan(11, { key: "Howdy", key2: "Hello", key3: "Goodday" })
);
