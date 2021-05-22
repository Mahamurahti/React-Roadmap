import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
    const [isOnline, setIsOnline] = useFriendStatus(props.friend.id)

    if(isOnline === null)
        return "Loading..."
    return isOnline ? "Online" : "Offline"
}

function FriendListItem(props){
    const [isOnline, setIsOnline] = useFriendStatus(props.friend.id)

    return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
            {props.friend.name}
        </li>
    );
}

// Our custom hook, which returns true whether a friend is online and false if they aren't
function useFriendStatus(friendID){
    const [isOnline, setIsOnline] = useState(null)
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline)
        }
        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange)
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange)
        }
    })
    return isOnline
}