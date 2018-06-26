import React from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
    return (
        <div className='post-container'>
            <div className='post-header'>
                <img className='user-thumbnail' src={props.posts.thumbnailUrl} alt='User thumbnail image'/>
                <span>{props.posts.username}</span>
            </div>
            <img className='post-image' src={props.posts.imageUrl} alt='Instagram Image'/>
            <div className='post-content'>
                <div className='icon-bar'>
                    <i className='far fa-heart'></i>
                    <i className='far fa-comment'></i>
                </div>
                <div className='likes-count'>
                    {props.posts.like}
                </div>
                <div className='comment-container'>
                    {props.posts.comments.map( comment => {
                        return (
                            <CommentSection
                                comment={comment}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
 
export default PostContainer;