import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Profile from "./pages/profile"; // Changed from profile to Profile
import { PetProvider } from "./Components/petContext"; 

function App() {
  return (
    <PetProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </PetProvider>
  );
}
export default App
