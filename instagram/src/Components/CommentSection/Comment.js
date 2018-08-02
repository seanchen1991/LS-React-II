import React from 'react';
import './CommentStyling.css';
import propTypes from 'prop-types';


const Comment = props => {
    return (
        <div className="comment-wrapper">
          <span className="comment">{props.comment.text}</span>{''}
          <span className="username">{props.comment.username}</span>
        </div>
    );
};

Comment.propTypes = {
    comment: propTypes.shape ({
        text: propTypes.string, 
        username: propTypes.string
    })
};


export default Comment;