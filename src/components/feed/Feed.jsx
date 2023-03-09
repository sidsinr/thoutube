import React from 'react';
import { useState, useEffect } from 'react';
import './feed.css';
import { Videos } from '../index';
import { fetchFromAPI } from '../../utils/fetchFromAPI';
import { urlExtensions } from '../../utils/constants';

const Feed = ({ selectedCategory }) => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    window.scrollTo(0, 0);

    fetchFromAPI(urlExtensions[selectedCategory])
      .then((data) => setVideos(data))
  }, [selectedCategory]);

  return (
    <div className='feed'>
      <div className='feed-header'>
        {
          selectedCategory === 'Home' ?
            <h1>Welcome to <span>ThouTube</span>!</h1> :
            <h1><span>{selectedCategory}</span> Videos</h1>
        }
      </div>
      <div className='feed-videos'>
        <Videos videos={videos} isColumn={false}/>
      </div>
    </div>
  )
};

export default Feed;