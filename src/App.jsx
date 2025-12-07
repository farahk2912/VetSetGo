import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Profile from "./pages/profile"; // Changed from profile to Profile
import { PetProvider } from "./Components/petContext"; 
import Community from "./pages/Community"
import LogInpage from './pages/Login-page/LogInpage';
import CommunityPage2 from './Components/CommunityPage2';
import SignUPpage from './pages/Signup-page/SignUPpage';
import AdoptHome from "./pages/adoptHome/adoptHome";
import Adopt from "./pages/Adopt/Adopt";
import HospitalsPage from './pages/HospitalPage';
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
});

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
        <Route path="/Vets" element={<HospitalsPage />} />
      </Routes>
    </PetProvider>
  );
}
export default App
