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
    );
}

export default App;
