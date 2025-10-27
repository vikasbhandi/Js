<!-- For Of Loop

The for...of loop in JavaScript is used to iterate over the values of an iterable object such as arrays, strings, maps, sets, and more. -->

// Iterating Over an Array
const array = [1, 2, 3, 4, 5];
for (const item of array) {
   console.log(item);
}
// Output: 1 2 3 4 5
// Iterating Over a String
const str = "Hello";
for (const char of str) {
   console.log(char);
}
// Output: H e l l o
// Iterating Over a Map
const map = new Map([["name", "Akash"], ["age", 25], ["city", "Noida"]]);
for (let [key, value] of map) {
   console.log(`${key}: ${value}`);
}
// Output: name: Akash age: 25 city: Noida
// Iterating Over a Set
let set = new Set([1, 2, 3, 4, 5]);
for (let value of set) {
   console.log(value);
}
// Output: 1 2 3 4 5