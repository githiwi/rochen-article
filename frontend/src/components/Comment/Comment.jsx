import React, { useState } from "react";
import CommentService from "../../services/CommentService.js";


export default function Comment({articleId, refereshArticlePage}) {

  const [comment, setComment]=useState("")

  const handleSubmitComment = async (e)=> {
          e.preventDefault();
          const commentData = {
              articleId,
              comment,
          }
          
          try {
              const comment = await CommentService.createArticleComment(commentData)
              console.log("Comment created successfully", comment)
              refereshArticlePage()
              setComment("")
          } catch (error) {
              console.error("Erro creating comment", error)
          }
      }

  return(
    <div>
        Comment
        <form onSubmit={handleSubmitComment}>
            <textarea id="comment" value={comment} type="text" placeholder="write your comment" 
                            onChange={(e)=>setComment(e.target.value)}/>
            <button>Submit</button>
       </form>
      
     </div>
  )
}
