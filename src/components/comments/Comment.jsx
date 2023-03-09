import React from 'react';
import './comment.css';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';

const Comment = ({ data }) => {
    return (
        <div className='comment-container'>
            <img
                src={data.authorThumbnail[0].url}
                alt='user profile'
                className='comment-img'
            />
            <div className='comment-body'>
                <div className='comment-title'>
                    <h4 className='comment-author'>{data.authorText}</h4>
                    <span className='comment-time'>{data.publishedTimeText}</span>
                </div>
                <p className='comment-text'>{data.textDisplay}</p>
                <div className='comment-icons'>
                    <button><ThumbUpOutlinedIcon fontSize='small'/></button>
                    <span> {data.likesCount}</span>
                    <button><ThumbDownOutlinedIcon fontSize='small'/></button>
                    <button><ModeCommentOutlinedIcon fontSize='small'/></button>
                </div>
            </div>
        </div>
    )
};

export default Comment;