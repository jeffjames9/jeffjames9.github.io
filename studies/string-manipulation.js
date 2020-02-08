/**
 * STRING MANIPULATION:
 * 
 * 0. We often have to manipulate string in Javascript.  Fortunately,
 * we are provided with some operators and methods to make it easier.
 * The following operators and methods allow us access to find and 
 * change and work with strings.
 * 
*/
// 1. with operators
// comparison operators can be used on string
console.log("abc" < "bce"); // => true
console.log("abc" > "bce"); // => false
// + is used to concatenate strings
var firstName = 'Jeff';
var lastName = 'James';
console.log(firstName + ' ' + lastName); // => Jeff James


// 2. with string methods
// Javascript treats strings like objects when executing methods
// Here are several common methods that help you work with strings:

var strOne = "I have plans"
var strTwo = "to go swimming tomorrow."

// .length
console.log(strOne.length); // => 12, the # of characters in strOne

// search()
console.log(strOne.search("have")); // => 2
// 2 is the index of where the first letter of the word is located - strOne[2]
console.log(strOne[2]); // => h

// slice()
console.log(strOne.slice(2, 6)); // => have
// the last character is not taken, so you must add 1

// substr()
console.log(strOne.substr(2, 4)); // => have
// with this method, the second number says how many characters to take

// replace()
console.log(strOne.replace("have", "make")); // => I make plans
// this method cuts out the first parameter and replaces it with the second

// toUpperCase()
console.log(strOne.toUpperCase()); // => I HAVE PLANS
// method to convert a string to upper case
console.log(strOne); // => I have plans
// note that the original variable has not been changed

// concat()
console.log(strOne.concat(" ", strTwo)); // => I have plans to go swimming tomorrow
// use this method to concatenate things