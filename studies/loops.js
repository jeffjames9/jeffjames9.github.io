/**
 * LOOPS:
 * 
 * 0. Loops let us execute code as many times as we need to.
 * They are particularly helpful for going through arrays and objects
 * to extract certain data.
 * 
*/
var varX = 0;
var myObj = {
    a: "1",
    b: "2",
    c: "3"
};
var myArray = [10,20,30,40,50];

// 1. while, for, for-in loops
// while loops execute code as long as a certain condition is set to true
while (varX < 5) {        // sets condition, resolves to true to start
    console.log("Text!"); // => Text! displays on 5 lines in a row
    varX++;               // this iterates the loop so it is not infinite
}

// the for loop will help us iterate through arrays
for (let i = 0; i < 5; i++) {   // run 5 times
    console.log("More Text!");  // More text! displays on 5 lines in a row
}

// the for-in loop will help us iterate through objects
for (var key in myObj) {         // iterate through myObj
    console.log(key);            // shows the key (a, b, or c in this case)
    console.log(myObj[key]);     // shows the value (1, 2, or 3)
// the output is a, 1, b, 2, c, 3 all on different lines
}

// 2. be able to loop any number of times.  forward to a limit.  backward to 0.
// forward
for (let i = 0; i < 5; i++) {   // run 5 times
    console.log(i);  // counts from 0 to 4
}
// backward
for (let i = 4; i >= 0; i--) {   // run 5 times
    console.log(i);  // counts from 4 to 0
}

// 3. loop over an array, forward and backward
// forward over an array
for (let i = 0; i < myArray.length; i++) {  // sets up a forward loop
    console.log(myArray[i]); // => 10, 20, 30, 40, 50 
}
// backward over an array
for (let i = myArray.length - 1; i >= 0; i--) {  // sets up a backward loop
    console.log(myArray[i]); // => 50, 40, 30, 20, 10
}

// 4. loop over an object
// the for-in loop will help us iterate through objects
for (var key in myObj) {         // iterate through myObj
    console.log(key);            // shows the key (a, b, or c in this case)
    console.log(myObj[key]);     // shows the value (1, 2, or 3)
// the output is a, 1, b, 2, c, 3 all on different lines
}