import React, {useState} from 'react';
import './comments.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/comments';
import moment from 'moment';
function DisplayComments({cId, commentBody, userId, commentOn, usercommented}) {
  
  const CurrentUser = useSelector((state)=>state?.currentUserReducer);

  const [Edit, setEdit] = useState(false);
  const [cmtId, setcmtId] = useState("")
  const [cmtBdy, setcmtBdy] = useState("");

  const handleEdit=(ctId,ctBdy)=>{
      setEdit(true);
      setcmtId(ctId);
      setcmtBdy(ctBdy);
  }
  
  const dispatch = useDispatch(); 
  const handleOnSubmit =(event)=>{
    event.preventDefault();
    if(!cmtBdy){
      alert("Type your comment")
    }
    else{
      dispatch(editComment({
        id: cmtId,
        commentBody: cmtBdy,

      }))
      setcmtBdy("")
    }
    setEdit(false);
  };
  const handleDel=(id)=>{
    dispatch(deleteComment({id}))
  }
  return (
    <>
    {
      Edit ? (<>
      <form className='comments_sub_form_comments' onSubmit={handleOnSubmit}>

            <input type="text" className='comments_ibox' placeholder='add comments' value={cmtBdy}  onChange={e=>setcmtBdy(e.target.value)}/>

            <input type="submit" value="change" className='comment_add_btn_comment' />
        </form>
        </>):(
          <p className="comment_body">{commentBody} </p>
        )
    }
        <p className="usercommented"> - {usercommented} commented {moment(commentOn).fromNow()} </p>
        {
          CurrentUser?.result._id === userId && (

          <p className="EditDel_DisplayComment">
            <i onClick={()=>handleEdit(cId, commentBody)}>Edit</i>
            <i onClick={()=>handleDel(cId)} >Delete</i>
          </p>
          
          )
        }
    </>
    )
}

export default DisplayComments;