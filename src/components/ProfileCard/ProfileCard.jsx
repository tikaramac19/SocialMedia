import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImage">
        <img src={Cover} alt="Cover photo" />
        <img src={Profile} alt="profile " />
      </div>
      <div className="ProfileName">
        <span>Kamala Lamichane</span>
        <span>Senior FrontEnd Developer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div className="follow-container">
            <div className="follow">
                <span>2364</span>
                <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>6</span>
                <span>Followers</span>
            </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ProfileCard;
