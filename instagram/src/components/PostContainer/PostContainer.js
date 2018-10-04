import React, { Component } from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";
import Post from "../Post/Post.js";

var moment = require("moment");

class PostContainer extends Component {
  render() {
    return (
      <div className="card">
        <Post
          thumbnail={this.props.thumbnail}
          username={this.props.username}
          imageUrl={this.props.imageUrl}
          likes={this.props.likes}
        />
        <CommentSection comments={this.props.comments} />
        <div className="time">{moment(this.props.time).fromNow()}</div>
        <div className="add-comment">Add a comment...</div>
      </div>
    );
  }
}

export default PostContainer;
