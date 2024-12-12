import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ profile }) => (
  <Link to={`/profile/${profile.id}`} className="profile-card">
    <img src={profile.photo} alt={profile.name} />
    <h3>{profile.name}</h3>
    <p>{profile.description}</p>
  </Link>
);

export default ProfileCard;
