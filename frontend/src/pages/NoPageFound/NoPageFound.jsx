import React from "react";
import './NoPageFound.scss'
import notFoundImage from '../../assets/notFound.png'
export default function NoPageFound() {

  return(
    <div className="not-found-container">
     <img src={notFoundImage} alt="404 Not Found" />
    </div>
  ) 
}
