import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const details = useLoaderData();
    console.log(details)
    const { name, email, phone, website } = details;
    return (
        <div>
            <div>
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