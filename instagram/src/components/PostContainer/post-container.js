import React from 'react';
import Post from './post';
import Comments from '../CommentSection/comments';

const PostContainer = props => {
    return (
        <div>
            {props.dummyData.map((post) => {
            return (
                <Post key={post.id} post={post} />
            )
            })}
            <p>{props.dummyData.likes}</p>
        </div>
    )
}

export default PostContainer;