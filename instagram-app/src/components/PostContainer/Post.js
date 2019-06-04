import React from "react";

import PostTop from "./PostTop";
import PostContent from "./PostContent";

const Post = props => {
  return (
    <div className="post-border">
      <PostTop 
      username={props.postData.username}
      thumbnail={props.postData.thumbnailUrl}
      />
     <PostContent 
     image={props.postData.imageUrl}
     likes={props.postData.likes}
     />
     <input 
     placeholder="Add a comment..."
     className="post-input"
     />
    </div>
  )
}

export default Post;