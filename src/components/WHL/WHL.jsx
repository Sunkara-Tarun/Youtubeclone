import React from 'react'
import './WHL.css'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import WHLVideoList from './WHLVideoList'
import { useDispatch, useSelector } from 'react-redux'
import { clearHistory } from '../../actions/History'

function WHL({page, videoList}) {
  const CurrentUser = useSelector((state)=>state?.currentUserReducer);

  const dispatch = useDispatch()
  const handleClearHistory=()=>{
    if(CurrentUser) {
      dispatch(clearHistory({
        userId: CurrentUser?.result._id
      }))
    }
  }
  return (
    <div className='Container_Pages_App'>
    <LeftSidebar/>
  <div className='Container2_Pages_App'>
   <p className="container_whl">
       <div className='box_WHL leftside_whl'>
          <b>Your {page} Shown Here </b>
          {
            page === "History"&&
          <div className="clear_History_btn" onClick={()=>handleClearHistory()}>
            Clear History
          </div>
          }
       </div>
       <div className="rightSide_whl">
        <h1>{page}</h1>
        <div className="whl_list">
            <WHLVideoList page = {page}
                          videoList = {videoList}
                          CurrentUser = {CurrentUser?.result._id}
                           />
        </div>
       </div>
    </p> 
   </div> 
 </div>
  )
}
export default WHL