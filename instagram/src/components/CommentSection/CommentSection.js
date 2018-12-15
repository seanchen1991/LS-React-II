import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";
import { FiHeart, FiMessageCircle, FiSend } from "react-icons/fi";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.data.comments
    });
  }

  render() {
    return (
      <div className={"comments-container"}>
        <div className={"icon-container"}>
          <FiHeart className={"icon"} />
          <FiMessageCircle className={"icon"} />
          <FiSend className={"icon"} />
        </div>
        <span className={"likes"}>{this.props.data.likes} likes</span>
        {this.props.data.comments.map((comments, index) => {
          return (
            <div className={"comments-field"} key={comments.text}>
              <p className={"comment-content"}>
                <span className={"comment-username"}>{comments.username}</span>
                {comments.text}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

CommentSection.propTypes = {
  data: PropTypes.shape({
    likes: PropTypes.number,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
      })
    )
  })
};

export default CommentSection;
