import React,{useState} from 'react'
import "./FollowersCard.css"
import Followers from '../../Data/FollowersData'
const FollowersCard = (props) => {

  const {follow,handleFollow}=props;

  const handleClick = (name) =>{

handleFollow(name)

  }
  return (
    <>
    <div className="FollowersCard">
        <h3>Who is following you</h3>
        {
            Followers.map((follower, id)=>{
                return <>
                
                <div className="follower">

                    <div>
                      <img src={follower.img} alt="" className='followerImg'/>
                      <div className="name">
                        <span>{follower.name}</span>
                        <span>{follower.username}</span>
                      </div>
                    </div>
                    <button className='button' onClick={()=>handleClick(follower.name)}>
                      {follower.name==follow?"unfollow":"follow"}
                    </button>
                </div>
                
                </>
            })
        }
    </div>
    </>
  )
}

export default FollowersCard