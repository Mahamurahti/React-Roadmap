'use strict';

// FUNCTIONS

function functionName(parameter1, parameter2, parameter3){
    console.log("You can only use \"" + parameter1 + "\" and the rest of the parameters inside these curly braces...")
    let variable = parameter2 + parameter3;
    return variable;
}

let returnValue = functionName("string parameter", 100, 250);
console.log("Return value of the function: " + returnValue)