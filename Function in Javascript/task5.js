function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    } else {
        // Recursive case: n! = n * (n-1)!
        return n * factorial(n - 1);
    }
}

// Test the function with different inputs
const input1 = 5;
const input2 = 0;
const input3 = 7;

console.log(`Factorial of ${input1}: ${factorial(input1)}`);
console.log(`Factorial of ${input2}: ${factorial(input2)}`);
console.log(`Factorial of ${input3}: ${factorial(input3)}`);
