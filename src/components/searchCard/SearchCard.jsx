import React from 'react';
import { Link } from 'react-router-dom';
import './searchCard.css';

const SearchCard = ({ data }) => {
  return (
    <div className='search-card'>

      <Link to={`/video/${data.videoId}`}>
        <div className='search-card-img-cont'>
          <img
            src={data.thumbnail[data.thumbnail.length - 1].url}
            alt={data.title}
            title={data.title}
            className='search-card-img'
          />
          <span className='search-card-runtime'>{data.lengthText}</span>
        </div>
      </Link>

      <div className='search-card-details'>
        <Link to={`/video/${data.videoId}`}>
          <h2 className='search-card-title' title={data.title}>
            {data.title ?? ''}
          </h2>
        </Link>
        <p className='search-card-videoInfo'>
          {(parseInt(data.viewCount).toLocaleString() + ' views  • ' + data.publishedTimeText)}
        </p>
        <Link to={`/channel/${data.channelId}`}>
          <div className='search-card-channel'>
            <img
              src={data.channelThumbnail[0].url}
              alt={data.channelTitle}
              title={data.channelTitle}
              className='search-card-channel-img'
            />
            <h4 className='search-card-channel-title' title={data.channelTitle}>{data.channelTitle}</h4>
          </div>
        </Link>
        <p className='search-card-description'>{data.description}</p>
      </div>

    </div>
  )
}

export default SearchCard;