import React, { useState, useEffect } from 'react';

// The Effect Hook lets you perform side effects in function components:

function Counter(){
    const [count, setCount] = useState(0)

    // Handles a similar job that classes componentDidMount and componentDidUpdate do
    // so it is called after every render
    useEffect(() => {
        document.title = `You have clicked me ${count} times`;
    }, [count]) // Re-run only if the count changes
    // After the effect, we can declare "dependencies" for the effects. In this case we say
    // that this effect is dependent on the count variable, which means if the count doesn't
    // change, the effect will be skipped, which improves performance!

    return (
        <div>
            <p>You have clicked me {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
    )
}

// Effects with cleanup:

// function FriendStatus(props){
//     const [isOnline, setIsOnline] = useState(null)
//
//     useEffect(() => {
//         function handleStatusChange(status) {
//             setIsOnline(status.isOnline)
//         }
//         ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
//         // Return is called after the effects has ended, i.e. when the component unmounts
//         return function cleanup() {
//             ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
//         }
//     })
//
//     if (isOnline === null) {
//         return 'Loading...'
//     }
//
//     return isOnline ? 'Online' : 'Offline'
// }

export default Counter;
