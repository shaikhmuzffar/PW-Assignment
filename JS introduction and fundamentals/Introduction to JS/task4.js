/*
Q4. Discuss the precedence and associativity of operators in JavaScript. Why is understanding these concepts important?

solution:

- Precedence in JavaScript refers to the order in which operators are evaluated in an expression.
- Operators with higher precedence are evaluated first. 
- Understanding operator precedence is crucial because it determines the order in which operations are performed, 
- avoiding ambiguity in expressions.
- Associativity defines the direction in which operators with the same precedence are evaluated.
- It can be left-to-right (left-associative) or right-to-left (right-associative). For example, in a left-associative expression a + b + c, the addition operations are performed from left to right.

*/

// Here are some examples:

let result = 2 + 3 * 4; // Multiplication has higher precedence
console.log(result); // Output: 14

let expression = 2 * 3 / 2; // Left-to-right associativity
console.log(expression); // Output: 3

let assignment = a = b = 5; // Right-to-left associativity
console.log(a, b); // Both a and b will be assigned the value 5
