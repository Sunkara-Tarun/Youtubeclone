import React from 'react'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import vid from '../../components/Video/vid.mp4';
import DescribeChanel from './DescribeChanel';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Chanel({setEditCreateChanelBtn, setVidUploadPage}) {

    const {Cid} = useParams();
    
    const vids = useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel === Cid).reverse();

    // const vids = [
    //     {
    //      _id:1,
    //      video_src: vid,
    //      Chanel:"chanel1",
    //      title:"video 1",
    //      Uploader:"abc",
    //      description:"description of video 1"
    //    },
    //     {
    //      _id:2,
    //      video_src: vid,
    //      Chanel:"chanel2",
    //      title:"video 2",
    //      Uploader:"abc",
    //      description:"description of video 2"
    //    },
    //     {
    //      _id:3,
    //      video_src: vid,
    //      Chanel:"chanel3",
    //      title:"video 3",
    //      Uploader:"abc",
    //      description:"description of video 3"
    //    },
    //     {
    //      _id:4,
    //      video_src: vid,
    //      Chanel:"chanel4",
    //      title:"video 4",
    //      Uploader:"abc",
    //      description:"description of video 4"
    //    }
    //  ];
  
    return (
    
        <div className='Container_Pages_App'>
            <LeftSidebar/>
          <div className='Container2_Pages_App'>
            <DescribeChanel
             Cid = {Cid}
             setVidUploadPage = {setVidUploadPage}
             setEditCreateChanelBtn = {setEditCreateChanelBtn}/>
             <ShowVideoGrid vids={vids}></ShowVideoGrid>
          </div>
        </div>
      
  )
}

export default Chanel