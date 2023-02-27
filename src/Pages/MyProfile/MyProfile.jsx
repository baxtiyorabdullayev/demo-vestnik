import "./MyProfile.css";
import React, { useContext } from "react";
import { StateContext } from "../../context";

function MyProfile() {
  const { state } = useContext(StateContext);
  const users = state.users;
  console.log(users);
  return <div className="my-profile-page">MyProfile</div>;
}

export default MyProfile;
