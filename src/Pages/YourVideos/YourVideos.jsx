import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
// import vid from '../../components/Video/vid.mp4';
import './yourVideos.css'
import { useSelector } from 'react-redux';
function YourVideos() {

  const CurrentUser = useSelector((state)=>state?.currentUserReducer);
  const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel === CurrentUser?.result?._id).reverse();

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

return (
   <div className='Container_Pages_App'>
        <LeftSidebar></LeftSidebar>
      <div className='Container2_Pages_App'>
        <div className="container_yourvideo">
        <h1>Your Video </h1>
        {
          CurrentUser ? (<>   
          <ShowVideoGrid vids={vids}></ShowVideoGrid>
          </>) : (<> 
            <h3> Please Login to see your uploaded videos </h3>
          </>)
        }
        </div>
      </div>
    </div>
  )
}

export default YourVideos