import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";
import { FaPaw } from "react-icons/fa";
import "./HospitalPage.css";
import { hospitalAPI } from "../services/hospitalAPI";
import MapView from "../Components/MapView";
import { BookingModal, DetailsModal } from "../Components/Modals";
import VetCard from "../Components/VetCard";

const ModalPortal = ({ children }) => {
    return ReactDOM.createPortal(children, document.body);
};

function HospitalsPage() {
    const [hospitals, setHospitals] = useState([]);
    const [userLocation, setUserLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
    const [selectedVet, setSelectedVet] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation([
                        position.coords.latitude,
                        position.coords.longitude,
                    ]);
                },
                (err) => console.error("Geo error:", err)
            );
        }
    }, []);

    useEffect(() => {
        const loadHospitals = async () => {
            try {
                const data = await hospitalAPI.getHospitals();
                 console.log("Raw hospital data:", data); // 👈 ADD THIS
            console.log("First hospital image:", data[0]?.image); // 👈 ADD THIS
                const mapped = data.map((hospital) => ({
  id: hospital._id,
  name: hospital.name,
  address: hospital.address,
  rating: hospital.rating || 0,
  isOpen: true,
  hours: "See details",
  image: hospital.image || "https://via.placeholder.com/500x300?text=Hospital",
  phone: hospital.phone,
  email: hospital.email,
  lat: hospital.location?.lat || 30.0444,
  lng: hospital.location?.lng || 31.2357,
  specialties: hospital.specialties,
  description: hospital.description,
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

    if (loading)
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <p>Loading hospitals...</p>
            </div>
        );
    if (error)
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <p className="text-danger">{error}</p>
            </div>
        );

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
                        <h5
                            className="fw-bold m-0"
                            style={{ color: "#7472C6" }}
                        >
                            Find a Hospital
                        </h5>
                    </div>
                </header>

                <div className="layout-container">
                    <div className="cards-section">
                        <h6
                            className="fw-bold mb-3 ms-1"
                            style={{ color: "#7472C6" }}
                        >
                            Vets Near You
                        </h6>
                        {hospitals.map((vet) => (
                            <VetCard
                                key={vet.id}
                                vet={vet}
                                onBook={handleBooking}
                                onDetails={handleDetails}
                            />
                        ))}
                    </div>

                    <div className="map-section">
                        <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 w-100">
                            <Suspense fallback={<div>Loading map...</div>}>
                                <MapView
                                    vets={hospitals}
                                    userLocation={userLocation}
                                />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>

            {showDetails && (
                <ModalPortal>
                    <DetailsModal
                        vet={selectedVet}
                        onClose={() => setShowDetails(false)}
                    />
                </ModalPortal>
            )}
            {showBooking && (
                <ModalPortal>
                    <BookingModal
                        vet={selectedVet}
                        onClose={() => setShowBooking(false)}
                        onBook={async (timeSlot) => {
                            try {
                                const token = localStorage.getItem("token");
                                const tomorrow = new Date();
                                tomorrow.setDate(tomorrow.getDate() + 1);
                                const appointmentData = {
                                    petId: "YOUR_PET_ID",
                                    hospitalId: selectedVet.id,
                                    doctorId: "SOME_DOCTOR_ID",
                                    appointmentDate: tomorrow
                                        .toISOString()
                                        .split("T")[0],
                                    timeSlot,
                                    reason: "General checkup",
                                    symptoms: "",
                                };
                                await hospitalAPI.bookAppointment(
                                    appointmentData,
                                    token
                                );
                                alert("Appointment booked!");
                                setShowBooking(false);
                            } catch (err) {
                                alert("Booking failed: " + err.message);
                            }
                        }}
                    />
                </ModalPortal>
            )}
        </div>
    );
}

export default HospitalsPage;
