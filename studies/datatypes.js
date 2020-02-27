/**
 * DATATYPES:
 * 
 * 0. Datatypes refer to different classifications of data. 
 * Having different datatypes allows Javascript to interact with 
 * the data differently. As we will see, different classifications
 * will include, number, string, boolean, array, object, etc.
 * 
*/
// 1. number
// a number is a numerical value.  In javascript, numbers can be negative
// and they can have decimal values
var myNum = 2; // assigns a numerical value
console.log(myNum += -2.5); // => -0.5

// 2. string
// a string is a series of characters
var myString = "word"; // assigns a series characters
console.log(myString[2]); // => r
// letters are stored in an ordered list that we can access with bracket notation
// can use single or double quotes

// 3. boolean
// a boolean value is either true or false
var myBool = 2 > 1; // myBool is set to a value of true

// 4. array
// type of object which stores a list into a single variable
// can access an array using it's index
var myArray = [1,2,3,4,5];
console.log(myArray[2]); // => 3 
// in the above example, position 2, in brackets, references the 3rd position
// the first position is indexed 0

// 5. object
// a collection of name/value pairs.  Created with curly braces {}.
var myObj = {
    firstName: "Jeff",
    lastName: "James"
};
console.log(myObj); // => { firstName: 'Jeff', lastName: 'James' }
// we can use bracket or dot notation to access values in an object
console.log(myObj.firstName);   // => Jeff
console.log(myObj["lastName"]);  // => James


// 6. function
// a callable object which executes a codeblock
// since functions are objects, they can be assigned to variables
var funcVar = function(){ 
    return "Something"; 
}
console.log(funcVar()); // => Something 
// functions can be used anywhere any other value can be used
// in the following example, a function is declared and named, expecting inputs
function sumItUp(num1, num2) {
  return num1 + num2
}
console.log(sumItUp(1,2)); // => 3
console.log(sumItUp(1)); // => NaN
console.log(sumItUp(1,2,3)); // => 3

// 7. undefined
// this describes a variable without a value.  can also reset
// the value to undefined
var myBestVar;
console.log(myBestVar); // => undefined
myBestVar = 1;
console.log(myBestVar) // => 1
myBestVar = undefined;
console.log(myBestVar); // => undefined

// 8. null
// null, like undefined, means a variable does not have a value
// unlike undefined, a variable must be given the value of null to have it
var myTestVar;
console.log(myTestVar); // => undefined
myTestVar = null;
console.log(myTestVar); // => null

// 9. NaN
// javascript returns NaN (not a number) when it expects a number to result,
// but doesn't get one
console.log(1*"panda"); // => NaN

// 10. Infinity and -Infinity
// Infinity is stored as a very large number in javascipt...about 309 #s in a row
// It is returned when a number is divided by zero.
// -Infinity is it's counterpart in the negative direction
// When a negative # is divided by zero, it returns -Infinity
console.log(1/0); // => Infinity
console.log(-1/0); // => -Infinity

// 11. primitive and complex datatypes
// A primitive datatype contains its value directly in the memory it is allocated
// A complex datatype contains a memory space allocated as a reference
// for the place in memory where the object is stored
// Primitives: Boolean, string, number, undefined, null (plus BigInt and Symbol)
var myNewString = "word";
var myNumberNum = 2; // stored directly to memory
// Complex: Objects, Arrays, Functions (Date)
const myNewArray = []; // stored by reference
var myObjectHere = {
    one: 1,
    two: 2
};


// 12. primitive values BY COPY, complex values BY REFERENCE
// primitive value is stored directly in the allocated memory
var myNewString2 = "word"; // => stores directly to allocated memory space
// complex datatypes are stored by reference - the memory just points to where
// the data is stored
const myNewArray2 = []; // complex datatypes are stored by reference
myNewArray2.push(1); // can change this constant b/c myNewArray is just pointing
                    // to where the complex datatype is stored in memory
console.log(myNewArray2); // => [1]


























