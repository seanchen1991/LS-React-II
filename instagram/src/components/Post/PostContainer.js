import React from 'react';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import PostFooter from './PostFooter';
import CommentsContainer from './../Comments/CommentsContainer';
import './post.css';

class PostContainer extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        {this.props.data.map(x => {
          return (
            <div className="post">
              <PostHeader name={x.username} headerImage={x.thumbnailUrl} />
              <PostImage image={x.imageUrl} />
              <PostFooter likes={x.likes} />
              <CommentsContainer comments={x.comments} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PostContainer;
