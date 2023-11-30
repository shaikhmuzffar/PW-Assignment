// Loops are control flow structures in programming that allow you to repeatedly execute a block of code as long as a certain condition is true or for a specified number of iterations.
// They are essential for automating repetitive tasks and efficiently processing large sets of data. 
// There are several types of loops, with the most common ones being the "for loop," "while loop," and "do-while loop.

// ----------------------------------------------------------------

// for loop

// syntax: 
for (initialization; condition; increment/decrement) {
    // Code
}
// example 

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// ----------------------------------------------------------------

// while loop 

// syntax 
while (condition) {
    // Code to be repeated
}

// example 
let k = 0;
while (i < 5) {
    console.log(k);
    k++;
}

//----------------------------------------------------------------

// do while loop 

// syntax 
do {
    // Code to be repeated
} while (condition);


// example 

let j = 0;
do {
    console.log(i);
    j++;
} while (j < 5);

// ----------------------------------------------------------------

// For-In Loop 

// syntax 
for (variable in object) {
    // Code to be repeated
}


// example 
const person = { name: 'John', age: 30, job: 'developer' };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// ----------------------------------------------------------------

// for-of loop 

// syntax

for (variable of iterable) {
    // Code to be repeated
}

// example 
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}
