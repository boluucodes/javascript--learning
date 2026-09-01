const grade = 10;

if (grade > 10) {
    console.log("Passing grade");
} else if (grade === 10) {
    console.log("Passing on the limit");
} else {
    console.log("Failing grade");
}

// Several conditions can be checked sequentially using else if.


function canVote(age) {
    if (age >= 18) {
        return true;
    }
    return false;
}
// Since this function is performing two different actions based on the result of the if condition and its opposite (else),
// then we can rewrite it by dropping the else keyword

condition ? expressionWhenTrue : expressionWhenFalse
function evenOrOdd(number) {
    return (number % 2 === 0) ? "even" : "odd";
}
// ternary operator is a shorthand for if-else statements. It takes three operands:
//  a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false.
