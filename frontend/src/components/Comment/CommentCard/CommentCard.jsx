import React from "react";
import './commentCard.scss'
import avatar from '../../../assets/avatar.png'

export default function CommentCard({commentData}) {

  return(
    <>
      <div>
        <img src={avatar} alt="avatar" />
        {commentData.username} 
      </div>
      <div className="comment-card">
          {commentData.content}
      </div>
    </>
  ) 
}
