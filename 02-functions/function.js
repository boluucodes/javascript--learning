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