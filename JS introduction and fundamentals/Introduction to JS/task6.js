/*
Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/
height * height.
*/

// solution: 

// Function to calculate BMI
function calculateBMI(weight, height) {

    let bmi = weight / (height * height);

    return bmi;
}

let weightInKg = 70;      // Weight in kilograms
let heightInMeters = 1.75; // Height in meters

let bmiResult = calculateBMI(weightInKg, heightInMeters);

console.log("Body Mass Index (BMI):", bmiResult);

