/**
 * FUNCTIONS:
 * 
 * 0. Functions are a set of commands that can take inputs and produce
 * an output.  A function will alyways have an output, but if there is no
 * return statement, the output will be undefined.
 * 
*/

var j = 0;

// 1. first we must declare a function.  then we can invoke/call it.
var myFunc = function() {            // declaration
    console.log("Text Here");
}
myFunc();                            // => Text Here (invocation/call)

// We can also create a function expression by assigning a function
// to a variable.

var alphaOmega = function() {
    console.log("Hello");
}

alphaOmega();  // => Hello   This is a call to a function expression.

// 2. Parameters versus Arguments
// Parameters are listed in the function definition
// Arguments are the values passed in when the function is called
function mySecondFunc(x, y) {        // different invocation with parameters
    console.log(x + y);
}
mySecondFunc(1, 2);                  // => 3 (1 and 2 are the arguments)

// 3. Syntax for a named function
//function functionName(param1, param2) {
//    code to run;
//}
function addNums(par1, par2) {
    return par1 + par2;
}
console.log(addNums(6,7));   // => 13

// 4. Assigning functions to variables (Function expression)
var myFuncAgain = function() {
    j++;
}
console.log(myFuncAgain); // returns [Function: myFunc]
console.log(j); // => 0
myFuncAgain();  // => actually increments the global variable j
console.log(j); // => 1

// 5. Function inputs and outputs
// We set up parameters and take in arguments to accept inputs into our function
// Parameters are set in the function invocation
function func10(parameter1, parameter2) {  // params could be named anything
// a return statement sets up output for the function 
    return parameter1 + parameter2;        // return sets up the output
}
console.log(func10(4,5)); // => 9

// Inputs and Outputs are not required in a function, although a function's
// value will be undefined unless it has a return statement

function myNewFunk() {
    
}

console.log(myNewFunk()); // => undefined
// a return statement is needed to give value to a function
// this function accept no inputs and provides no action

// 6a. Functions can see and modify variables in the global scope
var alpha = 15;             // global variable declared
function iterate() {
    alpha++;                // function adds one
    console.log(alpha);     // function displays the variable
}
iterate();                  // => 16

// 6b. Things in the global scope can not see or modify variables only in the func
function banana() {
    let hockey = "stick";
    console.log(hockey);
}
banana(); // => stick - the call is in the function which is the correct scope 
// console.log(hockey); => throws a Reference error, as it's in the wrong scope

// 7. Closures
// Closures are used to protect data by nesting functions.  Information
// declared in the lower level functions is not available to the higher
// level functions unless passed to them through a return statement, while
// lower level functions *can* access the information in the functions in
// which they are contained.

function addEmployee(empName, userID) {
  let empID = userID;
  return {
    empName: empName,
    
    changeID: function(ID, NewID) {
      if (ID === userID) {
        ID = NewID;
        console.log(ID);
      } else {
        console.log("Wrong Password");
        }
    }
  }
}

let empObject = addEmployee("Jeff", 1234);
empObject.changeID(1234, 4321);  // => 4321
// console.log(userID); => Ref Error, wrong scope
// console.log(empName); => Ref Error, wrong scope
console.log(empObject); // => { empName: 'Jeff", changeID:
                        //     [Function: changeID] }


















