import React, { useState } from "react";
import profilesData from "../data/profiles.json";

const Admin = () => {
  const [profiles, setProfiles] = useState(profilesData);
  const [newProfile, setNewProfile] = useState({ name: "", description: "", latitude: 0, longitude: 0 });

  const handleAddProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
    setNewProfile({ name: "", description: "", latitude: 0, longitude: 0 });
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };
  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <div className="add-profile-form">
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProfile.description}
          onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Latitude"
          value={newProfile.latitude}
          onChange={(e) => setNewProfile({ ...newProfile, latitude: parseFloat(e.target.value) })}
        />
           <input
          type="number"
          placeholder="Longitude"
          value={newProfile.longitude}
          onChange={(e) => setNewProfile({ ...newProfile, longitude: parseFloat(e.target.value) })}
        />
        <button onClick={handleAddProfile}>Add Profile</button>
      </div>
      <div className="profile-list">
        {profiles.map((profile) => (
          <div key={profile.id} className="profile-card">
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;