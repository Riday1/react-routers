import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css'


const PostDetails = () => {
    const details = useLoaderData();
    const { body, title, userId, id } = details;
    console.log(details);
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${id}`)
    }
    return (
        <div className='post-details'>
            <h2>Title  : {title}</h2>
            <h4>User Id : {userId}</h4>
            <p><small>{body}</small></p>
            <button onClick={handleNavigate}>Get Author Details</button>
        </div>
    );
};

export default PostDetails;