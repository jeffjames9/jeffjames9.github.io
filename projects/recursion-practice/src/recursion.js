// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

// i: function with a number as an input
// o: factorial of that number

var factorial = function(n) {
  // base case - when to stop recursing
  // if n is a negative number, return null
  if (n < 0) {
    return null;
  }
  // when n reaches 0, return 1
  if (n === 0) {
    return 1;
  }
  // until it reaches 0, return n times the facotiral call minus 1
  return n * factorial(n-1);
};

// i: array of numbers
// o: number which is the sum of all the numbers in the array

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // base case - when to stop
  // stop when the array doesn't have any numbers left
  if (array[0] == undefined) {
    return 0;
  }
  // return the first number in the array plus the recursive call to the 
  // function with the first item sliced off
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// i: number
// o: true or false depending on if it's even

// 4. Check if a number is even.
var isEven = function(n) {
  // base case...when to stop
  // if the number gets down to 0, return true
  // if the number gets down to 1, return false
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
    // if the number is negative, change it to positive
  } else if (n < 0) {
    return isEven(-n);
    // else subtract 2 from the num then call again
  } else {
    return isEven(n - 2);
  }
};

// i: number
// o: number that is the sum of the numbers below the given integer


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

var sumBelow = function(n) {
  // base case - when to stop
  // when n gets to 0, we need to return 0 and stop going through the function
  // recursively
  if (n === 0) {
    return 0; 
    // until n reaches 0, we need to call the function recursively
    // if n is positive, use this
  } else if (n > 0) {
      return n - 1 + sumBelow(n-1);
      // if n is negative, use this
     } else {
       return n + 1 + sumBelow(n+1);
     }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

var range = function(x, y) {
  // base case - when to stop recursing
  // declare a placeholder array
  // base case - if x is 1 more or one less or the same as y
    // return the placeholder array
  let newArray = [];
  if (x + 1 === y || x === y || x - 1 === y) { 
    return newArray;
    // else if the first number plus 1 is still less than the second number
  } else if (x + 1 < y) {
      // push value to the placeholder array
      // return that array concatted with the recursion
    newArray.push(x + 1);
    return newArray.concat(range(x + 1, y));
      // else if x is less than y
        // push value to array
        // return array concatted with recursion
  } else if (x - 1 > y) {
    newArray.push(x - 1);
    return newArray.concat(range(x - 1, y));
  }
  };

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

// i: base number and exponent
// o: use recursion.  give the base raised to the exponent as a number

var exponent = function(base, exp) {
// return 1 if the exponent is 0
  if (exp === 0) {
    return 1;
  }
// base case - if the exponent equals one, return the base
  if (exp === 1) {
    return base;
  }
// as long as the exponent is greater than one, 
  // return the base times another call to the function with the exponent reduced by one
  if (exp > 1) {
    return base * exponent(base, exp - 1);
  }
  // if the exponent is negative
    // return the function call with the exp + 1 over the base - 
  if (exp < 1) {
    return exponent(base, exp + 1)/base;
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

// i: any number
// o: boolean for whether number given is a square of two
// e: do it recursively

var powerOfTwo = function(n) {
  // base case to end iterations
  // return true if the number is a square of two - will resolve to 1
  if (n === 1) {
    return true;
  // return false if the number resolves to less than 2
  } else if (n < 2) { 
    return false;
  // time for recursion!  call function again /2 and return
  } else {
    return powerOfTwo(n/2);
}};

// 9. Write a function that accepts a string a reverses it.

// i: string
// o: reverse of string as string
// c: dont f up the original string

var reverse = function(str) {
  // base case
  // when the string is empty
    // return empty quote to start the string
    if (str === "") {
        return "";
  // else use substr in the recursion to give the word minus the first letter
  // to the recursion and add the first letter of the word with charAt
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
     // dont forget to return!
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(str) {
  // i: string
  // o: true or false
  // e: ignore spaces and capitalization
  
  // make a new string taking out spaces and making all letters same case
  let string = str.replace(/\s/g, '').toLowerCase();
  // if there is less than two letter, return true - base case
    if (string.length < 2) {
      return true;
    }
  // if first letter is same as last letter
    if (string[0] === string[string.length - 1]) {
      // return recursive call - slice out after first letter and before last
      return palindrome(string.slice(1, string.length - 1));
    }
// return false if the first and last letters weren't the same
    return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

// i: 2 integers
// o: their product
// e: use recursion
 // base case - return 0 when y = 0
  // else if y greater than 0, return x + function with same x & y one less
  // else if y is negative, return negative x + function with same x & y one more
 
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  } else if (y === 1) {
    return x;
  } else if (y > 1) {
    return x + multiply(x, y - 1);
  } else if (y < 1) {
    return -x + multiply(x, y + 1);
  }
};




// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};




// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true

var compareStr = function(str1, str2) {
  // base case - if length of both words gets to zero, return true
  if (str1.length === 0 && str2.length === 0) {
    return true;
  // else if one of the strings is empty and not the other, return false
  } else if (str1.length === 0 || str2.length === 0){
    return false;
  // else if the first letter of the strings is strictly equal
  } else if (str1[0] === str2[0]) {
    // return the recursion with the first letter of the strings sliced off
    return compareStr(str1.slice(1), str2.slice(1));
    // if the first letters were not equal, return false
  } else {
    return false;
  }
};





// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

// i: string
// o: function should put each letter of the string into an element in an array

// create placeholder array
// base case - when there is one letter left in the string
  // push that letter into an element of the array
  // return the array
    // else before we reach the base case
      // push the first letter of the string into the array
      // return the recursion -
      // placeholder array concat with function call...with a letter sliced
      // from the front of the string

var createArray = function(str){
  var myArr = [];
  if (str.length === 1) {
    myArr.push(str[0]);
    return myArr;
  } else {
    myArr.push(str[0]);
    return myArr.concat(createArray(str.slice(1)));
  }
};



// i: array
// o: reversed array

// create placeholder array
// if the given arrays length is 1, 
  // push that entry into our placeholder array
  // return placeholder
// else
  // push the last letter of the array into the placeholder
  // pop it off the old array
  // return the recursion
  // new array concat with function call (pop already took off a letter)

// 17. Reverse the order of an array
var reverseArr = function (array) {
  let myArr = [];
  if (array.length === 1) {
    myArr.push(array[0]);
    return myArr;
  } else {
    myArr.push(array[array.length - 1]);
    array.pop();
    return myArr.concat(reverseArr(array));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

// i: value and length
// o: array with the value number pushed into it the number of length times

// create placeholder array 
// base case - if length is 1, push the val to the array and return it

var buildList = function(value, length) {
  var myArr = [];
  if (length === 1) {
    myArr.push(value);
    return myArr;
  // else push the value into an array
    // return that concat with the recursion where length is one less
  } else {
    myArr.push(value);
    return myArr.concat(buildList(value, length - 1));
  }
};


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

// i: an array an a value
// o: return the number of times the value is in the array

// base case- if array.length is zero
  // return 0
  // else if the first elment in the array equals the value
    // return 1 + the recursive function with 1 sliced off array
  // else
    // return 0 + the recursive function with 1 sliced off array
    
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0;
  } else if (array[0] === value) {
    return 1 + countOccurrence(array.slice(1), value);
  } else {
    return 0 + countOccurrence(array.slice(1), value);
  }
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

// i: array and a callback
// o: an array acted upon by the function
// e: recursive

// create orig usable array with Array.from method so that we can act on it
// create placeholder array for output
  // base case - if length of orig usable array = 1
    // push the element, acted upon by the function, into the placeholder array
    // return the array
  // else
    // push the element, acted upon by the function, into the placeholder array
    // return this array concat with the recursion
    // function again - use splice on the orig usable array
    
var rMap = function(array, callback) {
  var thisArr = Array.from(array);
  var myArr = [];
  if (thisArr.length === 1) {
    myArr.push(callback(thisArr[0]));
    return myArr;
  } else {
    myArr.push(callback(thisArr[0]));
    return myArr.concat(rMap(thisArr.splice(1), callback));
  }
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
  
};



// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2

// i: number
// o: number that is the Nth number in the fibonacci sequence after 0
// e: if n is less than zero, return null

// function will take an argument of n as well as creating args for the first
// two numbers - 0 and 1
  // if n is less than 0, return null - edge case
    // base case: when n reaches zero, return the accumulator - y
    // recursion - return the function call again with n-1, the second number 
    // returned as the 1st and an accumulator of both numbers combined

var nthFibo = function(n, x = 1, acc = 0) {
  if(n < 0) {
    return null;
  } else if (n === 0) {
    return acc;
  } else {
    return nthFibo(n-1, acc, x + acc);
  }
};






// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// i: an array of words
// o: an array of words that have been capitalized

// declare and intialize a placeholder array
// base case - when the input length reaches 1
  // return an array of that one word capitalized
  // else until then...
   // assign the placeholder array with the capitalization of the first
   // word in the input array
   // set the placeholder array equal to the array you just made concat with
   // the recursion - slice off the first element of the array
   // return the placeholder array

var capitalizeWords = function(input) {
  // base case
  var myArr = [];
  if (input.length === 1) { 
    return [input[0].toUpperCase()];
  } else {
    myArr.push(input[0].toUpperCase());
    myArr = myArr.concat(capitalizeWords(input.slice(1)));
    return myArr;
  }
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']

// i: an array of strings
// o: an array of strings where all the first letters of the strings has been 
//    capitalized
// c: recursive

// make a placeholder array and set it equal to an empty array
// base case - if the input array gets to zero length
  // return empty array
  // else recurse
    // use uppercase, concat, and slice to capitalize the first letter
    // of the first word in the array and push it into the placeholder array
    // set the placeholder array equal to the current value
    // plus the recursive call to the function - slice
    // return the placeholder array with the recursion

var capitalizeFirst = function(array) {
  
  var myArr = [];
  if (array.length === 0) {
    return [];
  } else {
    myArr.push(array[0][0].toUpperCase().concat(array[0].slice(1)));
    myArr = myArr.concat(capitalizeFirst(array.slice(1)));
    return myArr;
  }
};



// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};



// base case - when string length gets to zero, return the object
// if the letter is already in the object
  // just add one to the tally
// if it's not in the object
  // add it
// return the recursion - send slice and the object

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  if (str.length === 0) {
    return obj;
  }
  if (obj.hasOwnProperty(str[0])) {
    obj[str[0]] += 1;
  } else { 
    obj[str[0]] = 1;
  }
  return letterTally(str.slice(1), obj);
};



// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]

// i: array of values
// o: array of values with the consecutive duplicates removed

// initialize placeholdeer array
// base case - if the list has length of zero, return it to start recursion
  // else if length is more than zero, compare the first number to the second in the list
    // if they are not equal, push the zero value into placeholder array
// return the array concat with the recursion - take a letter off

var compress = function(list) {
  
 let myArr = [];
 if (list.length === 0) {
  return list;
  } else if(list[0] !== list[1]) {
   myArr.push(list[0]);
  }
 return myArr.concat(compress(list.slice(1)));
 };




// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

// i: an array of numbers
// o: array of numbers with no consecutive zeroes

// initialize placeholder array
// base case - return the array when the length = zero
// if the first number in the array is not zero, push it into the placeholder array
  // else if the first element and the second aren't the same
    // push the first element into the array
// return the placeholder array concat with the recursion - slice first letter off

var minimizeZeroes = function(array) {
 
 let myArr = [];
 if (array.length === 0) {
   return array;
 }
 if (array[0] !== 0) {
   myArr.push(array[0]);
 } else if (array[0] !== array[1] ){
   myArr.push(array[0]);
 } 
 return myArr.concat(minimizeZeroes(array.slice(1)));
 };
  





// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]


// i: an arry
// o: an array where the numbers alternate positive and negative

// declare a placeholder array
// base case - when array has zero length, return the empty array
// if the first number is less than zero, make it positive and add it to
 // the placeholder array.  if it's positive, just add as is
// if the second number in the array is positive, make it negative and add it
 // to the placeholder array.  If it's already neg, add as it
// return the concat and the recursion - with 2 sliced off

var alternateSign = function(array) {
  var myArr = [];
  if (array.length === 0) {
    return [];
  }
  if (array[0] < 0) {
    myArr[0] = -array[0];
  } else {
    myArr[0] = array[0];
  }
  if (array[1] > 0) {
    myArr[1] = -array[1];
  } else {
    myArr[1] = array[1];
  }
  return myArr.concat(alternateSign(array.slice(2)));
};


// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

// i: a string
// o: a string with all the numbers switched to their word equivalent

// make an array with the word values of 0-9
// make a placeholder string

// if the given string is length zero, send back "" to start the recursion

// if the first position in the string is a number but not a space
  // add the name of the number from the number array to the placeholder string
// if the first position is any other char or a space
  // add the char or space to the placeholder string
// return the placeholder string concat with the recursion

var numToText = function(str) {
  var numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var myString = "";
  if (str.length === 0) {
    return "";
  }
  if (!isNaN(str[0]) && str[0] !== " ") {
    myString += numArr[Number(str[0])];
  } else {
    myString += str[0];
  }
  return myString.concat(numToText(str.slice(1)));
};







// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
