////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// i: start and ending integers
// o: an array with all of the numbers including the first and last

// create a placeholder array to return
// create a variable to count
// if there is an increment included as the third argument, set the increment to 
// that number...otherwise set the default to 1
// if the start and the end are equal, return an empty array
// if the start is less than the end AND the increment is positive,
// use a while statement to push numbers to the placeholder array
// also, add the increment to the start of the while statement as a counter
  // return the array


function range(start, end, increment) {
  var myArr = [];
  var incr;
  if (increment === undefined) {
    incr = 1;
  } else {incr = increment};
  if (start == end) {
    return myArr;
  } else if (start < end && incr > 0) {
    while (start <= end) {
      myArr.push(start);
      start += incr;
    }}  
  return myArr;
  }

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// i: an array of numbers
// o: sum on the numbers in the array

// use a for loop to cycle through the array
// use a separate variable (sum) to keep track of the sum
// return the sum

function sum(array) {
var sum = 0;
for (var i = 0; i < array.length; i++ ) {
  sum += array[i];
}
return sum;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// i: an array
// o: array reversed

// create a placeholder array
// use a for statement to iterate through the argument array backwards
  // push the numbers of that array onto the placeholder array
// return the placeholder array

function reverseArray(array) {
  var funcArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    funcArray.push(array[i]);
  }
  return funcArray;
}



////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// i: an array
// o: without using the reverse method, reverse the array in place 
      // Dont use a placeholder array
      
// Use a for loop to iterate through the array backwards
  // Push the array[i] onto the end array
  // use the splice method to remove the now-copied position
// return the array

function reverseArrayInPlace(array) {
  for (var i = array.length-1; i >= 0; i--) {
    array.push(array[i]);
    array.splice(i,1);
  }
  return array;
}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// i: an array
// o: a list with nested lists that use the given array as "value" on that list

// declare/set a list placeholder to null --> this is the final rest value of the object
// use a for loop to iterate though the array backwards
  // if array[i] exists, set list equal to value: array[i], rest: list
// return list

function arrayToList(array) {

  let list = null;
  for (var i = array.length; i >= 0; i--) {
   if (array[i]) {
     list = {value: array[i], rest: list};
   }
  } 
   return list; 
  }
    

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// i: a nested object as shown in the previous problem
// o: an array containing the values

// create an array to store the values.
// create a placeholder object so that we can move through the nested object given
  // while the placeholder object is not null
    // push the value into the placeholder array
    // reset modlist to modList.rest to move through the object
// return the new array

function listToArray(object) {
  let arr = [];
  let modList = object;
  while (modList) {
    arr.push(modList.value);
    modList = modList.rest;
  }
  return arr;
  }



////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// i: a list an an item
// o: add the item to the front of the list

// use the function above to turn the list into an array
// put the item onto the front of the list
// use a function above to turn the array back into a list.
// return that

function prepend(item, list) {
 let placeHolder = [];
 placeHolder = listToArray(list);
 placeHolder.unshift(item);
 return arrayToList(placeHolder);
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// i: list and a number
// o: return the value of the list at the given position

// declare a placeHolder array
// use the function listToArray to set placeHolder array equal to the list
// return the value at the given num in the new array

function nth(list, num) {
  let placeHolder = [];
  placeHolder = listToArray(list);
  return placeHolder[num];
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// i: 2 values
// o: return true if they have the same values or the objects have the same props
// Use a recursive call to deepequals

// check to see if theyre simple data types and the same - return true if so
function deepEqual(in1, in2) {
  if (in1 === in2) return true;
// if either input is null or not an object, return false
  if (in1 == null || typeof in1 != "object" || in2 == null || typeof in2 != "object") {
    return false;
  }
// create counters for the number of properties in each input
  var propsIn1 = 0, propsIn2 = 0;
// count how manu properties in in1 and assign it to propsIn1 var
  for (var prop in in1)
    propsIn1 += 1;
// count how manu properties in in2 and assign it to propsIn2 var
  for (var prop in in2) {
    propsIn2 += 1;
    // as you iterater though the second object, return false if the property is
    // not in in1 or...
    // call deepEqual recursively to compare an sub-properties
    if (!(prop in in1) || !deepEqual(in1[prop], in2[prop]))
      return false;
  }
// return true or false if the counts are the same
  return propsIn1 == propsIn2;
}

  
  
  


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
