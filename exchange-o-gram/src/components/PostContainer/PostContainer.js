import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js';

class PostContainer extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img src={this.props.post.thumbnailUrl} alt={`${this.props.post.username} Icon`}></img>
                    <p>{this.props.post.username}</p>
                </div>
                <img src={this.props.post.imageUrl} alt={`${this.props.post.username} Post`}></img>
                <CommentSection comments={this.props.post.comments}/>
            </div>
        )
    }
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })
}

export default PostContainer;