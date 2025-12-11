// src/pages/HospitalsPage.jsx
import React, { useState, lazy, Suspense, useEffect } from "react";
import { FaPaw } from "react-icons/fa";
import "./HospitalPage.css";

import { hospitalAPI } from "../services/hospitalAPI"; // ✅ NEW

const MapView = lazy(() => import("../components/MapView"));
import { BookingModal } from './../Components/Modals';
import { DetailsModal } from "./../Components/Modals";
import VetCard from './../Components/VetCard';

function HospitalsPage() {
  const [hospitals, setHospitals] = useState([]); // ✅ real data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedVet, setSelectedVet] = useState(null);

  // ✅ Fetch real hospitals on mount
  useEffect(() => {
    const loadHospitals = async () => {
      try {
        const data = await hospitalAPI.getHospitals();
        // Map backend fields to frontend mock format
        const mapped = data.map(hospital => ({
          id: hospital._id,
          name: hospital.name,
          address: hospital.address,
          rating: hospital.rating || 0,
          isOpen: true, // You can calculate this from workingHours later
          hours: "See details", // or parse workingHours
        //   lat: 30.0444 + Math.random() * 0.02, // ❗ Temporary — see note below
        //   lng: 31.2357 + Math.random() * 0.02,
          image: hospital.image || "/default-hospital.png",
          phone: hospital.phone,
          email: hospital.email,
          lat: hospital.location?.lat || 30.0444,
          lng: hospital.location?.lng || 31.2357,
          specialties: hospital.specialties,
          description: hospital.description
        }));
        setHospitals(mapped);
      } catch (err) {
        console.error("Failed to load hospitals:", err);
        setError("Unable to load hospitals. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    loadHospitals();
  }, []);

  const handleDetails = (vet) => {
    setSelectedVet(vet);
    setShowDetails(true);
  };

  const handleBooking = (vet) => {
    setSelectedVet(vet);
    setShowBooking(true);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p>Loading hospitals...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="text-danger">{error}</p>
      </div>
    );
  }

  return (
    <div
      className="app-wrapper d-flex justify-content-center align-items-start"
      style={{
        backgroundColor: "#E5E1EE",
        padding: "1rem",
        paddingTop: "1rem",
        minHeight: "100vh",
      }}
    >
      <div
        className="rounded-4 shadow d-flex flex-column"
        style={{
          width: "95%",
          maxWidth: "1100px",
          height: `calc(100vh - 30px - 60px)`,
          boxSizing: "border-box",
          backgroundColor: "#FFFFFF",
        }}
      >
        <header className="d-flex justify-content-start align-items-center p-4">
          <div className="d-flex align-items-center gap-2">
            <FaPaw className="fs-3" style={{ color: "#7472C6" }} />
            <h5 className="fw-bold m-0" style={{ color: "#7472C6" }}>
              Find a Hospital
            </h5>
          </div>
        </header>

        <div
          className="d-flex flex-grow-1 gap-4 p-4 flex-column flex-lg-row overflow-visible overflow-lg-hidden"
          style={{ flex: 1, minHeight: 0 }}
        >
          <div
            className="d-flex flex-column order-2 order-lg-1"
            style={{
              flexBasis: "52%",
              flex: 1,
              minHeight: 0,
              overflowY: "auto",
              minWidth: 300,
              paddingRight: "10px",
            }}
          >
            <h6 className="fw-bold mb-3" style={{ color: "#7472C6" }}>
              Vets Near You
            </h6>
            <div className="d-flex flex-column gap-3">
              {hospitals.map((vet) => (
                <VetCard
                  key={vet.id}
                  vet={vet}
                  onBook={handleBooking}
                  onDetails={handleDetails}
                />
              ))}
            </div>
          </div>

          <div
            className="d-flex flex-column order-1 order-lg-2"
            style={{
              flexBasis: "48%",
              flex: 1,
              minHeight: 0,
              marginBottom: "1rem",
            }}
          >
            <div
              className="card border-0 shadow-sm rounded-4 overflow-hidden flex-grow-1 h-100"
              style={{ minHeight: 0 }}
            >
              <Suspense fallback={
                <div className="d-flex justify-content-center align-items-center h-100">
                  <p style={{ color: "#7472C6" }}>Loading map...</p>
                </div>
              }>
                <MapView vets={hospitals} />
              </Suspense>
            </div>
          </div>
        </div>

        {showDetails && (
          <DetailsModal
            vet={selectedVet}
            onClose={() => setShowDetails(false)}
          />
        )}
        {showBooking && (
          <BookingModal
            vet={selectedVet}
            onClose={() => setShowBooking(false)}
            onBook={async (timeSlot) => {
              // ✅ Implement real booking here
              try {
                const token = localStorage.getItem('token');
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                const appointmentData = {
                  petId: "YOUR_PET_ID", // ← Get from context or profile
                  hospitalId: selectedVet.id,
                  doctorId: "SOME_DOCTOR_ID", // ← You need to select a doctor first!
                  appointmentDate: tomorrow.toISOString().split('T')[0],
                  timeSlot,
                  reason: "General checkup",
                  symptoms: ""
                };
                await hospitalAPI.bookAppointment(appointmentData, token);
                alert("Appointment booked!");
                setShowBooking(false);
              } catch (err) {
                alert("Booking failed: " + err.message);
              }
            }}
          />
        )}
      </div>
    </div>
  );
}

export default HospitalsPage;