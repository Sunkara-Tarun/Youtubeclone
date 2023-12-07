import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
// import vid from '../../components/Video/vid.mp4';
import './Library.css'
import { FaHistory } from 'react-icons/fa'
import WHLVideoList from '../../components/WHL/WHLVideoList';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { useSelector } from 'react-redux';

function Library() {
//   const vids = [
//     {
//      _id:1,
//      video_src: vid,
//      Chanel:"62bafe6752cea35a6c30685f",
//      title:"video 1",
//      Uploader:"abc",
//      description:"description of video 1"
//    },
//     {
//      _id:2,
//      video_src: vid,
//      Chanel:"cdd",
//      title:"video 2",
//      Uploader:"abc",
//      description:"description of video 2"
//    },
//     {
//      _id:3,
//      video_src: vid,
//      Chanel:"add",
//      title:"video 3",
//      Uploader:"abc",
//      description:"description of video 3"
//    },
//     {
//      _id:4,
//      video_src: vid,
//      Chanel:"add",
//      title:"video 4",
//      Uploader:"abc",
//      description:"description of video 4"
//    }
//  ];

const CurrentUser = useSelector((state)=>state?.currentUserReducer);

const likedVideoList = useSelector(state => state.likedVideoReducer)

const historyList = useSelector(state => state.HistoryReducer)

const watchLaterList = useSelector(state => state.watchLaterReducer)
return (
    <div className='Container_Pages_App'>
      <LeftSidebar></LeftSidebar>
      <div className='Container2_Pages_App'>
        {/*This div container for watched history simbel div*/}
         <div className="container_libraryPage">
              <h1 className="title_container_LibraryPage">
                <b>
                  <FaHistory/>
                </b>
                <b>History</b>
              </h1>
                <div className="container_videoList_LibraryPage">
                    <WHLVideoList page={"History"}
                                  videoList={historyList}
                                  CurrentUser = {CurrentUser?.result._id}></WHLVideoList>
                </div>
         </div>
          {/*This div container for watch later simbel div */}
         <div className="container_libraryPage">
              <h1 className="title_container_LibraryPage">
                <b>
                  <MdOutlineWatchLater/>
                </b>
                <b>watch Later</b>
              </h1>
                <div className="container_videoList_LibraryPage">
                    <WHLVideoList page={"Watch Later"}
                                  videoList={watchLaterList}
                                  CurrentUser = {CurrentUser?.result._id}></WHLVideoList>
                </div>
         </div>
          {/*This div container for liked sibel div */}
         <div className="container_libraryPage">
              <h1 className="title_container_LibraryPage">
                <b>
                  <AiOutlineLike/>
                </b>
                <b>Liked Videos</b>
              </h1>
                <div className="container_videoList_LibraryPage">
                    <WHLVideoList page={"Watch Later"}
                                  videoList={likedVideoList}
                                  CurrentUser = {CurrentUser?.result._id} ></WHLVideoList>
                </div>
         </div>

      </div>
    </div>
  )
}
export default Library;