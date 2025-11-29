<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Adopt from "./pages/Adopt/Adopt";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adopt" element={<Adopt />} />
        </Routes>
=======
import { Routes, Route } from "react-router-dom";
import HospitalsPage from "./pages/HospitalsPage";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HospitalsPage />} />
            </Routes>
        </>
>>>>>>> f0a5834 (hospitals)
    );
}

export default App;
