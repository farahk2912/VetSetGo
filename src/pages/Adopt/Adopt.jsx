import React from "react";
import "./Adopt.css";
import Adoptheader from "./Adoptheader";
import Adoptbody from "./Adoptbody";

function Adopt() {
    return (
        <div
            className="d-flex justify-content-center align-items-center min-vh-100 w-100"
            style={{ backgroundColor: "#F1F9FC", padding: "1.25rem" }}
        >
            <div
                className="bg-white rounded-4 shadow p-4 p-md-5 d-flex flex-column justify-content-start"
                style={{
                    width: "100%",
                    maxWidth: "1100px",
                    boxSizing: "border-box",
                }}
            >
                <Adoptheader />
                <Adoptbody />
            </div>
        </div>
    );
}

export default Adopt;
