import React, { useState } from "react";
import CommentService from "../../services/CommentService.js";
import CommentCard from "./CommentCard/CommentCard.jsx";

export default function Comment({articleId}) {

  const [comment, setComment]=useState("")
  

 const handleSubmitComment = async (e)=>{
        e.preventDefault();
        const commentData = {
            articleId,
            comment,
        }
        
        try {
            const comment = await CommentService.createArticleComment(commentData)
        } catch (error) {
            console.error("erro creating comment",error)
        }
    }

  return(
    <div>
        Comment
        <form onSubmit={handleSubmitComment}>
            <textarea id="comment" value={comment} type="text" placeholder="write your comment" 
                            onChange={(e)=>setComment(e.target.value)}/>
            <button>submit</button>
       </form>
       <div>
        {/* <CommentCard commentData={commentData} /> */}
       </div>
     </div>
  )
}
