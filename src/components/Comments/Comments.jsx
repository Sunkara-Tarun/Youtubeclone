import React, { useState } from 'react';
import './comments.css';
import DisplayComments from './DisplayComments';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../actions/comments';

function Comments({videoId}) {
    const [commentsText, setcommentText] = useState("");

    const CurrentUser = useSelector((state)=>state?.currentUserReducer);
    const commentsList = useSelector(s=>s.commentReducer)

  //   const commentsList = [
  //     {
  //       _id:"1",
  //     commentBody:"hello",
  //     usercommented:"abc"
  //   },
  //     {
  //       _id:"2",
  //     commentBody:"hi",
  //     usercommented:"xyz"
  //   }
  // ];
   
  const dispatch = useDispatch()
  const handleOnSubmit=(e)=>{
        e.preventDefault();
        if(CurrentUser){

          if(!commentsText) {
            alert('Please type your comment !')
          }
          else{
            dispatch(postComment({
              videoId : videoId,
              userId: CurrentUser?.result._id,
              commentBody: commentsText,
              userComment: CurrentUser?.result.name
            }))
            setcommentText("");
          }
        }
        else{
          alert("Please Login to post your comment !")
        }
    } 
  return (
    <>
        <form className='comments_sub_form_comments' onSubmit={handleOnSubmit}>
            <input type="text" className='comments_ibox' value={commentsText} placeholder='add comments'  onChange={e=>setcommentText(e.target.value)}/>
            <input type="submit" value="add" className='comment_add_btn_comment' />
        </form>
        <div className="display_comment_container">
          {
            commentsList?.data?.filter(q=>videoId === q?.videoId).reverse().map((m)=>{
              return (
              <DisplayComments cId={m._id} userId={m.userId} commentOn={m.commentOn} commentBody={m.commentBody}  usercommented={m.usercommented}/>
              )
             }
            )
          }
        </div>
    </>
  )
};
export default Comments;
