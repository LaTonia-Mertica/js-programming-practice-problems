/*
DEEP COMPARISON

== operator compares objects by identity
=== operator compares values directly

Object.keys function is useful in comparing properties of objects

typeof operator compares properties AND when typeof produces "object" 
for compared values then a deep comparison should be done

note: typeof null ALSO PRODUCES "object"

- create function named deepEqual
- function must take two values
- function must return true only if values are equal or are objects with the same properties
- comparison of property values must be done with recursive call to fn
*/

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" || b == null || typeof b != "object")
    return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);
  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, { here: 1, object: 2 }));
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
