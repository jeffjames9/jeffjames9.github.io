/**
 * CONTROL FLOW:
 * 
 * 0. Sometimes we want a programs to act differently depending on 
 * the information it is given. There are a number of statements that Javascript 
 * supports to make the program interactive.
 * 
*/
// 1. if
// conditional statement which, if it resolves to true, runs
// some block of code
if (1 > 2) {                 // resolves to false
    console.log("1 > 2");    // code is not run
}
if (1 < 2) {                 // resolves to true
    console.log("1 < 2");    // => 1 < 2
    console.log(1 < 2);      // => true
}

// 2. else-if
// we can add an else to this and continue nesting if statements.
// the statements will continue to run until the first one resolves to true
if (1 > 2) {                            // false
    console.log("This will not run");
} else if (4 > 5) {                     // false
    console.log("Neither will this");
} else if (5 > 4) {                     // true
    console.log("Yay!");                // => Yay!
} else if (10 > 1) {                    // true
    console.log("This does not run");   // => 
}

// 3. else
// We can add an else statement as the final statement in an else-if
// as a default measure.  it will only be executed if no other condition
// is satisfied.
if (1 > 2) {                            // false
    console.log("This will not run");
} else if (4 > 5) {                     // false
    console.log("Neither will this");
} else {                     
    console.log("Yay!");                // => Yay!
}

// 4. switch
// another way to write out a conditional.  in some cases it may be easier.
var switchVar = "arrows";

switch(switchVar) {
  case "rocks":
    console.log("Not this one");
    break;
  case "arrows":          // condition met.  execute code til break.
  case "hammers":
    console.log("This will execute for arrows or hammers");
    break;      //  => This will execute for arrows or hammers
}