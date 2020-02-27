// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// i: an array of arrays
// o: put all the elements from all of the arrays into one array

// Create an array to hold the elements to return
  // use the reduce method to pass in a function and a blank array to start from
    // the function should take the flattened array and the current arrays as args
      // use the concat method to add the current part of the array to the placeholder
// return holder array

function flatten(arrays) {
let x = arrays.reduce(function(flat, current) {
    return flat.concat(current);
}, []);
return x;
}
// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// i: 1) a value 2) test function 3) update function to create new values for 
//    loop 4) body function to pass values to and control output
// o: performing the body function until loop is completed

// create a for loop that begins at the start arg and ends when the test 
// function returns false.
// iterate the loop by using the update function with the current value
  // each loop should pass the value into the body function for output

function loop(start, testFunc, updateFunc, bodyFunc) {
  for (let value = start; testFunc(value); value = updateFunc(value)) {
    bodyFunc(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// i: an array and a predicate function 
// o: return true if all elements of the array return true for the given func
//    otherwise return false

// Use a for loop to iterate through the array
  // if any element of the array passed through the function is false, return false
// otherwise return true

function every(array, predFunc) {
  for (let i = 0; i < array.length; i++) {
    if (!predFunc(array[i])) return false;
  }
  return true;
}


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// i: some text
// o: ltr, rtl, or ttb

// ???????????
// ??????????
// ???????????
// ???????????

function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
