import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import profilesData from "../data/profiles.json";
import MapComponent from "./MapComponent";
import '../styles/ProfileDetails.css'; // You can style the component here

const ProfileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profilesData.find((p) => p.id === parseInt(id));
  const [showMap, setShowMap] = useState(false);

  if (!profile) {
    return <p>Profile not found.</p>;
  }

  return (
    <div className="profile-details-container">
      <div className="profile-header">
        <img src={profile.photo} alt={profile.name} className="profile-photo" />
        <div className="profile-info">
          <h1>{profile.name}</h1>
          <p className="profile-description">{profile.description}</p>
        </div>
      </div>

      <div className="profile-section">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Company:</strong> {profile.company}</p>
      </div>

      <div className="profile-section">
        <h2>Location</h2>
        <p><strong>Latitude:</strong> {profile.latitude}</p>
        <p><strong>Longitude:</strong> {profile.longitude}</p>
      </div>

      <div className="profile-section">
        <h2>Skills</h2>
        <p>{profile.skills.join(", ")}</p>
      </div>

      <div className="profile-section">
        <h2>Hobbies</h2>
        <p>{profile.hobbies.join(", ")}</p>
      </div>

      <div className="profile-section">
        <h2>Experience</h2>
        {profile.experience.length > 0 ? (
          profile.experience.map((exp, index) => (
            <div key={index} className="experience-item">
              <h3>{exp.title} at {exp.company}</h3>
              <p><strong>Duration:</strong> {exp.duration}</p>
              <ul>
                {exp.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No experience listed.</p>
        )}
      </div>

      <div className="profile-actions">
        <button className="back-button" onClick={() => navigate(-1)}>
          Back
        </button>
        <button
          className="map-button"
          onClick={() => setShowMap((prev) => !prev)}
        >
          {showMap ? "Hide Map" : "View on Map"}
        </button>
      </div>

      {showMap && (
        <MapComponent
          latitude={profile.latitude}
          longitude={profile.longitude}
        />
      )}
    </div>
  );
};

export default ProfileDetails;
