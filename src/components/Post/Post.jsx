import React from 'react'
import "./Post.css"
import { PostsData } from '../../Data/PostData'
import UsersPost from '../UsersPost/UsersPost'
const Post = () => {
  return (
    <div className="Post">
        {
            PostsData.map((post, id) =>{
                return <UsersPost post={post} id={id}/>
            })
        }
    </div>
  )
}

export default Post