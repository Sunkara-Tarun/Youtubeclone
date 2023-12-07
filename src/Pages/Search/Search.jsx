import React from 'react'
// import './Search.css'
// import vid from '../components/Video/vid.mp4'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function Search() {

    const {searchQuery}  = useParams();
  const vids = useSelector(state=>state.videoReducer)?.data?.filter((q)=>q?.videoTitle.toUpperCase().includes(searchQuery.toUpperCase())).reverse();
//   console.log(vids);

  return (
    <div className='Container_Pages_App'>
        <LeftSidebar />
      <div className='Container2_Pages_App'>
        <h2 style={{color:"white"}}> Search Result for {searchQuery}...</h2>
         <ShowVideoGrid vids={vids} />
      </div>
    </div>
  )
}

export default Search;
