// let num = 1;

// for(i=1; i <= 100; i++) {
//     if(i % 3 ===0 && i % 5 ===0){
//           console.log("FizzBuzz");
//     }
//     else if(i % 3 ===0){
//           console.log("Fizz");
//     }
//     else if(i % 5 ===0){
//           console.log("Buzz");
//     }
//     else{
//           console.log(i);
//     }
  
// }

// define the variables that store the html elements
let input = document.querySelector("#numInput");
let button = document.querySelector("#showResult");
let result = document.querySelector("#result");

button.addEventListener("click", function() {
    // let str = "The button was clicked!";
    // console.log(parseInt(input.value, 10));
    let num = parseFloat(input.value);
    let output = fizzBuzz(num);
    result.textContent = output;
    // console.log(fizzBuzz(num));
});


function fizzBuzz(num) {
    if (num < 1 || num > 100 || isNaN(num)|| !Number.isInteger(num)) {
        return "ERROR! Please enter a wholenumber between 1 and 100.";
    }
    else if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    }else {
        return num;
    
}
}
console.log(fizzBuzz(15)); // Output: FizzBuzz