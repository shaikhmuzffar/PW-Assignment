// Conditional statements are programming constructs that allow you to control the flow of execution in a program based on certain conditions. 
// These conditions determine whether a specific block of code should be executed or not. 
// The most common types of conditional statements are "if statements," "else statements," and "else if statements


// if statement
if (condition) {
    // Code to execute if the condition is true
    let age = 18;
    if (age >= 18) {
        console.log("You are eligible to vote.");
    }
}

// if-else statement 

let age = 16;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// else if statements

let score = 75;
if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else if (score >= 70) {
    console.log("C grade");
} else {
    console.log("Fail");
}


