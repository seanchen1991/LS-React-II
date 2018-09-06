import React from "react";
import '../../index.css';
import './PostContainer.css';

import CommentSection from "../CommentSection/CommentSection";
import Post from "./Post";
import InteractPost from "./InteractPost";

const PostContainer = props => {
  return(
    <div>
      {props.posts.filter(post => {
        return post.username.toLowerCase().includes(props.searchTerm.toLowerCase());
      }).map((post, index) => {
        return (
          <div className="posts container" key={post.timestamp}>
            <Post 
              post={post}
                
            />
            <InteractPost 
              post={post}
              clickHeart={props.clickHeart}
              interactIndex={index}
                
            />
            <CommentSection 
              comments={post.comments} 
                
              addNewComment={props.addNewComment}
              postIndex={index}
            />
          </div>
        )
      })}
    </div>
  )
}

export default PostContainer;