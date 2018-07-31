import React from 'react';
import Post from './post';
import './postcontainer.css';

let PostContainer = props => {
    return(
        <div className="posts-container-wrapper">
        {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
        </div>
    );
};

export default PostContainer