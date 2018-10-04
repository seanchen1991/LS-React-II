import React from 'react';

const CommentSection = props => {
  return (
    <div className='comment-section'>
      {props.post.comments.map(comment => {
        return <Comment key={comment.username} comment={comment.text} />
      })}
    </div>
  )
}

const Comment = props => {
  return (
    <div className='comment'>
      <div>
        {props.comment.username}
      </div>
      <div>
        <p>{props.comment.text}</p>
      </div>
    </div>
  )
}

export default CommentSection;
