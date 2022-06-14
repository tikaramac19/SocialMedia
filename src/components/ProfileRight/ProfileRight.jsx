import React from 'react'
import "./ProfileRight.css"
import { LogoSearch } from '../LogoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/FollowersCard'
import ProfileAddress from '../ProfileAddress/ProfileAddress'
const ProfileRight = () => {
  return (
    <div className="ProfileRight">
        <LogoSearch />
            {/* profile adddress here */}
        <ProfileAddress />

        <FollowersCard />
    </div>
  )
}

export default ProfileRight