import React from 'react';
import './PostContainer.css';
import PostCard from './PostCard';

const PostContainer = props => {
  
  return (
    <div className="post-container">
      {props.data.map((user, i) => {
        return (
          <PostCard
            data={user}
            key={i}
            id={i.toString()}
          />
        )
      })}
    </div>
  )
}

export default PostContainer