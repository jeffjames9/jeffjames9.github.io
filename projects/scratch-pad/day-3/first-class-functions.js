// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //

// return another function
// use that function to test the base against the value
// return true if the value is greater, otherwise false

    function nestedFunction(value) {
    if (value > base) {
        return true} else {return false}
    }
    
    return nestedFunction;
    }



    // YOUR CODE ABOVE HERE //


/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
   // rewrite the above function and nested function and test to
   // see if the value is less than the base
   
    function nestedFunction(value) {
    if (value < base) {
        return true} else {return false}
    }
    
    return nestedFunction;
    }
    
    
    // YOUR CODE ABOVE HERE //

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    // return a function 
    // the function should compare the first letter of a word
    // against a given letter
    // return true or false

    function nestedFunction(value) {
    if (startsWith.toLowerCase() == value[0].toLowerCase()) {
        return true} else {return false}
    }
    
    return nestedFunction;
    }
    
    // YOUR CODE ABOVE HERE //

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    // return a function 
    // the function should compare the last letter of a word
    // against a given letter
    // return true or false

    function nestedFunction(value) {
    if (endsWith.toLowerCase() == value[value.length - 1].toLowerCase()) {
        return true} else {return false}
    }
    
    return nestedFunction;
    }
    
    
    // YOUR CODE ABOVE HERE //

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    // modify an array named Strings and return the array of them modified
    // use a function named modify to modify the string then return it
    var myNewArray = [];
    for (var i = 0; i < strings.length; i++) {
        myNewArray.push(modify(strings[i]));
    }
    return myNewArray;
}
    // YOUR CODE ABOVE HERE //


/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    
    // return a boolean value of true only if all parts of an array test true
    // iterate over a given array and test each item
    
    var myBool = true;
    for (var i = 0; i < strings.length; i++) {
        if (myBool == true) {
            if (test(strings[i]) == false) {
                myBool = false;
            }
        }
    }
         return myBool;

    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}