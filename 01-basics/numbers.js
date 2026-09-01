let nb = 1_000_000; 
// 1000000 (1 million). _ used to rep larger numbers

let answer = 42;
answer.toString(); 
//"42", converts a number to string

let str = "42";
Number.parseInt(str, 10); 
//42, converts a string to number

Number.parseInt(string, radix);
// string is the character you want to change to a num
// the radix is the base of the num system you'd want to use eg 10
// Why Use Number.parseInt Over parseInt?
// Global Namespace Pollution: Using Number.parseInt avoids relying on global variables, making code modular and clearer.

// Consistency: Modern JS practices group utility methods under their corresponding 
// type namespaces (Number.parseFloat, Number.isNaN, Number.isInteger, Array.isArray).

// Division remainder
8 % 2; // Division remainder is 0
7 % 2; // Division remainder is 1

// Number Methods
Math.round(2.1); // 2
Math.round(2.6); // 3
// Math.round() rounds a number to the nearest whole number

Math.floor(2.1); // 2
Math.floor(2.6); // 2
// Math.floor() always "floors" (rounds down) the number to the next lower integer.


Math.ceil(2.1); // 3
Math.ceil(2.6); // 3
// Math.ceil() always "ceils" (rounds up) the number to the next higher integer.


