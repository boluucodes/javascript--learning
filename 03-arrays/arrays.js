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

const fruits = ["apple", "banana", "cherry"];

// The callback function runs 3 times (once per fruit)
fruits.forEach((fruit) => {
    console.log(fruit);
});
// The .forEach(callback) method allows you to run the callback function for every item in that array.

function logUserIds(userIds) {
    userIds.forEach(function(userId) {
        console.log(userId);
    });
    return true; // ✅ return from the logUserIds function
}
// the return keyword returns from its own function


array.filter()
//`filter()` creates a new array containing only elements that pass a test function.
//filter() always returns an array. Even if it matched one item or no items.



array.find()
// The .find() method returns the first array item that matches the callback condition or undefined.

