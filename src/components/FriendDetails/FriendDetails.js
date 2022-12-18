import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './FriendDetails.css'
const FriendDetails = () => {
    const details = useLoaderData();

    const { name, email, phone, website } = details;
    return (
        <div className='friend-details'>
            <div >
                <h3>Name : {name}</h3>
                <p>Email : {email}</p>
                <p>Call him : {phone}</p>
                <p><small>WebSite : {website}</small></p>
            </div>
            <h3>Everything you need to know about this person</h3>
        </div>
    );
};

export default FriendDetails;