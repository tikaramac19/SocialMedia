import React from 'react'
import styles from "./Profile.module.css"

import ProfileSide from '../../components/profileSide/ProfileSide'
const Profile = () => {
  return (
    <>
    <div className={styles.Profile}>
      <ProfileSide/>
    </div>
    
    </>
  )
}

export default Profile