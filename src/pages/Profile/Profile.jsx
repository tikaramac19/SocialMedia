import React from 'react'
import styles from "./Profile.module.css"
import ProfileMiddle from "../../components/ProfileMiddle/ProfileMiddle"
import ProfileSide from '../../components/profileSide/ProfileSide'
import ProfileRight from '../../components/ProfileRight/ProfileRight'
import RightSide from "../../components/RightSide/RightSide"
const Profile = () => {
  return (
    <>
    <div className={styles.Profile}>
      <ProfileRight />
      <ProfileMiddle />
      <RightSide />
    </div>
    
    </>
  )
}

export default Profile