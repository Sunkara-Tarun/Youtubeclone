import React, { useState } from 'react'
import './CreateEditChanel.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateChanelDate } from '../../actions/chanelUser';
import { login } from '../../actions/auth';
function CreateEditChanel({setEditCreateChanelBtn}) {
    // const CurrentUser = {
    //     result :{
    //       email:"Tarun@gmail.com",
    //       joinedOn:"2222-07-15T09:57:23.489Z"
    //     }
    //   };
    const CurrentUser = useSelector(state=>state.currentUserReducer);

      const [name, setName] = useState(CurrentUser?.result.name)
      const [desc, setDesc] = useState(CurrentUser?.result.desc)
      const dispatch = useDispatch();
      const handleSubmit=()=>{
        if(!name){
            alert("Please Enter Name !")
        }
        else if(!desc){
            alert("Please Enter Discription !")
        }
        else{
            dispatch(updateChanelDate(CurrentUser?.result._id, {name:name, desc:desc}));
            setEditCreateChanelBtn(false)
            setTimeout(()=>{
                dispatch(login({ email:CurrentUser?.result.email }));
            }, 2000)
        }
      };
  return (
    <div className='container_CreateEditChanel'>
      <input type='submit'
             name='text'
             value={"x"}
             className='ibtn_x'
             onClick={()=>setEditCreateChanelBtn(false)}/>  
    <div className='container2_CreateEditChanel'>
      <h1>
        {CurrentUser?.result.name ? <>Edit</> : <>Create</>}
         Your Chanel 
        </h1> 
        <input type='text'
               name='text'
               placeholder='Enter Your/Chanel Name'
               className='ibox'
               value={name}
               onChange={(e)=>setName(e.target.value)}/>

        <textarea type="text"
                  rows={15}
                  placeholder='Enter Chanel Description' 
                  className='ibox'
                  value={desc}
                  onChange={(e)=>setDesc(e.target.value)}/>

        <input type="submit"
               value="Submit"
               className='ibtn' 
               onClick={handleSubmit}/>

    </div>
    </div>
  )
}

export default CreateEditChanel