/*
Q5. Write a JavaScript program that calculates the simple interest using the formula Simple interest =
(principal * rate * time) / 100.
*/

// solution:

function calculateSimpleInterest(principal, rate, time) {
    let simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
}

let principalAmount = 1000;  // Principal amount in dollars
let interestRate = 5;       // Annual interest rate in percent
let timePeriod = 2;         // Time period in years

let result = calculateSimpleInterest(principalAmount, interestRate, timePeriod);

console.log("Simple Interest:", result);
