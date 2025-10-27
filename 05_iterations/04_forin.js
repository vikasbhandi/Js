// The for...in loop in JavaScript is used to iterate over the enumerable properties (keys) of an object. It is particularly useful when you want to access the property names of an object or work with all the keys dynamically.
// Key Uses of for...in Loop


// Iterating Over Object Properties:
// It allows you to loop through all the keys of an object, making it ideal for scenarios where you need to inspect or manipulate object properties.
// Javascript
const person = { name: "John", age: 30, city: "Mumbai" };

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
// person["name"]  // → John
// person["age"]   // → 30
// person["city"]  // → Mumbai
}
// Output:
// name: John
// age: 30
// city: Mumbai



// Dynamic Property Access:
// If the properties of an object are not known beforehand, for...in can dynamically retrieve them.


// Iterating Over Arrays (Not Recommended):
// While it can technically be used to iterate over arrays, it is not recommended because it iterates over all enumerable properties, including non-indexed ones, and the order is not guaranteed.
// Javascript
const arr = [10, 20, 30];
for (let index in arr) {
    console.log(index); // Outputs: 0, 1, 2 (keys as strings)
}

// Instead, use a for loop, for...of, or Array.prototype.forEach() for arrays.



// When to Avoid for...in

// Avoid using it for arrays, as it may include inherited or non-index properties.
// If you need to iterate over values instead of keys, consider using for...of or Object.values().

// In summary, the for...in loop is best suited for objects when you need to work with their keys or properties.
