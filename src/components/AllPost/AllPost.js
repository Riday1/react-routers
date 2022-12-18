import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SinglePost/SinglePost';
import './AllPost.css'
const AllPost = () => {
    const allPost = useLoaderData();
    // console.log(allPost)
    return (
        <div>
            <div className='post-container'>
                {
                    allPost.map(post => <SinglePost post={post} key={post.id}></SinglePost>)
                }
            </div>
            <h3>you can check all post from here</h3>
        </div>
    );
};

export default AllPost;