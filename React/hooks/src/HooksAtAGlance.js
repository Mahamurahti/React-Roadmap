// useState is a hook. Hooks let you "hook into" React state and lifecycle from function components.
import React, { useState, useEffect } from 'react';

// Call Hooks only at the top level, so not in loops, conditions or nested
// functions and call hooks only from React components

function StateHook() {
    // Declare multiple state variables. useState always return a pair, the variable and a function
    // that updates the variable. useState uses array destructuring to declare.
    const [age, setAge] = useState(42); // 42 is the default value
    const [fruit, setFruit] = useState('banana'); // 'banana' is the default value
    const [text, setText] = useState({text: "Hello!"}); // default value can also be objects
    const [count, setCount] = useState(0);

    return (
        <div>
            <label>You clicked me {count} times!</label>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            <br/>
            <label>Your age:<input type="number" onChange={e => setAge(parseInt(e.target.value))} value={age}/></label>
            <button onClick={() => alert(`Your age is ${age}`)}>Check age!</button>
            <br/>
            <label>Your favourite fruit:
                <select onChange={e => setFruit(e.target.value)} value={fruit}>
                    <option value="coconut">Coconut</option>
                    <option value="pear">Pear</option>
                    <option value="banana">Banana</option>
                </select>
            </label>
            <button onClick={() => alert(`Your favourite fruit is ${fruit}`)}>Check favourite fruit!</button>
            <br/>
            <label>Add text: <input type="text" onChange={e => setText({text: e.target.value})}/></label>
            <p>{text.text}</p>
        </div>
    )
}

function EffectHook() {
    const [count, setCount] = useState(0);

    // Effects run after DOM is updated, so in other terms after the components have rendered / re-rendered
    // Just like with state, there can be multiple effects.
    useEffect(() => {
        document.title = `You clicked me ${count} times!`
    })

    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        setIsOnline(true)
        console.log("online")
        return () => {
            setIsOnline(false)
            console.log("offline")
        };
    }, []);

    return (
        <div>
            <p>You clicked me {count} times!</p><p>You are {isOnline ? 'online' : 'offline'}</p>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
    )
}

class ChatAPI extends React.Component{
    subscribeToFriendStatus(id, handler){
        alert('Subscribed to: ' + id)
        handler();
    }

    unsubscribeFromFriendStatus(id, handler){
        alert('Unsubscribed from: ' + id)
        handler();
    }
}

function CustomHook() {
    const [isOnline, setIsOnline] = useState(null)

    function handleStatusChange() {
        setIsOnline(!isOnline)
    }

    useEffect(() => {
        const friendID = 10;
        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
        };
    })

    return isOnline;
}

const functions = { StateHook, EffectHook, CustomHook }

export default functions;
