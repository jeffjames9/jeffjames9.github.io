/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: a function named search with two params: animals and name
// o: return an animals object

// declare a variable outside of the function as a counter - global scope
  // create a for loop for the function to iterate through the array
    // create an if to compare the values in the object of the array to name param
      // return the object or set it to null

var i;
function search(animals, name) {
    for (i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals[i];
        }
    }
    return null;
}
  
    
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: function named replace with 3 params: animals, name, replacement
// o: replace the entire object with a new object using splice

// use if statement: if the result of the above function exists and is not null, 
// use animals.splice() to replace the object in the array with another object

function replace(animals, name, replacement) {
    if (search(animals, name) != null) {
        animals.splice(1, i, replacement);
        
    };
    
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: remove function with params animals and name
// o: if the condition is met, remove the object from the array

// use an if statement: if the result is not null, remove the object from array

function remove(animals, name) {
    if (search(animals, name) != null) {
        animals.splice(i,1);
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: add function which takes params animals (arr of objs) and animal (obj)
// o: if all conditions are met, add the object to the array

// create a for loop to cycle through the animals array
 // create if statement to test if the name is already in the array - return no info if true
  // create else if that satisfies all of the following conditions:
   // new object animal name is not blank
   // new object species is not blank
   // if these conditions are satisfied, push the object to the animals array

function add(animals, animal) {
    for (var j = 0; j < animals.length; j++) {
    if (animal["name"] === animals[j].name) {
      return;
      } else if (animal["name"] != "" && animals["species"] != "") {
        return animals.push(animal);
            }
        }
    } 

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
