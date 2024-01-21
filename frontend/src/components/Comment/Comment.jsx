import React, { useState } from "react";
import CommentService from "../../services/CommentService.js";
import './comment.scss'

export default function Comment({articleId, refereshArticlePage}) {

  const [comment, setComment]=useState("")
  

  const handleSubmitComment = async (e)=> {
          e.preventDefault();

          const commentData = {
              articleId,
              comment,
          }
          
          try {
              await CommentService.createArticleComment(commentData)
              console.info("Comment created successfuly ")
              
              refereshArticlePage()
              setComment("")
          } catch (error) {
              console.error("Erro creating comment", error)
          }
      }

  return(
    <div>
       
        <form onSubmit={handleSubmitComment}>
            <textarea id="comment" value={comment} type="text" placeholder="write your comment" 
                            onChange={(e)=>setComment(e.target.value)} />
            <button type="submit" disabled={!comment.trim()}>Submit</button>
       </form>
      
     </div>
  )
}
