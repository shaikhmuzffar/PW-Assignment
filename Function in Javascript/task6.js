function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}

// Test the curry function with a function that adds two numbers
const add = curry(function (a, b) {
    return a + b;
});

// Example usage
const addCurried = add(3); // Curried version with the first argument
console.log(addCurried(4)); // Output: 7

// Directly use the curried function with both arguments
console.log(add(3, 4)); // Output: 7
