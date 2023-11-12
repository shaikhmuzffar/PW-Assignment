/*
Q7. Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate
arithmetic operators.
*/ 

// solution:
function calculateCircleArea(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}

let radius = 10;

let areaResult = calculateCircleArea(radius);
// Display the result
console.log("Area of the circle:", areaResult);
