import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Profile from "./pages/profile";
import { PetProvider } from "./components/petContext";

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

export default App;
