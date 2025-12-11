// src/components/Form.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ For better navigation

export default function Form() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate(); // ✅ Use React Router navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!name || !type || !gender) {
      alert('Please fill in all required fields');
      return;
    }

    // ✅ Safely get API URL
    const API_URL = "http://localhost:5000";
    if (!API_URL) {
      console.error('VITE_API_URL is not defined in environment');
      alert('Backend configuration error. Please contact support.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/pets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({
          name,
          type,
          breed,
          age: age ? parseInt(age, 10) : undefined,
          gender,
          notes: ''
        })
      });

      // ✅ Safe JSON parsing — handle non-JSON responses
      let responseData;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        // If not JSON (e.g., HTML error page), read as text
        const text = await response.text();
        console.warn('Non-JSON response from server:', text);
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }

      if (!response.ok) {
        const msg = responseData.msg || 'Failed to save pet';
        throw new Error(msg);
      }

      alert('Pet saved successfully!');
      navigate('/profile'); // ✅ Smooth SPA navigation
    } catch (err) {
      console.error('Form submit error:', err);
      alert('Error: ' + (err.message || 'Something went wrong'));
    }
  };

  return (
    <div
      className="mt-5 rounded-4 d-flex flex-column align-items-center form-container"
      style={{
        background: "linear-gradient(180deg, #D4C4EB 0%, #E6D9F3 50%, #F4EFFB 100%)",
        width: "40em",
        margin: "auto",
        padding: "20px"
      }}
    >
      <h2 className="pt-5" style={{ color: "#8453b4ff" }}>Pet Profile Form</h2>
      <h5 style={{ color: "#9a55e3ff" }}>We’d love to get to know your furry family member.</h5>

      <form onSubmit={handleSubmit} style={{ width: "100%", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Pet's name"
          className="rounded-3 border-0 p-2 mt-4 form-input"
          style={{ width: "25em", outline: "none" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Pet Type (e.g., Dog, Cat)"
          className="rounded-3 border-0 p-2 mt-2 form-input"
          style={{ width: "25em", outline: "none" }}
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Breed"
          className="rounded-3 border-0 p-2 mt-2 form-input"
          style={{ width: "25em", outline: "none" }}
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />

        <div className="d-flex mt-2 gap-3 flex-wrap justify-content-center">
          <input
            type="number"
            placeholder="Pet's age"
            className="rounded-3 border-0 p-2 form-input"
            min="0"
            style={{ width: "12em", outline: "none" }}
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <select
            className="p-1 p-2 border-0 rounded-3 form-input"
            style={{ width: "12em", outline: "none", color: "#84828C" }}
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <button
          type="submit"
          className="rounded-3 border-0 mt-4 text-light p-2 form-input"
          style={{ width: "25em", background: "#7544A6", marginBottom: "4em" }}
        >
          Share My Pet
        </button>
      </form>

      <style>
        {`
          @media (max-width: 920px) {
            .form-container {
              width: 95% !important;
              min-height: 55vh !important;
              border-radius: 2em !important;
              margin: 3em auto !important;
              padding: 20px !important;
            }
            .form-container .form-input {
              width: 20em !important;
              max-width: 90%;
            }
            .form-container .d-flex.flex-wrap {
              flex-direction: column !important;
              gap: 1em !important;
              align-items: center;
            }
          }
          @media (max-width: 370px) {
            .form-container {
              padding: 15px !important;
            }
            .form-container .form-input {
              width: 95% !important;
            }
            .form-container h2 {
              font-size: 1.4rem !important;
            }
            .form-container h5 {
              font-size: 1rem !important;
            }
            .form-container button {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}