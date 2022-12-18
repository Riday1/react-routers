import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'
const Friend = ({ friend }) => {
    const { email, id, name, phone, username } = friend;
    return (
        <div className='friend'>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>UserName :<Link to={`/friend/${id}`}> {username}</Link></p>
        </div>
    );
};

export default Friend;