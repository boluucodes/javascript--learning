    function sum(x, y){
        return x + y;
    }
    // a function is a reusable block of code
    // the return keyword will quit/exit the function, 
    // without it the function returns undefined and it has to be inside the code
    
    fruits.forEach(function(fruit) {
    console.log(fruit);
});
// the callback function is a function that is passed as an argument to another function. 
// It is executed after the outer function has completed its execution.

// arrow functions
// Arrow functions are a more concise way to write functions in JavaScript.

//Block Body (Explicit Return — WITH curly braces)-
// ✅ Correct: Explicit return inside curly braces
years.find((year) => {
    console.log("Checking:", year);
    return year === searchYear; // Must explicitly use 'return'
});


// Concise Body (Implicit Return — NO curly braces)
// When you omit {} and place an expression directly after =>,
//  JavaScript automatically returns the result of that expression:

// ✅ Correct: Automatically returns true or false
years.find((year) => year === searchYear);;


//The array .map(callback) method allows you to transform an array into another one.
const numbers = [4, 2, 5, 8];
const doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [8, 4, 10, 16]


//The array .includes(item) method takes an item and 
// returns true when that item exists in the array and false otherwise.
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("date")); // false


//The array .join(glue) method returns a string of the array elements separated by the glue.
const fruitss = ["apple", "banana", "cherry"];
console.log(fruitss.join(", ")); // "apple, banana, cherry"
console.log(fruitss.join(" and ")); // "apple and banana and cherry"
