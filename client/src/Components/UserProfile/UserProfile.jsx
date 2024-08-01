import React, { useEffect, useState } from "react";
import "./UserProfile.styles.css";
import Imports from "../../../imports";

const UserProfile = ({ user }) => {
  const {
    React,
    useEffect,
    useState,
    IoIosContact,
    RiMessageLine,
    FaRegShareSquare,
    axios,
  } = Imports;
  const [userInfo, setUserInfo] = useState([]);
  const fetchUserInfo = async () => {
    try {
      const response = await axios.get("http://localhost:9000/user/userinfo", {
        headers: {
          "Content-Type": "application/json",
          Authorization: user,
        },
      });

      setUserInfo(response.data[0]);
    } catch (error) {
      console.log(`ERRROR WHILE FETCHING USER INFO :: ${error}`);
      return;
    }
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <div className="userProfile-container">
      <div className="user-profile-left">
        <div className="user-info">
          <h5 className="user-full-name">
            {userInfo.first_name} {userInfo.last_name}
          </h5>
          <h6 className="username">@ {userInfo.user_name}</h6>
        </div>
        <div className="user-contact-btn">
          <button>
            {" "}
            <span>
              <RiMessageLine />
            </span>
            Text
          </button>
          <button>
            {" "}
            <span>
              <IoIosContact />
            </span>
            Call
          </button>
          <button>
            {" "}
            <span>
              <FaRegShareSquare />
            </span>
            Share
          </button>
        </div>
      </div>
      <div className="user-profile-right">
        <div className="user-profile-image">
          <img src={userInfo.seller_profile_image_url} alt="profile pic"></img>
        </div>
        <div className="user-profile-edit-btn">
          <button>Edit </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
