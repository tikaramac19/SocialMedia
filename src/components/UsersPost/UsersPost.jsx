import React from 'react'
import "./UsersPost.css"
import Comment from "../../img/comment.png"
import Share from "../../img/share.png"
import Heart from "../../img/like.png"
import NotLike from "../../img/notlike.png"

const UsersPost = ({post, id}) => {
  return (
    <>
    <div className="UsersPost">
        <img src={post.img} alt="" />

        <div className="postReaction">
            <img src={post.liked ? Heart : NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />

        </div>
        <span>
            {post.likes} likes
        </span>
        <div className="detail">
            <span><b> @{post.name} </b></span>
            <span>{post.desc}</span>
        </div>
    </div>
    
    </>
  )
}

export default UsersPost