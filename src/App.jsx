// App.jsx - Updated with authentication
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Profile from "./pages/profile";
import { PetProvider } from "./Components/petContext"; 
import Community from "./pages/Community";
import LogInpage from './pages/Login-page/LogInpage';
import CommunityPage2 from './Components/CommunityPage2';
import SignUPpage from './pages/Signup-page/SignUPpage';
import AdoptHome from "./pages/adoptHome/adoptHome";
import Adopt from "./pages/Adopt/Adopt";
import HospitalsPage from './pages/HospitalPage';
import ProtectedRoute from './Components/ProtectedRoute'; // ← ADD THIS
import { authAPI } from './services/api'; // ← ADD THIS
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <PetProvider>
      <Navbar />
      <Routes>
        {/* ============================================ */}
        {/* PUBLIC ROUTES (No login required)           */}
        {/* ============================================ */}
        
        {/* Home page */}
        <Route path="/" element={<Home />} />
        
        {/* Login & Signup pages */}
        <Route path="/Login" element={<LogInpage />} />
        <Route path="/signup" element={<SignUPpage />} />
        
        {/* Community pages */}
        <Route path="/Community" element={<CommunityPage2 />} />
        
        {/* Adoption pages */}
        <Route path="/adopt-home" element={<AdoptHome />} />
        <Route path="/adopt" element={<Adopt />} />
        
        {/* Hospitals/Vets page */}
        <Route path="/Vets" element={<HospitalsPage />} />

        {/* ============================================ */}
        {/* PROTECTED ROUTES (Login required)           */}
        {/* ============================================ */}
        
        {/* Profile page - requires authentication */}
        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ============================================ */}
        {/* 404 - Catch all undefined routes            */}
        {/* ============================================ */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </PetProvider>
  );
}

export default App;