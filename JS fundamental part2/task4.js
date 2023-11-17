// Program to check if a person is eligible to vote using a ternary operator

const age = parseInt(prompt("Enter your age:"));

const eligibility = age < 18 ? "You cannot vote" : "You can vote";

// Output the result
console.log(eligibility);
