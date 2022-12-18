import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'
const Friends = () => {
    const friends = useLoaderData();

    return (
        <div>
            <div className='friend-container'>
                {
                    friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
                }
            </div>
            <h1>I have so many friends : {friends.length}</h1>
        </div>
    );
};

export default Friends;