import React from "react";
import PropTypes from 'prop-types';
import CommentSection from "../CommentSection/CommentSection";
import styled from 'styled-components';
//This will contain the post, including images, content, and comments

const PostContainer = props => {

  return (
    <div className="post">
      <div className="postHeader">
        <img src={props.thumbnailUrl}
          alt="Thumbnail"
         />
        <h2>{props.username}</h2>
      </div>
      <img src={props.imageUrl}
        alt="Post"
         />
      <CommentSection
        likes={props.likes}
        comments={props.comments}


      />
    </div>
  );

};

PostContainer.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  })),
  username: PropTypes.string,
  imageUrl: PropTypes.string
}

export default PostContainer;
