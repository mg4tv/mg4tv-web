import React, { PropTypes } from 'react';


const Comment = ({username, text}) => (
  <div>
    <span>{username}</span>
    <p>{text}</p>
  </div>
);

Comment.PropTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Comment;