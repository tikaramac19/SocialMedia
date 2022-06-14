import React from 'react'
import "./ProfileAddress.css"
import {UilPen} from "@iconscout/react-unicons"
const ProfileAddress = () => {
  return (
      <>
      
      <div className="ProfileAddress">
            <div className="info-section">
              <h1>Your Info</h1>
              <UilPen style ={{cursor: "pointer"}}/>
            </div>
            <div className="more-info">
              <div><span>Status</span> in Relationship</div>
              <div><span>Lives</span> in Surkhet</div>
              <div><span>Works at</span> Broadways Infosys</div>

            </div>

            <div className="logout">
              <button className='button'>Log Out</button>
            </div>
      </div>
      
      </>
  )
}

export default ProfileAddress