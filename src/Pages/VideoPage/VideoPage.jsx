import React, { useEffect } from 'react'
// import vid from '../../components/Video/vid.mp4';
import './VideoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Comments from '../../components/Comments/Comments';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';
import { addToHistory } from '../../actions/History';
import { viewVideo } from '../../actions/video';

function VideoPage() {
  const {vid}= useParams();
  // console.log(vid);

//   const chanels = useSelector(state=>state?.chanelReducers)  //chanelReducers
// //   console.log(chanels);
//   const currentChanel = chanels.filter((c)=>c._id === vid)[0]; 
// //   console.log(currentChanel);

  const vids = useSelector(state=>state.videoReducer);
  // console.log(vids);
  const vv = vids?.data.filter((q)=> q._id === vid)[0]; //Raising Error on sometime 

  const dispatch = useDispatch();
  const CurrentUser = useSelector((state)=>state?.currentUserReducer);

  const handleHistory=()=>{
    dispatch(addToHistory(
      {videoId: vid,
      Viewer: CurrentUser?.result._id
    })
    )
  };
  
  const handleViews=()=>{
    dispatch( viewVideo({
      id:vid
    }))
  };

  useEffect(()=>{
    if(CurrentUser){
      handleHistory();
    }
    handleViews();
  }, []);
  return (
    <>
    <div className="container_videoPage">
    <div className="container2_videoPage">
       <div className="video_display_screen_videopage">
            <video src={`http://localhost:5500/${vv?.filePath}`} className={"video_Showvideo_videopage"} 
            controls
             ></video>
          <div className="video_details_videoPage">
            <div className="video_btns_title_VideoPage_cont">
                <p className="video_title_VideoPage">{vv?.videoTitle}</p>
                <div className="views_date_btns_VideoPage">
                    <div className="views_VideoPage">
                    {vv?.Views} views <div className="dot"></div> 
                    uploaded {moment(vv?.createdAt).fromNow()}
                    </div>
                <LikeWatchLaterSaveBtns vv={vv} vid={vid} />
                </div>
            </div>

            {/* Chanel details divs */}
            <Link to={`/chanel/${vv?.videoChanel}`} className='chanel_details_videoPage'>
                <b className="chanel_logo_videoPage">
                    <p>{vv?.Uploader.charAt(0).toUpperCase()}</p>
                </b>
                    <p className="chanel_name_videoPage">{vv?.Uploader} </p>
            </Link>
            
            {/* div for comments section */}
            <div className="comments_VideoPage">
                <h2>
                    <u>Comments</u>
                </h2>
                <Comments videoId={vv._id}/>
            </div>
         </div>
       </div>
       <div className="moreVideoBar">
        More Video
       </div>
    </div>
    </div>
    </>
  )
}

export default VideoPage