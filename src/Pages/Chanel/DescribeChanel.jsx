import React from 'react'
import { FaEdit, FaUpload } from 'react-icons/fa'
import  './DescribeChanel.css';
import { useSelector } from 'react-redux';
function DescribeChanel({setEditCreateChanelBtn, Cid, setVidUploadPage}) {
  
  const chanels = useSelector(state=>state?.chanelReducers)  //chanelReducers
//   console.log(chanels);
  const currentChanel = chanels.filter((c)=>c._id === Cid)[0]; 
//   console.log(currentChanel);

  const CurrentUser = useSelector((state)=>state?.currentUserReducer);
    // console.log(CurrentUser);
  return (
    <div className='container3_chanel'>
        <div className="chanel_logo_chanel">
            <b> 
                {CurrentUser?.result.name.charAt(0).toUpperCase()}
            </b>
        </div>
        <div className="description_chanel">
            <b> {CurrentUser?.result.name}</b>   {/* Error: Here Uing of "currentChanel" is not working.But insted  it i was using "CurrentUser" is working*/}
            <p>{CurrentUser?.result.desc}</p>
        </div>
        {CurrentUser?.result._id === currentChanel?._id &&  //Here i missing the "result" in Current?._id
        (
         <>
           <p className='editbtn_chanel' onClick={()=>{setEditCreateChanelBtn(true)}}>
               <FaEdit/>
               <b>Edit Chanel</b>
           </p>
           <p className='uploadbtn_chanel' onClick={()=> setVidUploadPage(true)}>
               <FaUpload/>
               <b>Upload video</b>
           </p>
         </>
        )
        }
    </div>
  )
}

export default DescribeChanel;