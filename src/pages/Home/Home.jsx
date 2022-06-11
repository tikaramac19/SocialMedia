import React from 'react'
import "./Home.css"
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostShare from '../../components/PostShare/PostShare'
const Home = () => {
  return (
    <div className="Home">
        <ProfileSide />
        <PostShare />
        <div className="RightSide">
            RightSide
        </div>

    </div>
  )
}

export default Home