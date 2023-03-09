import React from 'react';
import { Link } from "react-router-dom";
import './videoCard.css';

const VideoCard = ({ video }) => {
  return (
    <div className='video-card'>

      <Link to={`/video/${video.videoId}`}>
        <img
          src={video.thumbnail[video.thumbnail.length - 1].url}
          alt={video.title}
          title={video.title}
          className='video-card-img' 
        />
        {video.lengthText ? 
        <p className='video-card-runtime'>{video.lengthText}</p> :
        <p className='video-card-live'>LIVE</p>
        }
      </Link>

      <div className='video-card-desc'>
        <Link to={`/video/${video.videoId}`}>
          <h4 className='video-card-title' title={video.title}>
            {video.title ?? ''}
          </h4>
        </Link>
        <Link to={`/channel/${video.videoOwnerChannelId ?? video.channelId}`}>
          <p className='video-card-channel' title={video.videoOwnerChannelTitle ?? video.channelTitle}>
            {video.videoOwnerChannelTitle ?? video.channelTitle ?? ''}
          </p>
        </Link>
        <p className='video-card-videoInfo'>
          {video.videoInfo ?? (parseInt(video.viewCount).toLocaleString() + ' views  • ' + video.publishedTimeText)}
        </p>
      </div>

    </div>
  )
};

export default VideoCard;