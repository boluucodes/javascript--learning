const users = []; // empty array
const grades = [10, 8, 13, 15]; // array of numbers
const attendees = ["Sam", "Alex"]; // array of strings
const values = [10, false, "John"]; // mixed
// Arrays in JavaScript allow you to store multiple elements in the same variable.

const numbers = [10, 8, 13, 15];
numbers.push(20); // returns 5 (the new length of the array)
console.log(numbers); // [10, 8, 13, 15, 20];
//Array.push() returns the new length of the array.


// Declaring an array with `const` guarantees its type stays fixed while allowing contents to change.

// The .forEach(callback) method allows you to run the callback function for every item in that array.