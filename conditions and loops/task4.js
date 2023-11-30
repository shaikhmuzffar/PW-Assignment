function generateNumbersInRange(num1, num2) {
    if (num1 >= num2) {
        console.log("Invalid input. num1 should be less than num2.");
        return;
    }

    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
    }
}

// Example usage
const num1 = 10;
const num2 = 25;

generateNumbersInRange(num1, num2);
