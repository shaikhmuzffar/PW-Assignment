// Program to check if a number is positive, negative, or zero using nested ternary operators

const num = parseFloat(prompt("Enter a number:"));

const result = num > 0 ? "Positive" : (num < 0 ? "Negative" : "Zero");

// Output the result
console.log(`The number ${num} is ${result}.`);
