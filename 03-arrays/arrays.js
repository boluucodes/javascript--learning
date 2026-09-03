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

array.includes()
//`includes()` checks if an array contains a specific element and returns true or false.

array.join()
//`join()` creates a string from an array, with elements separated by a specified separator.sh

array.find()
// The .find() method returns the first array item that matches the callback condition or undefined.


// Fixed version using your original structure
export function getAverageValue(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];
    }
    return sum / grades.length; // Return the number directly!
}

//same result but shorter version using reduce
export function getAverageValue(grades) {
    return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

// Fixed version using your original structure
export function getPassingGrades(grades) {
    const passingGrades = []; // 1. Declare array OUTSIDE the loop

    for (const grade of grades) {
        if (grade >= 10) {
            passingGrades.push(grade); // 2. Push passing grades
        }
    }

    return passingGrades; // 3. Return the populated array at the end
}

// same result but shorter version using filter
export function getPassingGrades(grades) {
    return grades.filter((grade) => grade >= 10);
}
