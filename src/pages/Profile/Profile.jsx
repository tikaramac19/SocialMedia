import React from 'react'
import styles from "./Profile.module.css"

import ProfileSide from '../../components/profileSide/ProfileSide'
import ProfileRight from '../../components/ProfileRight/ProfileRight'
const Profile = () => {
  return (
    <>
    <div className={styles.Profile}>
      <ProfileRight />
    </div>
    
    </>
  )
}

export default Profile