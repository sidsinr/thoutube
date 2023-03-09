import React from 'react';
import './comments.css';
import Comment from './Comment';

const Comments = ( {comments} ) => {
  return (
    <div className='comments'>
        {comments.map((item, index) => <Comment data={item} key={index}/>)}
    </div>
  )
}

export default Comments;