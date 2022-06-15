import React ,{useState}from 'react'
import "./ProfileRight.css"
import { LogoSearch } from '../LogoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/FollowersCard'
import ProfileAddress from '../ProfileAddress/ProfileAddress'
const ProfileRight = () => {
  const [follow, setFollow] = useState({name:"",follow:false})

const handleFollow = (name)=>{
setFollow()
}

  return (
    <div className="ProfileRight">
        <LogoSearch />
            {/* profile adddress here */}
        <ProfileAddress />

        <FollowersCard handleFollow={handleFollow} follow = {follow}/>
    </div>
  )
}

export default ProfileRight