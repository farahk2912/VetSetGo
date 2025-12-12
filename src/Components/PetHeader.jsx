// src/components/PetHeader.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './PetHeader.css';
import { usePet } from './petContext';

export default function PetHeader() {
  const { pet, setPet } = usePet(); // <-- make sure setPet is here

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("petId", pet._id);

    try {
      const res = await fetch("http://localhost:5000/api/pets/upload-image", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.imageUrl) {
        setPet((prev) => ({ ...prev, img: data.imageUrl }));
      }
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  // Fallbacks in case some fields are missing
  const name = pet?.name || 'Unknown';
  const breed = pet?.breed || pet?.type || 'Unknown';

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '2em' }}>
      <div
        className="container p-5 rounded-4 shadow"
        style={{
          background: 'linear-gradient(90deg, #972aebff, #f199f1ff)',
          color: 'white',
        }}
      >
        <div className="d-flex align-items-center gap-4 flex-wrap">
          <div
            className="rounded-4 overflow-hidden shadow border border-white zoom"
            style={{ width: "220px", height: "220px" }}
          >
            <img
              src={
                pet.img?.startsWith("http")
                  ? pet.img
                  : `http://localhost:5000/api/pets${pet.img}`
              }
              alt={pet.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div>
            <h1 style={{ fontSize: '4.3em', fontWeight: '700' }}>{name}</h1>
            <h3 style={{ fontWeight: '400' }}>{breed}</h3>

            <div className="d-flex gap-3 mt-3">
              <input
                type="file"
                id="uploadInput"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />

              <button
                className="btn btn-light px-4 py-2 fw-semibold"
                onClick={() => document.getElementById("uploadInput").click()}
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
