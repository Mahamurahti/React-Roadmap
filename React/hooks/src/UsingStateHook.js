import React, { useState } from 'react';

// Function components look like this:
// const Example = (props) => {
//     // Hooks can be used here
//     return <div />
// }

// Or this:
// function Example1(props){
//     // Hooks can be used here
//     return <div />
// }

// When using hooks you NEED to use functional components, since Hooks DO NOT work inside of classes
// Also in functional components there is no "this" keyword, instead se use useSate

function Counter(){
    // "count" is the variable
    // "setCount" is the function that controls "count" variable
    // "useState(0)" sets the default value for "count"
    const [count, setCount] = useState(0)
    // useSate always return two things, a variable and a function,
    // so we use array destructuring to set the two like we did

    // We can use the variable "count" like in the p-tag
    // and the "setCount" function like in the button-tag
    // Neither need to use the keyword "this"
    return (
        <div>
            <p>You have clicked me {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
    )
}

export default Counter;
