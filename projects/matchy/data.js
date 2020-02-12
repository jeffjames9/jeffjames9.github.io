/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
// adding key of species to animal obj with dot notation
animal.species = "dog";
// adding a key/value pair object with dot notation
animal["name"]="Penny";
// adding a key/value paid with bracket notation
animal.noises = [];
// creating an array named noises under the key of animal

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
// creating a different array named noises outside of animal
noises[0] = "arf";
// putting a value of "arf" as the first element in the new noises array
noises.push("quack");
// putting a second element into the array
noises.unshift("Oink");
// add an element to the beginning of the array
noises[noises.length] = "atchoo";
// add another element to the end using bracket notation
console.log(noises.length);
// console.log the number of elements in noises
console.log(noises[noises.length - 1]);
// console.log the last element with hard coding it
console.log(noises);
// console.log the entire array

console.log(animal);
console.log(noises);
console.log("Test");
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// add the noises array to the array that is part of the object
animal.noises = noises;
// add another sound to the array 
animal.noises.push("meow");


console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * // you can use bracket if you dont know the key name or dot notation
   // if you do
 * 2. What are the different ways of accessing elements on arrays?
 * // must use bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
// make an animals array
animals.push(animal);
// push the animal object we created to the new array
var duck = {species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
// create a duck object
animals.push(duck);
// push that object to our array
var moose = {species: 'moose', name: 'Katy', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
var cow = {species: 'cow', name: 'Erin', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(moose, cow);
// create two more objects and push them to the animals array


console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
// i chose an array because it is a simple list
function getRandom() {
  return Math.floor(Math.random() * Math.floor(animals.length));
}
// write a getRandom() function to bring back a random index for animals
// the index will be 0 through however many elements are in the array
// use this function to pick a random animal in animals array to add to friends array
friends.push(animals[getRandom()].name);
// console.log friends
console.log(friends);
animals[0].friends=friends;
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
