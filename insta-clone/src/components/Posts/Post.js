import React from 'react';
import Comments from '../Comments';

class Post extends React.Component {
    constructor(props) {
        super();
        this.state = {
            thumbnail: props.obj.thumbnailUrl,
            images: props.obj.imageUrl,
            username: props.obj.username,
            likes: props.obj.likes,
            comments: props.obj.comments
        }
    }
    render() {
        // console.log(this.state.comments)
        return(
            <div className="post">
                <h4><img className="userIcon" src={this.state.thumbnail} alt="userIcon" /><p>{this.state.username}</p></h4>
               <img src={this.state.images}  alt="insta" />
               <div className="likes">
                    <div>   
                        <i className="far fa-heart fa-2x"></i> <i className="far fa-comment fa-2x"></i>
                    </div>
                    <p>{this.state.likes} likes</p>
                </div>
               {this.state.comments.map((comment, i)=> <Comments values={comment} key={i} />)} 
                <input type="text" placeholder="Comment" /><button>...</button>  
            </div>
        )
    }
}

export default Post;