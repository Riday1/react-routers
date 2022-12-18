import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css'
const SinglePost = ({ post }) => {
    const { userId, title, id } = post;

    // import useNavigate Hook 
    const navigate = useNavigate();

    // handler
    const handleNavigate = () => {
        navigate(`/post/${id}`);    // route er dynamic path
    }
    return (
        <div className='single-post'>
            <h4>User Id : {userId}</h4>
            <h4>Id  : {id}</h4>
            <p>Title : {title}</p>
            <Link className='details-link' to={`/post/${id}`}>Show Details</Link>

            {/* alternative of link */}
            <button onClick={handleNavigate}>Show Details 2</button>

        </div>
    );
};

export default SinglePost;