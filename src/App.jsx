// App.jsx - PetProvider wraps entire app to support pet data in Navbar
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Profile from "./pages/profile";
import { PetProvider } from './Components/petContext';
import Community from "./pages/Community";
import LogInpage from './pages/Login-page/LogInpage';
import PetsForm from './pages/Pets-form/PetsForm';
import CommunityPage2 from './Components/CommunityPage2';
import SignUPpage from './pages/Signup-page/SignUPpage';
import AdoptHome from "./pages/adoptHome/adoptHome";
import Adopt from "./pages/Adopt/Adopt";
import HospitalsPage from './pages/HospitalPage';
import ProtectedRoute from './Components/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <PetProvider> {/* ✅ Wraps everything so Navbar can use usePet() */}
      <Navbar />
      <Routes>
        {/* ============================================ */}
        {/* PUBLIC ROUTES */}
        {/* ============================================ */}
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LogInpage />} />
        <Route path="/signup" element={<SignUPpage />} />
        <Route path="/Community" element={<CommunityPage2 />} />
        <Route path="/adopt-home" element={<AdoptHome />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/Vets" element={<HospitalsPage />} />
        <Route path="/Pet-Form" element={<PetsForm />} />
        {/* ============================================ */}
        {/* PROTECTED ROUTES */}
        {/* ============================================ */}
        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Add other protected routes here (no extra PetProvider needed) */}

        {/* ============================================ */}
        {/* 404 */}
        {/* ============================================ */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </PetProvider>
  );
}

export default App;