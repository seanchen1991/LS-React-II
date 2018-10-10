import React, {Component} from 'react';
import PropTypes from "prop-types";
import PostHeader from './PostHeader';
import LikesContainer from './LikesContainer';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

// Body of the container

//const PostContainer = (props) => {
class PostContainer extends Component {
    // Props taken in:
    // key: 0
    // username: "",
    // thumbnailUrl:"",
    // imageUrl:"",
    // likes: 0,
    // timestamp: "July 17th 2017, 12:42:40 pm",
    // comments: []
    // mergeData: fn
    
    constructor(props) {
        super(props);
        this.state = {...props, input: ""};
        //console.log("PostContainer: ", this.state );
    };

    /* Increment number of likes for this post */    
    likesHandler = event => {
        this.setState((prevState) => ({ likes: prevState.likes + 1}),

            // Merge with main data to set local storage - using cb function to pass state immediately
            this.props.mergeData( this.state.id, {likes: this.state.likes} )
        );
    };

    /* Add to post comments or log key entry */
    handleComment = event => {
        //debugger;
        // Was it the return key that was hit?
        event.preventDefault();
        if( event.keyCode === 13 && event.target.value.length > 0 ) {
            let updatedComments = this.state.comments;
            updatedComments.push({
                username: "Guest",
                text: event.target.value
            });
            //console.log("updatedComments", updatedComments);
            this.setState({
                comments: updatedComments,
                input: ""
            });

            // Merge with all data to set local storage
            this.props.mergeData(this.state.id, this.state.comments);

            /* Clear the form entry */
            event.target.value = "";
        }
        else {
            // Keep recording
            this.setState({ input: event.target.value });
        }
    };


    render() {
        return (
            <div className='postContainer'>
                <PostHeader username={this.state.username} thumbnailUrl={this.state.thumbnailUrl} />
                <img className='postContainerImg' src={this.state.imageUrl} alt='' />
                <LikesContainer likes={this.state.likes} postId={this.state.id} likesHandler={this.likesHandler} mergeData={this.props.mergeData} />
                <CommentSection 
                    comments={this.state.comments} 
                    timestamp={this.state.timestamp}
                    handleComment={this.handleComment} />
            </div>
        );
    };
};

// All fields are required...
PostContainer.propTypes = {
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array
};

// Default values
PostContainer.defaultProps = {
    likes: 0,
//    timestamp: Date.now()
  };

export default PostContainer;