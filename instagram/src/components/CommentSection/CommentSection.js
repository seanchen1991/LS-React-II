// import React from 'react';
// // import PropTypes from 'prop-types';
// import './CommentSection.css';

// const CommentSection = props => {
//     return (
//         <div>
//             <div>likes</div>
//             <div>{props.comments.map((eachComment, i) => {
//                 return (
//                     <div key={i}> <b>{eachComment.username}</b>{eachComment.text}</div>
//                 )
//             })}</div>
//             <div>comment-input</div>
//         </div>

//     )
// }


// export default CommentSection;


import React from 'react';

const CommentSection = props => {
 return (
   <div>
     <div>likes</div>
     <div>
       {props.comments.map((each, i) => {
         return (
           <div key={i}>
             <b>{each.username}</b> {each.text}
           </div>
         );
       })}
     </div>
     <div>input</div>
   </div>
 );
};

export default CommentSection;