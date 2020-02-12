
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// look at spec file to see what theyre testing for
// as in what inputs youll be given
function triangles(number) {

// i: triangles(#);
// o: The first output line should have "number" amount of #s
//    Each successive separate lines should have one less #

// declare a place holder string
// create a loop and a nested loop to output to console
// dont forget to reset the string each time

let myString = '';

for (let i = 1; i <= number; i++) {
for (let j = 1; j <= i; j++) {
  myString += '#';
}
console.log(myString);
myString = '';
}
}



////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// i: function called fizzBuzz which takes start and end params
// 0: each #, but sometimes replaced by another word, as stated below

// create a function called fizzBuzz
// Set up a for loop to iterate between start and end integers
// if the number is divisible by 15, print fizzbuzz to console
// if divisible by only 5, print buzz
// if divisible by only 3, print fizz
// otherwise print the number


function fizzBuzz(start, end) {
  for (var i = start; i <= end; i++) {
if (i % 15 == 0) {
  console.log("fizzbuzz"); 
} else if (i % 5 == 0) {
  console.log("buzz");
} else if (i % 3 == 0) {
  console.log("fizz");
} else {
  console.log(i);
}

}
} 


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// create a variable "output" to store our string in
// will have to create a loop withing a loop to access 2 dimensions
// in the inner loop, create if loops
// start the even rows with a #, the odds with a blank
// add newlines

// make a variable for our chessboard that is an empty string
// for loop to create the row
  // nested for loop to create columns
    // conditional to test x and y

function drawChessboard(num) {
  var output = '';
for (let x = 1; x <= num; x++){         // all the lines
  for (let y = 1; y <= num; y++) {      // a single line
    if (x % 2 == 0 && y % 2 == 1) {
      output += '#';
    } else if (y % 2 == 0 && x % 2 != 0) {
      output += '#';
    } else {
    output += ' ';
  }                            
  }
  output += "\n";
}
console.log(output);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
