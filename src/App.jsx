import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HospitalsPage from "./Pages/HospitalsPage";
import "./index.css";

function App() {
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Navbar />

            <div style={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/" element={<HospitalsPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
