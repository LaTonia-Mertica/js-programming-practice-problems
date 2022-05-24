function removeNumGreaterThan(num, obj) {
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "number" && value > num) {
      delete obj[key];
    }
  }
  return obj;
}
console.log(removeNumGreaterThan(1, { 3: 3 }));
