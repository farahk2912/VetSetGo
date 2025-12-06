import React from "react";
import { Routes, Route } from "react-router-dom";
import HospitalsPage from "./pages/HospitalsPage";
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
            <div style={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/vets" element={<HospitalsPage />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
