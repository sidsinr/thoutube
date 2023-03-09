import React from 'react';
import { Loader, VideoCard } from "../index";
import './videos.css';

const Videos = ({ videos, isColumn }) => {
    if (!videos?.data?.length) return <Loader />;
    return (
        <div className={`videos-container ${isColumn ? 'videos-column' : ''}`} >
            {videos.data.map((item) => (
                item.videoId ? <div key={item.videoId}><VideoCard video={item} /></div> : <></>
            ))}
        </div>
    )
}

export default Videos;