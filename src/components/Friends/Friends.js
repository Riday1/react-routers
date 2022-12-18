import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friends = useLoaderData();

    return (
        <div>
            {
                friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
            }
            <h1>I have so many friends : {friends.length}</h1>
        </div>
    );
};

export default Friends;