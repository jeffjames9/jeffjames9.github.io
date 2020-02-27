//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: an object
// o: return its values in an array

// declare a placeholder array
  // iterate through the object
    // push each object[key] to the placeholder array
// return the new array

function objectValues(object) {
 var ourArray = [];
 for (var key in object){
     ourArray.push(object[key]);
 }
 return ourArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: an object
// o: return all keys in string separated by spaces

// declare a string to build our string in; declare a count
  // iterate through the object with a for in loop
    // use an if statement and to tell you if youre adding the first word to the string
    // else add a space before adding another key to the string
// return the string

function keysToString(object) {
  var string = "";
  var count = 1;
  for(var key in object) {
        if (count == 1){
        string += key; 
        count++;
      } else {
        string += ' ' + key;
      }
  }
  return string;
  }

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: object
// o: string of all of the object's string keys separated by a space

// declare a variable for the string we're creating; declare a counter
// create a for in loop to iterate through the object
  // if it's the first word (count 1) and it's a string, add the key to new string
  // iterate the count, so that we know it's no longer the first word
  // if it's not the first word and it's a string, add a space then the string
// return the new string

function valuesToString(object) {
 var something = "";
  var count = 1;
  for(var key in object) {
        if (count == 1 && typeof object[key] === 'string'){
        something += object[key]; 
        count++;
      } else if (typeof object[key] === 'string'){
        something += ' ' + object[key];
      }
  }
  return something;
  }
  



//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: array or an object
// o: return "object" or "array" depending on which the input is

// use Array.isArray() method to determine if the object is an array
  // if it is, return array
  // if it isn't, else if- use typeof to determine if input is an object
    // if it is, return "object"

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return "array";
    } else if (typeof collection == "object") {
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: a string
// o: return the string capitalized

// return the zero index of the string capitalized by toUpperCase
// add to the rest of the string with the slice method

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1, string.length);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: one parameter, a string of words
// o: capitalize the first letter of each word

function capitalizeAllWords(string) {
  // make a variable to hold the letter
  // letter will hold the capitalized letter
var letter = '';
  // counter will let us know a first letter is next
var counter = 0;
  // charArr will hold our string as an array for edits
var charArr = [];
   // lets loop through each letter.
for (var i = 0; i < string.length; i++){
   if (counter == 0){
    // convert the first letter of a word to uppercase
    letter = string[i].toUpperCase();
    //convert string to an array so we can modify eaiser
    charArr = string.split('');
    // replace index of array with capital letter
    charArr[i] = letter;
    // convert back to a string
    string = charArr.join('');
    // reset the counter to one until the next space
    counter = 1;
   }
    // The space will let us know a first letter is next in
    //   the loop
    if (string[i] === ' '){
      // reset counter to 0, first letter is next
     counter = 0;
   }
}

// send the completed string out of the function
return string;
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: an object
// o: return string "Welcome , <Name>!"

// create a string for the message
// set it equal to "Welcome " + use methods above + "!"
// return the string

function welcomeMessage(object) {
  let string = "Welcome " + object.name[0].toUpperCase() + object.name.slice(1, object.name.length) + "!";
  return string;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: object with name and species keys
// o: return "<Name> is a <Species>"

// declare a variable string
// use methods above to create a string with capitalized letters of variables
// name and species: should read: "Name is a Species"
// return the string

function profileInfo(object) {
  let string = object.name[0].toUpperCase() + object.name.slice(1, object.name.length)
  + " is a " + object.species[0].toUpperCase() + object.species.slice(1, object.species.length);
  return string;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: object
// o: if object has noises array, return as string separated by space[s]
//    if there are no noises, return "there are no noises"

// if the object has a noises key && it isn't empty...
  // return using the join method and adding a space
// else return "there are no noises"  

function maybeNoises(object) {
    if (object.hasOwnProperty("noises") && object.noises.length !== 0) {
         return object.noises.join(' ');
    } else {
         return "there are no noises";
    }
 }


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

   // two parameters, a string and a word
   // check if the word is in the string
function hasWord(string, word) {
    // assign x to an interger value
    // it will be a positive number if the word is in the string
    var x = string.search(word);
    // if x is a positive number it is in the string
    if (x >= 0){
        // return true if it is 
        return true;
    } else {
        // if a negative value then word is not in the string
        return false;
    }
    }
       

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
   // input: a name and an object
   // output: add name to objects friends array
   //         also return the object
function addFriend (name, object) {
    // using dot notation we add name to friends array inside object
    object.friends.push(name);
    // return the object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    // should take name and an object
    // return true if the name is a friend of the given object
    // false otherwise
function isFriend(name, object) {
    
    // create an if statement to return false if there is no friends array
    if (!object.hasOwnProperty('friends')){
        return false;
}
    // if there is a friends array, iterate through it
    for (var i = 0; i < object.friends.length; i++ ){
        // create an if statement to see if the name is on the list => return true
        if (object.friends[i] == name){
            return true;
        }
        } 
        // if not, return false
            return false;
        }
    



//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: name(single object key) and and array of object(all of the names)
// o: return an array of names that given name arg is not friends with

function nonFriends(name, array) {
    // new array to hold the names that name is not friends with
    var myArr = [];
    // counter will check if name is in friends list
    var counter = 0;
    // first cycle though each object
    for (var i = 0; i < array.length; i++) {
            // reset counter at beginning of loop 
            counter = 0;
            // make sure we are not looking in our own friends list
            if (array[i].name !== name){
              // if not cycle through the friends list
              for (var a = 0; a < array[i].friends.length; a++) {
                  // If the name we are given is in the friends list
                  //   we need to add one to the counter
                if (array[i].friends[a] == name) {
                    // increase the counter to one
                  counter++
                }
              }
              // if the counter is still 0 then the name was not inside the 
              //   checked friends list.
              if (counter == 0){
                  // push the name in myArr if name was not found
                myArr.push(array[i].name);
              }
            }
    }
    // return our created array
      return myArr;
}


//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: an object and a key value pair
// o: if the key exists, change the value.  if the key doesn't exist, add key/value

// set the given key to a value 
// return it

function updateObject(object, key, value) {
      object[key] = value;
      return object;
 }



//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: object and an array of strings
// o: remove properties on object that are listed in array

// create a for loop to iterate through the array
// use all of the words in the array as potential keys and delete them

function removeProperties(object, array) {
 for (var i = 0; i < array.length; i++) {
     delete object[array[i]];
 }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// i: an array
// o: an array with duplicates removed

// set up a for loop to iterate through the array
  // set up another for loop to iterate through the array at i+1
    // in case there are multiple like entries in a row, set up a while loop
    // while array i = array j keep doing this
      // use the splice method to remove offending pieces from the array
// return the array

function dedup(array) {
 
 for (var i = 0; i < array.length; i++) {
     for (var j = i + 1; j < array.length; j++) {
         while (array[i] === array[j]) {
             array.splice(j, 1);
         }
     }
 }
 return array;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}