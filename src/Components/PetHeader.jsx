// src/components/PetHeader.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PetHeader.css';
import { usePet } from './petContext';

export default function PetHeader() {
  const { pet, setPet } = usePet();

  // ✅ Dynamic backend URL
  const API_URL = "https://vetsetgoback-production-dbce.up.railway.app" || 'http://localhost:5000';

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file || !pet?._id) return;

    const formData = new FormData();
    formData.append("image", file);
    formData.append("petId", pet._id);

    try {
      const res = await fetch(`${API_URL}/api/pets/upload-image`, {
        method: "POST",
        headers: {
          'x-auth-token': localStorage.getItem('token') // ✅ Add auth!

        },
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.imageUrl) {
        // ✅ Use full absolute URL if relative path is stored
        let imageUrl = data.imageUrl;
        if (imageUrl.startsWith('/')) {
          imageUrl = `${API_URL}${imageUrl}`;
        }
        setPet((prev) => ({ ...prev, img: imageUrl }));
      } else {
        alert(data.error || 'Upload failed');
      }
    } catch (err) {
      console.error("Error uploading image:", err);
      alert('Failed to upload image');
    }
  };

  const name = pet?.name || 'Unknown';
  const breed = pet?.breed || pet?.type || 'Unknown';

  // ✅ Safely resolve image URL
  let imgSrc = '/images/default-pet.png'; // fallback
  if (pet?.img) {
    if (pet.img.startsWith('http')) {
      imgSrc = pet.img;
    } else if (pet.img.startsWith('/')) {
      imgSrc = `${API_URL}${pet.img}`;
    }
  }

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
              src={imgSrc}
              alt={name}
              onError={(e) => {
                e.target.src = '/images/default-pet.png';
              }}
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