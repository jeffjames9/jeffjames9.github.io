// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-jefffjames9");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
// i: array
// o: number
// c: use filter

// use a function to return a a variable (number) maleCount
// find the number of male customers

// declare a placeholder array
// set the array equal to using the filter function  to find "male" objects
  // create a function within the filter function to return true if male
// return the length of the array which is returned by filter

var maleCount = function(array) {
    let filteredArray = _.filter(array, function(element, index, array) {
        if (array[index].gender == "male") {
            return true;
        }
    });
    return filteredArray.length;
};

// i: an array
// o: number of females objects in the array
// c: use reduce

// use reduce to iterate through the array with params of array and func
  // the function should take seed, element, and index
    // the function should add one to the seed if the gender is female
// return the total count of females

var femaleCount = function(array) {
    let counter = _.reduce(array, function(seed, element, index) {
        if (element.gender == "female") {
            seed++;
        }
        return seed;
    }, 0);
    return counter;
};


// i: array
// o: string of oldest customer's name

// set a count = 0
// use filter to iterate through the array with params array and a custom function
  //  the custom function should take paramets of element, index, array
    // if the age is greater than the current count...
      // set the count equal to the that person's age
      // return true
// return the name of the last customer object on the array filter has created

var oldestCustomer = function(array) {
    let count = 0;
    let newArr = _.filter(array, function(element, index, array) {
        if (array[index].age > count) {
            count = array[index].age; 
            return true;
        }
    });
    return newArr[newArr.length-1]["name"];
};

// i: array
// o: string of youngest customer's name

// create a count equal to infinity (any age will be lower)
// set the name equal to null (if null is returned, no one was in data set)
// use filter to iterate through the array with params array and custom func
  // the custom func should take element, index, and array
    // if the age is smaller the the count...
      // set name equal the customer's name
      // set count equal to the customer's age
// return the customer's name

var youngestCustomer = function(array) {
    let count = Infinity;
    let name = null;
    _.filter(array, function(element, index, array) {
        if (array[index].age < count) {
            name = array[index].name;
            count = array[index].age;
    }
    });
    return name;
    };

// i: array
// o: number

// initialize count and isActiveCount to zero to store information
// use filter to iterate through the array with params of array and cust func
  // cust func should take params of element, index, and array
    // take the balance of each cust, turn it into a number from a string
    // add that number to the count
    // add one to the customer count
// return the balance count/the customer count

var averageBalance = function(array) {
    let count = 0;
    let isActiveCount = 0;
    _.filter(array, function(element, index, array) {
        count += Number(array[index].balance.replace(/[^0-9\.-]+/g,""));
        isActiveCount++;
    });
    return count/isActiveCount;
    };

// i: array, letter
// o: number of customers whose name begins with a given letter

// set and counter equal to 0
// use reduce to iterate thorugh the array - params array and custom function
  // if the first letter of the customer's name (toLowerCase) is equal
  // to the letter given (toLowerCase)
    // add one to the counter
// return the counter

var firstLetterCount = function(array, letter) {
    let counter = 0;
    _.reduce(array, function (result, element, index) {
        if (element.name[0].toLowerCase() == letter.toLowerCase()) {
            counter++;}
    });
    return counter;
};

// i: array, customer, letter
// o: number of friends a given customer has whose names start with a given letter

// set counter equal to zero
// use reduce to iterate through the array -  params array and cust func
  // cust func should determine if the object being iterated through is the same
  // as the customer arg
    // if it is, use reduce again to iterate through that customer's friends 
      // if the first letter of the name == letter (both toLowerCase()),
        // then counter++
// return the counter

var friendFirstLetterCount = function(array, customer, letter) {
    let counter = 0;
    
    _.reduce(array, function(res, ele, ind) {
      if (array[ind].name == customer) {
            _.reduce(array[ind].friends, function(result, element, index) {
                if (element.name[0].toLowerCase() == letter.toLowerCase()) {
                    counter++;}
            }, "a");
        }
    }, "a");
    return counter;
};

// i: array, name
// o: array of names of customers who have the given name in their friend list

// set output array equal to empty array
// reduce to cycle through the objects in the array
  // use reduce again with element.friends to cycle through the subarray
    // if the friends name is in the subarray
      // push the name of the original customer to the output array
// return the output array

var friendsCount = function(array, custName) {
    var outArray = [];
    _.reduce(array, function(prevRes, element, index) {
      _.reduce(element.friends, function(a, b, c){
        if (b.name == custName) {
          outArray.push(element.name);
        }
      }, "a");
    }, "a"); 
    return outArray;
};

// i: array
// o: array of the top 3 most common tags customers have

// create an object to collect all of the tags and count them
// create a new array to collect the final output
// use reduce to iterate through the array list to get to all the objects
  // use reduce again to iterate through all of the tags
    // if the tag is not in the new object already, create it and set count to 1
      // if it is already in the array, add one to count
// declare count and set to zero
// iterate through the new object with all the tags we've added
  // if the value of a key is greater than the count
    // set the 3rd position in the new array equal to that key
    // set the count equal to its value...continue through the loop
// delete whatever ended up in the third position of the new array from the object
// iterate through the new object again
  // if the value of a key is greater than the count
    // set the 2nd position in the new array equal to that key
    // set the count equal to its value...continue through the loop
// delete whatever ended up in the second position of the new array from the objectv
// iterate through the new object again
  // if the value of a key is greater than the count
    // set the 1st position in the new array equal to that key
    // set the count equal to its value...continue through the loop
// return the new array

var topThreeTags = function(array) {
  var genObj = {};
  var newArr = [];
  _.reduce(array, function(prevRes, currRes, index){
    _.reduce(currRes.tags, function(a, b) {
      if (genObj[b] == undefined) {
        genObj[b] = 1;
      } else { 
        genObj[b] +=1;
      }
    });
  });
 let count = 0;
 for (var key in genObj) {
   if (genObj[key] > count) {
     newArr[2] = key;
     count = genObj[key];
   }
 }
 delete genObj[newArr[2]];
 count = 0;
 for (var key in genObj) {
   if (genObj[key] > count) {
     newArr[1] = key;
     count = genObj[key];
   }
 }
 delete genObj[newArr[1]];
 count = 0;
 for (var key in genObj) {
   if (genObj[key] > count) {
     newArr[0] = key;
     count = genObj[key];
   }
 }
 return newArr;
};

// i: array
// o: object with keys of male, female and binary with corresponding totals
// c: use reduce

// create an object to return with male, female, and non-binary with 0 value
  // reduce the array to gain access to it's gender property
    // add one to the total for whichever gender you access on each pass
// return the object created

var genderCount = function(array) {
  var genObj = {"male": 0, "female": 0, "non-binary": 0};
  _.reduce(array, function(defaultVal, currentVal){
    genObj[currentVal.gender] += 1;

  }, {});
  return genObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
