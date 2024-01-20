import React from "react";

export default function CommentCard({commentData}) {
  return(
    <div className="comment-card">
      {commentData.content}
    </div>
  ) 
}
