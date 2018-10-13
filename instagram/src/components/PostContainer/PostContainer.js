import React, {Component} from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import './PostContainer.css'
import {PCDiv} from '../styled-components';

//Receives individual post from PostListContainer
class PostContainer extends Component{


    constructor(props){
        super();
        this.state = {
            post: props.post,
            comments: props.post.comments,
            likes: 0
        }
    }

    addLike = (event) =>{
        event.preventDefault();
        this.setState(prevState =>{
            return {
                likes: prevState.likes + 1
            }
        });

    }





    render(){
        return (

            <PCDiv>
                <p className="post-heading"><img className="thumbnail" src={this.state.post.thumbnailUrl} alt="thumbnail" width="30px" height="30px"/> {this.state.post.username}</p>
                <img src={this.state.post.imageUrl} alt="{this.state.post.username} advert"/>
                <div className="like-icons">
                    <a onClick={this.addLike} href="#"><i className="far fa-heart"></i></a>
                    <i className="far fa-comment"></i>
                </div>
                <p className="likes">{this.state.likes} likes</p>
                <CommentSection comments={this.state.comments} user={this.state.post.username} addComment={this.props.addComment}/>
            </PCDiv>
        )
    }


}




export default PostContainer;