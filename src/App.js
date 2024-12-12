import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import './styles/styles.css';


import ProfileDetails from "./components/ProfileDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile/:id" element={<ProfileDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

