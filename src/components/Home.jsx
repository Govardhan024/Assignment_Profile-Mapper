import React, { useState } from "react";
import profilesData from "../data/profiles.json";
import ProfileCard from "./ProfileCard";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredProfiles = profilesData.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="profiles-container">
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Home;
