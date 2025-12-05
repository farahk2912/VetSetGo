import React from "react";
import { Routes, Route } from "react-router-dom";
import AdoptHome from "./pages/adoptHome/adoptHome.jsx";
import Adopt from "./pages/Adopt/Adopt";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AdoptHome/>} />
            <Route path="/adopt" element={<Adopt />} />

        </Routes>
    );
}

export default App;
