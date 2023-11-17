// The ternary operator is a concise way to write simple conditional statements in many programming languages.
//  It's often referred to as the conditional operator.
// The syntax is as follows:

(condition) ? expression_if_true : expression_if_false;

// If the condition is true, the expression before the : is evaluated and becomes the result.
// If the condition is false, the expression after the : is evaluated and becomes the result.

// Program to check if a number is even or odd using the ternary operator

const num = parseInt(prompt("Enter a number:"));

const result = num % 2 === 0 ? "Even" : "Odd";

// Output the result
console.log(`The number ${num} is ${result}.`);

