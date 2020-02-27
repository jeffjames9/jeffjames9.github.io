// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

// i: any value
// o: the value unchanged
 
//return the value

_.identity = function(value) {
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// i: any value
// o: a string of the value's type ie string, array, boolean, etc

// series of nested if statements
 // if it's not an object, return typeof value
 // if else it is null, return null as a string
 // if else Array.isArray(value) return array as string
 // else it is a true object - return object as string

_.typeOf = function(value) {
  if (typeof value != "object") {
  return typeof value;
} else if (value === null) {
    return "null";
} else if (Array.isArray(value)) {
    return "array";
} else {
    return "object";
}
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// i: an array and a number
// o: return [] if <array> is not array
//    if number is not given or NaN, return first element of <array>
//    if its an array and a given number, return first number items of array

// create a placeholder for new array
// use Array.isArray(array) to decide if it is an array, return [] if its not
// use typeof the determine if num is a number, if not return array[0]
 // else iterate through the array with a for loop
  // if the array element exists, push it to the new array placeholder
// return the new array if the function made it this far

_.first = function(array, num) {
    var newArray = [];
    if (!Array.isArray(array)) {
        return [];
}   
    if (typeof num != "number") {
    return array[0];
}   else {
      for (var i = 0; i < num; i++) {
          if (array[i] != undefined) {
              newArray.push(array[i]);
          }
      }
}
    return newArray;
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// i: array, number
// o: if array is not array, return []
//    if number is not given or not a number, return last element in array
//    else return last number elements in array

// create newArray placeholder
// if the array is not an array, return []
// if typeof number is not "number", return last element of array
// else iterate through the array backwards
  // if the array is not undefined
    // push the array element to newArray
// return newArray if function made it this far

_.last = function(array, num){
    var newArray = []
    if (!Array.isArray(array)){
        return [];
    } 
    if (typeof num != 'number') {
        return array[array.length -1];
    } else {
        for (var i = array.length - num; i < array.length; i++) {
            if (array[i] != undefined) {
            newArray.push(array[i]);
        }
    }
    }
    return newArray;
}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// i: array and value
// o: return index of array that is first occurance of value
//    return -1 if value is not in array
// c: do not use [].indexOf
// e: array may have multiple occurances- make sure return statement is in correct place
//    if value isnt in array, return -1

// use for loop to iterate through the array
//  if array[index] is equal to given value, return index
//  return -1 if index is not returned

_.indexOf = function(array, value){
for (var i = 0; i < array.length; i++ ){
    if (array[i] === value){
        return i;
    }
 }
 return -1;
}



/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

// i: array, value
// o: return true if array contains value
//    return false otherwise
// c: use ternary operator
// e: set the result to false in case there is no value given

// set a variable named result to false
// iterate through the array
  // use ternary operators to set result to true if any element is true
// return the result

_.contains = function(array, value){
    var result = false;
    for (var i = 0; i < array.length; i++){
       (array[i] === value) ?  result = true : false;
       
    }
    
    return result;
}




/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

// i: collection and a function
// o: if the collection is an array, call the function on each element of the
//    array passing in the args of it's element, index, and, <collection>
//    if it's an object, call func once for each property with the args:
//    prop's value, it's key, <collection>

// check to see if it's an array
// if it is, 
  // for loop through the array
    // run func(collection[i], i, collection) for each element
// else
  // for in loop through the object
    // run func(collection[key], key, collection) for each element

_.each = function(collection, func) {
    if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
             func(collection[i], i, collection);
            }
    } else {
            for (var key in collection) {
             func(collection[key], key, collection);
            }
    } 
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// i: array
// o: return new array of all element from array with duplicates removed
// c: use _.indexOf() from above

// create placeholder array
// use for loop to iterate through the array
  // if statement; check if new array already has element in it here 
  // by using the includes method and our _.indexOf function to check against duplicates
    // if it is not already in the new array, push it in
// return the new array

_.unique = function(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!newArray.includes(array[_.indexOf(array, array[i])])) {
            newArray.push(array[i]);
        }
    }    
    return newArray;
}           
    
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// i: array, function
// o: return a new array of element for which calling function returned true

// create new array to return
// use for statement to iterate through the array
  // if the result of running the function is true,
    // push the array to the new array
// return the new array

_.filter = function(array, func) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array) === true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

// i: array, function
// o: return new array of elements for which calling the function returned false
// c: must use _.filter

// create new array as placeholder
// use the _.filter to make a new array of all the true elements
// iterate through the array
  // if - use the include method here to make sure each element is not in the array of true elements
    // if it's not, push it to the placeholder array
// return the placeholder array

_.reject = function(array, func){
    let newArr = [];
    let silly = _.filter(array, func)
    for (var i = 0; i <array.length; i++){
         if (!silly.includes(array[i]))
        newArr.push(array[i]);
       }
    return newArr;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

// i: array, function
// o: return an array made up of two subarray- an array of truthy, array of falsey

// create placeholder array to return
// create two more arrays, one for truthy, one for falsey
// iterate though the array
  // if function(array[i], i, array) is true
    // push array[i] to the truthy array
  // else
    // push array[i] to the falsey array
// set placeholder array equal to an array of the two subarrays and return it

_.partition = function(array, func){
    let newArray = [];
    let arrTruthy = [];
    let arrFalsy = [];
    for (var i = 0; i < array.length; i++){
        if (func(array[i], i, array) == true) {
            arrTruthy.push(array[i]);
        }else{
            arrFalsy.push(array[i])
           }
    }      
 return newArray = [arrTruthy, arrFalsy];
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

// i: collection, function
// o: return the value of each function call in new array
// c: if collection is an array, pass args element, index, collection
//    if collection is an object, pass args value, key, collection

// create placeholder array
// if Array.isArray is true
  // iterate though the array
    // push func(collection[i], i, collection) to new array
// else
  // iterate through object
    // push func(collection[key], key collection) to new array
// return the new array

_.map = function(collection, func) {
   var newArr = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            newArr.push(func(collection[i], i, collection));
        }
    } else {
        for (var key in collection) {
            newArr.push(func(collection[key], key, collection));
        }
    }
 return newArr;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

// i: an array of objects and a property
// o: return an array containing the value of the property for every element in the array
// c: must use _.map

// return the array create by using the _.map function
// inputs for map will be the array of objects and a custom functions
// which will return the value of the prop 

_.pluck = function(arrOfObj, prop) {
     return _.map(arrOfObj, function(e){return e[prop]});
    }

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// i: collection, function
// o: return true or false
//    true if every element of the collection is true compared to the function
//    false if any one item is false
//    if no function, return true if each element is truthy, false otherwise
// e: must consider truthy or falsey

// if the collection is an array
  // iterate through the collection with a for loop
    // if the function exists and the function returned false
      // return false
    // else if collection[i] is falsey
      // return false
// else (the collection must be an object)
  // iterate through the object with a for in loop
    // if the function exists and returns false
      // return false
    // else if the collection is falsey
      // return false
// return true if function makes it this far

_.every = function(collection, func) {
    
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (func != undefined && !func(collection[i], i, collection)) {
                return false;
            } else if (!collection[i]) {
                return false;
            }        
       }
    } else {
        for (var key in collection) {
            if (func != undefined && !func(collection[key], key, collection)) {
                return false;
            } else if (!collection[key]) {
                return false;
            }
        }
    }
return true;
    }
    
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

// i: collection, function
// o: if function returns true for one element in collection, return true
//    if it returns false for all elements, return false
//    if at least one element is truthy, return true...otherwise false
// e: must consider truthy or falsey - if at least one element is truthy, return true

// if the collection is an array
  // iterate through the collection with a for loop
    // if the function exists and the function returned true
      // return true
    // else if collection[i] is true,
      // return true
// else (the collection must be an object)
  // iterate through the object with a for in loop
    // if the function exists and returns true
      // return true
    // else if the collection is truthy
      // return true
// return false if function makes it this far 

_.some = function(collection, func) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (func != undefined && func(collection[i], i, collection)) {
                return true;
            } else if (collection[i] === true) {
                return true;
            }        
        }  
    } else {
        for (var key in collection) {
            if (func != undefined && func(collection[key], key, collection)) {
                return true;
            } else if (collection[key] === true) {
                return true;
            }
        }
    }
 return false;
}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

// i: array, function, seed.  
// o: return the value of the final function call
// e: if seed is not given, use the value of the first item in the array

// if there is no seed
  // set seed equal to the first item in the array
  // iterate through the array starting at the second object
    // set the seed equal to calling to function with current seed, array[i] and i as args
// return updated "seed"
// set up a for loop to iterate through object when given a seed - start at first object
  // set seed equal seed plus func(seed, array[i], i)
//return updated "seed"

_.reduce = function(array, func, seed) {
   if (seed == undefined) {
       seed = array[0];
      for (var i = 1; i < array.length; i++) {
       seed = func(seed, array[i], i);
      }
    return seed;
   }
    for (var i = 0; i < array.length; i++) {
       seed = func(seed, array[i], i);
    }
     return seed;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

// i: a number of objects
// o: return an updated object 1 with properties of all the other objects

// set up a for loop using "arguments.length" to describe the number of objects
  // set up a for in loop to loop through each object
    // add the properties of each object to the first object
// return the updated first object

_.extend = function() {
    for (var i = 0; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            arguments[0][key] = arguments[i][key];
        }
    }
    return arguments[0];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
   }
