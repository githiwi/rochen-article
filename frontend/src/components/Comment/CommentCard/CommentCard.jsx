import React from "react";
import './commentCard.scss'

export default function CommentCard({commentData}) {
  return(
    <div className="comment-card">
      {commentData.content}
    </div>
  ) 
}
