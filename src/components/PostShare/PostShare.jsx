import React from 'react'
import "./PostShare.css"
import {UilScenery , UilPlayCircle ,UilLocationPoint, UilSchedule} from '@iconscout/react-unicons'
import profilerImage from "../../img/profileImg.jpg";
const PostShare = () => {
  return (
    <div className="PostShare">
         <img src={profilerImage} alt="" />
         <div>
             <input type="text" placeholder="what's happening?" />
         </div>
         <div className="PostOptions">
             <div className="option">
                 <UilScenery />
                 Photo
             </div>
             <div className="option">
                 <UilPlayCircle />
                 Video
             </div>
             <div className="option">
                 <UilLocationPoint />
                 Location
             </div>
             <div className="option">
                 <UilSchedule />
                 Shedule
             </div>
             
         </div>
    </div>
  )
}

export default PostShare