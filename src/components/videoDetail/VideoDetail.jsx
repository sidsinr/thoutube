import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './videoDetail.css';

import { Videos, Loader, Comments } from "../index";
import { fetchFromAPI, fetchVideo } from "../../utils/fetchFromAPI";
import numFormat from '../../utils/numFormat';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const VideoDetail = () => {
  
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const [videoComments, setVideoComments] = useState(null);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const { id } = useParams();

  function handleLike() {
    liked ? setLiked(false) : setLiked(true);
    setDisliked(false);
  }

  function handleDislike() {
    setLiked(false);
    disliked ? setDisliked(false) : setDisliked(true);
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    fetchVideo(`?id=${id}`)
      .then((res) => setVideoDetail(res))

    fetchFromAPI(`related?id=${id}&type=video`)
      .then((res) => setRelatedVideos(res))

    fetchFromAPI(`comments?id=${id}`)
      .then((res) => setVideoComments(res))
  }, [id]);

  if (!videoDetail?.videoId) return <Loader />;

  const { author, publishedDate, stats: { comments, likes, views }, title } = videoDetail;

  return (
    <div className='video-detail'>
      <div className='video-detail-main'>
        <div className='video-wrapper'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="video-detail-player"
            controls
            width='100%'
            height='100%'
          />
        </div>
        <h2 className='video-detail-title'>{title}</h2>
        <div className='video-detail-stats'>
          <p>{parseInt(views).toLocaleString()} views • {publishedDate}</p>
          <div className='video-likes-container'>
            <button onClick={handleLike}>
              {liked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}{numFormat(likes)}
            </button>
            <button onClick={handleDislike} >
              {disliked ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
            </button>
          </div>
        </div>

        <Link to={`/channel/${author.channelId}`} style={{ display: 'inline-block' }}>
          <div className='video-detail-channel'>
            <img src={author.avatar[0].url} alt={author.title} title={author.title} className='video-detail-author-img' />
            <div className='video-detail-channel-cont'>
              <h4 className='video-detail-channel-title'>{author.title}</h4>
              <p className='video-detail-channel-subs'>{author.stats.subscribersText}</p>
            </div>
          </div>
        </Link>

        <h3 className='video-detail-comments'>{numFormat(comments)} Comments </h3>
        {videoComments?.data?.length && <Comments comments={videoComments.data}/>}
      </div>

      <div className='related-videos'>
        <h3>Related videos</h3>
        <Videos videos={relatedVideos} isColumn={true} />
      </div>

    </div>
  )
}

export default VideoDetail;