/**
 * OPERATORS:
 * 
 * 0. Operators are symbols that tell javascript to perform some action or 
 * set of actions.  The major types are assignment, comparison,
 * arithmetic, and logical operators.  Operators are the symbols that 
 * perform operations on operands.
 * 
*/
// 1. assignment operators
// =, +=, -=, *=, /=, %=
// these symbols assign a value to a variable
var a = 2; // a is assigned a value of 2
a += 3;  // a is now reassigned a value of 5

var b = 2;
b /= 2; // b is reassigned a value of 1

// 2. arithmetic operators
// +, -, *, /, %, ++, --
// arithmetic operators take multiple numerical values and return just one
a = 5 * 5; // => changes the value of a to 25, the product of 5 and 5
a--; // changes a to 24, by decrementing a by one
console.log(a % 7); // => 3, the remainder after dividing 24 by 7
console.log(a); // => 24

// 3. comparison operators
// ==, ===, !=, !==, <, >, <=, >=
// comparison operators are used to compare numbers, strings, logic values,
// and objects.  the comparisons result in true or false.
if (a < b) {
    console.log("Hello!"); // => Hello! - because the comparison resolves to true
}
var varOne = "2";
var varTwo = 2;
console.log(varOne == varTwo) ; // => true - the string and num are loosely equal
// loose comparison allows values to be converted into a common type
// before the comparison is made
console.log(varOne === varTwo); // => false - but not strictly
// strictly equal does not allow values to be converted to a common type
// before comparison
console.log(5 != 5); // => false - because 5 IS equal to five

// 4. logical operators
// Logical Operators are typically used to compare Boolean values and 
// return a Boolean value
// &&, ||, !

// && means that both operands must evaluate to true in order to run the code
if (a == b && 5 > 4) { //evaluates to false, as one is false
    console.log("Hello"); // no output
}
// the bang operator is akin to saying "not";  the opposite must be true
if (a != b && 5 > 4) { //evaluates to true, as both are true
    console.log("message 2"); // => message 2
}
// the double bars (||) mean that one of the statements must evaluate to true
if (a == b || 5 > 4) { //evaluates to true, because one is true
    console.log("message 3"); // => message 3
}

// 5. unary operators
// +,-,~,!,delete,typeof,void
// A unary operation is one in which there is only a single input (operand).
var myBoolean = true;
console.log(!myBoolean); // => false
var myNumber = 5;
myNumber++; // unary operator increments by one
console.log(myNumber); // => 6 
myNumber--; // unary operator decrements
console.log(myNumber); // => 5

// 6. ternary operators
// This is the only operator is Javascript that works with 3 operands.
// It is a shorthand way to express conditional statements.
// Usage: (condition) ? expression : expression;
// could also be written:

var myNewVar = 0;
if (a != b) {
    myNewVar = 5 // (traditional if statement, sets myNewVar equal to 5)
} else {
    myNewVar = 10;
}
console.log(myNewVar);
// this could be rewritten:
(a != b) ? myNewVar = 1 : myNewVar = 2;
console.log(myNewVar); // => 1

// the syntax: 
// (Conditional here) ? this is what happens if it's true : this is false;




































