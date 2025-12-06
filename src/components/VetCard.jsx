import React from "react";
import { FaMapMarkerAlt, FaClock, FaStar } from "react-icons/fa";

const VetCard = ({ vet, onBook, onDetails }) => {
    return (
        <div
            className="card shadow-soft vet-card-hover rounded-4 p-4 h-100"
            style={{ backgroundColor: "#E5E1EE" }}
        >
            <div className="d-flex gap-3">
                <img
                    src={vet.image}
                    alt={vet.name}
                    className="rounded-4"
                    style={{
                        width: "5.5rem",
                        height: "5.5rem",
                        objectFit: "cover",
                    }}
                />
                <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                        <h6
                            className="fw-bold mb-1"
                            style={{ fontSize: "1rem", color: "#7472C6" }}
                        >
                            {vet.name}
                        </h6>
                        <span
                            className={`badge rounded-pill ${
                                vet.isOpen
                                    ? "bg-success-subtle text-success"
                                    : "bg-danger-subtle text-danger"
                            }`}
                            style={{ fontSize: "0.75rem" }}
                        >
                            {vet.isOpen ? "Open" : "Closed"}
                        </span>
                    </div>

                    <p
                        className="small mb-1 d-flex align-items-center gap-2"
                        style={{ color: "#7472C6" }}
                    >
                        <FaMapMarkerAlt /> {vet.address}
                    </p>

                    <div
                        className="d-flex align-items-center gap-2 small mt-2"
                        style={{ color: "#7472C6" }}
                    >
                        <FaStar /> <b>{vet.rating}</b>{" "}
                        <span
                            style={{ fontWeight: "normal", color: "#7472C6" }}
                        >
                            (120 reviews)
                        </span>
                    </div>
                </div>
            </div>

            <div className="d-flex gap-3 mt-4">
                <button
                    onClick={() => onDetails(vet)}
                    className="btn w-100 rounded-pill fw-semibold py-2"
                    style={{
                        backgroundColor: "#7472C6",
                        color: "#fff",
                        border: "none",
                    }}
                >
                    View Details
                </button>
                <button
                    onClick={() => onBook(vet)}
                    className="btn w-100 rounded-pill fw-semibold py-2"
                    style={{
                        backgroundColor: "#7472C6",
                        color: "#fff",
                        border: "none",
                    }}
                >
                    Book Appointment
                </button>
            </div>
        </div>
    );
};

export default VetCard;
