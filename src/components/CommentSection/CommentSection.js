import React from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CommentSection.css';
import moment from 'moment';

const CommentSection = (props) => {
    console.log("commentsection", props);
    // Takes in props:
    // comments: [
    //       username: "philzcoffee",
    //       text:
    // ]
    // timestamp:

    // Format the timestamp using moment:
    const postedAt = moment(props.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow();

    return (
        <div className='commentSection'>
            {props.comments.map( comment => {
                return(
                    <div className='comment'>
                        <b>{comment.username}</b> {comment.text}
                    </div>
                );
            }

            )}
            <div className='postedAt'>{postedAt}</div>
            <div className='newComment'>
                <input className='commentInput' placeholder='Add a comment...' />
                <FontAwesomeIcon icon={['far', 'ellipses-h']} />
            </div>
        </div>
    );
};

// Check values are correct
CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
};

export default CommentSection;