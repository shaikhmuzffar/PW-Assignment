// Function to grade students based on marks
function gradeStudents(marks) {
    if (marks > 90) {
        return 'A Grade';
    } else if (marks >= 70 && marks <= 90) {
        return 'B Grade';
    } else if (marks >= 50 && marks < 70) {
        return 'C Grade';
    } else {
        return 'F Grade';
    }
}

// Example usage
let student1Marks = 95;
let student2Marks = 80;
let student3Marks = 60;

console.log(`Student 1: ${gradeStudents(student1Marks)}`);
console.log(`Student 2: ${gradeStudents(student2Marks)}`);
console.log(`Student 3: ${gradeStudents(student3Marks)}`);
