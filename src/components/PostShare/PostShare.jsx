import React from 'react'
import Followers from '../../Data/FollowersData'
import "./PostShare.css"
const PostShare = () => {
  return (
    <div className="postShare">
        {
            Followers.map((item,id)=>{
                return <>
                
                <span>
                    {item.name}
                </span>
                
                </>
            })
        }
    </div>
  )
}

export default PostShare