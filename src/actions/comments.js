import * as api from '../api'; 

//for edit the comment 
export const editComment =(CommentData)=>async(dispatch)=>{
    try {
        const {id, commentBody} = CommentData;
        const {data} = await api.editComment(id, commentBody);
        dispatch({type:"EDIT_COMMENT", payload:data});
        dispatch(getAllComment());
    }
    catch(error) {
        console.log(error);
    }
}

//for post the comment
export const postComment =(CommentData)=>async(dispatch)=>{
    try{
        const {data}= await api.postComment(CommentData);
        // console.log(CommentData);
        dispatch({type:"POST_COMMENT", payload: data});
        dispatch(getAllComment());
    }
    catch(error) {
        console.log(error);
    }
}

//for get the all comment
export const getAllComment=()=> async (dispatch)=> {
    try {
        const {data} = await api.getAllComment();
        // console.log(data);
        dispatch({type:'FETCH_ALL_COMMENTS', payload:data})
    } catch (error) {
        console.log(error);
    }
}

//for delete the all comment
export const deleteComment = (data)=> async(dispatch)=>{    //id
    try {
       const {id} = data
        console.log(id);
        await api.deleteComment(id); 
        dispatch(getAllComment())
    } catch (error) {
        console.log(error);
    }
}
