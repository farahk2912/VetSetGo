import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./PetHeader.css";
import { usePet } from "./petContext";


export default function PetHeader() {
  const { pet } = usePet();

  return (
    <div style={{ backgroundColor: "#ffffff", padding: "2em" }}>
      <div
        className="container p-5 rounded-4 shadow"
        style={{
          background: "linear-gradient(90deg, #972aebff, #f199f1ff)",
          color: "white",
        }}
      >
        <div className="d-flex align-items-center gap-4 flex-wrap">

          {}
          <div
            className="rounded-4 overflow-hidden shadow border border-white zoom"
            style={{ width: "220px", height: "220px" }}
          >
            <img
              src={pet.img}
              alt={pet.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {}
          <div>
            <h1 style={{ fontSize: "4.3em", fontWeight: "700" }}>{pet.name}</h1>
            <h3 style={{ fontWeight: "400" }}>{pet.breed}</h3>

            <div className="d-flex gap-3 mt-3">
              <button className="btn btn-light px-4 py-2 fw-semibold">
               Hiii!
              </button>

              <button
                className="btn btn-light d-flex justify-content-center align-items-center rounded-circle"
                style={{ width: "3em", height: "3em" }}
              >
                <i className="bi bi-share"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
