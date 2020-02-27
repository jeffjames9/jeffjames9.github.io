/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * - To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * - There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1a. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 1b. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// NOTE: re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* 2. var, let, const

All of these keywords are used to declare variables.
var keywords declares a variable

*/

var myVar;  // Declares variable, but does not assign it
var myNewVar = 0; // Initialization.  Have declared and assigned in one step.
let myLet;
const myConst = [];
console.log(myVar); // => undefined
/*

If i didnt declare it and started using the variable => Reference error

let and const were added to Javascipt more recently to add different 
functionality.  

var - scopes globally or to functions
    - can be redeclared
    - can be reassigned
    - declaration is hoisted an accessible (not the assignment)
*/
anotherVar = 13;  
console.log(anotherVar); // => 13  The declaration was hoisted and is accessible
var anotherVar;

/*

let - scopes to functions, blocks, and loop blocks
    - reassignable, but not redeclarable
    - hoisted, but inaccesible
*/
let anotherLet;
anotherLet = 2;
console.log(anotherLet); // => 2 but if the declaration statement were after
                         //    this, there would be a reference error.
/*
const - scopes to functions, blocks, and loop blocks
      - NOT reassignable, NOT redeclarable
      - must have an assignment when initialized
      - you can manipulate an array or object which is assigned to it
*/     
const myArrayConst = [];
myArrayConst.push(2);
console.log(myArrayConst); // => [2]
// but const x = 2; x += 3 => TypeError, can't reassign

/* 3. Hoisting

Sometimes we can use a variable and declare it later.
While var, let, and const variables are all hoisted, the meaning of
this is nebulous.
Variables declared using the var keyword are hoisted and
accessible before the line they are declared on.
*/
x = 2;
console.log(x); // => 2
var x;
/* 
let and const variables are not accessible until they have been initialized.
    y=2; console.log(y); let y; => Reference Error
      
*/


















