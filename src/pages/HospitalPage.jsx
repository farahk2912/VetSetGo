import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";
import MapView from "../components/MapView";
import VetCard from "../Components/VetCard";
import { BookingModal, DetailsModal } from "../components/Modals";
import { mockVets } from "../data/mockVets";
import "./HospitalPage.css";

function HospitalsPage() {
    const [showDetails, setShowDetails] = useState(false);
    const [showBooking, setShowBooking] = useState(false);
    const [selectedVet, setSelectedVet] = useState(null);

    const handleDetails = (vet) => {
        setSelectedVet(vet);
        setShowDetails(true);
    };

    const handleBooking = (vet) => {
        setSelectedVet(vet);
        setShowBooking(true);
    };

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

                <div
                    className="d-flex flex-grow-1 gap-4 p-4 flex-column flex-lg-row overflow-visible overflow-lg-hidden"
                    style={{
                        flex: 1,
                        minHeight: 0,
                    }}
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
                        <h6
                            className="fw-bold mb-3"
                            style={{ color: "#7472C6" }}
                        >
                            Vets Near You
                        </h6>
                        <div className="d-flex flex-column gap-3">
                            {mockVets.map((vet) => (
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
                            <MapView vets={mockVets} />
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
                    />
                )}
            </div>
        </div>
    );
}

export default HospitalsPage;
