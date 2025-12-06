import React from "react";
import { Routes, Route } from "react-router-dom";

import HospitalsPage from "./Pages/HospitalsPage";
import "./index.css";


function App() {
  return (
    <PetProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Community" element={<CommunityPage2 />} />
        <Route path="/Login" element={<LogInpage />} />
        <Route path="/signup" element={<SignUPpage />} />
         <Route path="/adopt-home" element={<AdoptHome />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/vets" />
      </Routes>
    </PetProvider>
  );
}

export default App;
