/* 
- In JavaScript, the comma operator , is used to evaluate multiple expressions within a single statement.
- It allows you to combine multiple expressions into a single expression. 
- The comma operator evaluates each expression from left to right and returns the value of the rightmost expression.
- This can be useful in situations where you want to include multiple expressions in a context that expects a single expression.

Here's the basic syntax of the comma operator:

expression1, expression2, expression3, ..., expressionN

 */

// example :

// Using the comma operator to combine multiple expressions
var a = 5, b = 10, c = 15;

// The comma operator is used in a for loop
for (var i = 0, j = 5; i < 5; i++, j--) {
  console.log("i:", i, "j:", j);
}

// The comma operator in a function argument list
function exampleFunction(x, y, z) {
  console.log(x, y, z);
}

// Calling the function with multiple arguments separated by commas
exampleFunction(1, 2, 3);


