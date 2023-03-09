import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './channelDetail.css';

import { Loader, Videos } from "../index";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    fetchFromAPI(`channel/videos?id=${id}`)
      .then((res) => setChannelDetail(res))
  }, [id]);

  if (!channelDetail) return <Loader />
  return (
    <div className='channel-detail'>
      <img src={channelDetail.meta.banner[0].url} alt='channel-banner' className='channel-banner' />
      <div className='channel-detail-head'>
        <img
          src={channelDetail.meta.avatar[channelDetail.meta.avatar.length - 1].url}
          alt='channel avatar'
          className='channel-avatar'
        />
        <div className='channel-desc-container'>
          <h1 className='channel-title'>{channelDetail.meta.title}</h1>
          <span className='channel-subs'>{channelDetail.meta.subscriberCount} Subscribers</span>
          <p className='channel-desc'>{channelDetail.meta.description}</p>
        </div>
      </div>
      <h2 className='channel-videos-head'>{channelDetail.meta.videosCount} Videos</h2>
      <Videos videos={channelDetail} isColumn={false}/>
    </div>
  )
};

export default ChannelDetail;