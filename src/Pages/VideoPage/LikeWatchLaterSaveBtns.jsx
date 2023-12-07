import React,{ useEffect, useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {MdPlaylistAddCheck} from 'react-icons/md'
import {AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import {RiHeartAddFill, RiHeartFill, RiPlayListAddFill, RiPlaylistAddCheck, RiShareForwardLine} from 'react-icons/ri'
import './LikeWatchLaterSaveBtns.css'
import { useDispatch, useSelector } from 'react-redux'
import { likeVideo } from '../../actions/video'
import { addToLikedVideo, deletelikedVideo } from '../../actions/likedVideo'
import { addTowatchLater, deleteWatchLater } from '../../actions/watchLater'

function LikeWatchLaterSaveBtns({vv, vid}) {

    const CurrentUser = useSelector((state)=>state?.currentUserReducer);

    const dispatch = useDispatch();
    const [SaveVideo, setSaveVideo] = useState(false);
    const [LikeBtn, setLikeBtn] = useState(false);
    const [DislikeBtn, setDislikeBtn] = useState(false);
    
    //this for the like button stay active 
    const likedVideoList = useSelector(state => state.likedVideoReducer)
    useEffect(()=>{
      likedVideoList?.data.filter(q=>q?.videoId === vid && q?.Viewer === CurrentUser?.result._id).map(m=> setLikeBtn(true))
    },[]);
    
    //this for the save button stay active
    const watchLaterList = useSelector(state=>state.watchLaterReducer)
    useEffect(()=>{
      watchLaterList?.data.filter(w=>w?.videoId === vid && w?.Viewer === CurrentUser?.result._id).map(m=> setSaveVideo(true))
    },[])

    //this for save video watchLater part
    const toggleSavedVideo=()=>{
      if(CurrentUser){

        if(SaveVideo){
        setSaveVideo(false);

        dispatch(deleteWatchLater({
          videoId: vid,
          Viewer: CurrentUser?.result._id
        }))
       }
        else{
         setSaveVideo(true);

         dispatch(addTowatchLater({
          videoId: vid,
          Viewer: CurrentUser?.result._id
         }))
        }
      }
      else{
        alert("Please Login to Save the Video !")
      }
    }
   
    // This for like button part
    const toggleLikeBtn=(e, lk)=>{
      if(CurrentUser){

        if(LikeBtn){
            setLikeBtn(false);

            dispatch(likeVideo({
                id: vid,
                Like: lk - 1,
            }));
            dispatch(deletelikedVideo({
              videoId: vid,
              Viewer: CurrentUser?.result._id
            }))
        }
        else{
            setLikeBtn(true);

            dispatch(likeVideo({
                id: vid,
                Like: lk + 1,
            }));

            dispatch(addToLikedVideo({
              videoId: vid,
              Viewer: CurrentUser?.result._id
            }));

            setDislikeBtn(false);
        }

      }
      else{
        alert("Please Login To Give A Like")
      }
    }

    //this is for dislike 
    const toggleDislikeBtn=(e, lk)=>{
      if(CurrentUser){

        if(DislikeBtn){
         setDislikeBtn(false);
       }
       else{
         setDislikeBtn(true);
 
         if(LikeBtn){
             dispatch(
               likeVideo({
                 id: vid,
                 Like:lk - 1,
             }));
             dispatch(deletelikedVideo({
              videoId: vid,
              Viewer: CurrentUser?.result._id
            }))
         }
         setLikeBtn(false);
       }

      }
      else{
        alert("Please Login To Give A Like")
      }
    }
  return (
    <div className='btns_cont_videoPage'>
        <div className="btn_VideoPage">
           <BsThreeDots/>
        </div>
        <div className="btn_VideoPage">
            {/* this div for like button */}
            <div className="like_videoPage" onClick={(e)=>{toggleLikeBtn(e, vv.Like)}}>    
               { 
               LikeBtn ? (
               <>
                <AiFillLike style={22} className='btns_videoPage'/>                </>
                ):(
                <>
               <AiOutlineLike style={22} className='btns_videoPage'/>
                </>)
                }
                <b>{vv?.Like}</b>
            </div>
                {/* this div for dislike button */}
            <div className="like_videoPage" onClick={(e)=>{toggleDislikeBtn(e, vv.Like)}}>
               { 
               DislikeBtn ? (
               <>
                <AiFillDislike style={22} className='btns_videoPage'/>                </>
                ):(
                <>
               <AiOutlineDislike style={22} className='btns_videoPage'/>
                </>)
                }
                <b>dislike</b>
            </div>
               {/* this div for heatfill button */}
               <div className="like_videoPage" onClick={()=>{toggleSavedVideo()}}>
               { 
               SaveVideo ? (
               <>
               <MdPlaylistAddCheck style={22} className='btns_videoPage'/>
                <b>Saved</b>
               </>
                ):(
                  <>
                  <RiPlayListAddFill style={22} className='btns_videoPage' />
                  <b>Save</b>
                </>)
                }
            </div>
            {/* this div for heataddfill button */}
            <div className="like_videoPage" >
                <>
                <RiHeartAddFill style={22} className='btns_videoPage'/>
                <b>Thanks</b>
                </>
            </div>
            <div className="like_videoPage">
                <>
                <RiShareForwardLine style={22} className='btns_videoPage'/>
                <b>Share</b>
                </>
            </div>
         
        </div>
        </div>
  )
}

export default LikeWatchLaterSaveBtns;