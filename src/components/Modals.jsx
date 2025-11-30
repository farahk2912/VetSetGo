import React from "react";
import { FaTimes, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";

export const BookingModal = ({ vet, onClose }) => {
    if (!vet) return null;

    const timeSlots = [
        "09:00 AM",
        "10:30 AM",
        "01:00 PM",
        "03:30 PM",
        "05:00 PM",
    ];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content-custom"
                onClick={(e) => e.stopPropagation()}
                style={{ backgroundColor: "#E5E1EE" }}
            >
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h5 className="fw-bold m-0" style={{ color: "#7472C6" }}>
                        Book with {vet.name}
                    </h5>
                    <FaTimes
                        className="cursor-pointer"
                        onClick={onClose}
                        style={{ cursor: "pointer", color: "#7472C6" }}
                    />
                </div>

                <p className="small mb-3" style={{ color: "#7472C6" }}>
                    Select an available time slot for tomorrow:
                </p>

                <div className="row g-2 mb-4">
                    {timeSlots.map((time, index) => (
                        <div key={index} className="col-6">
                            <button
                                className="btn w-100 rounded-3 py-2 text-sm"
                                style={{
                                    backgroundColor: "#7472C6",
                                    borderColor: "#7472C6",
                                    color: "#E5E1EE",
                                }}
                                onClick={() => alert(`Booked ${time}!`)}
                            >
                                {time}
                            </button>
                        </div>
                    ))}
                </div>

                <button
                    className="btn w-100 rounded-pill py-2"
                    style={{
                        backgroundColor: "#7472C6",
                        borderColor: "#7472C6",
                        color: "#E5E1EE",
                    }}
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export const DetailsModal = ({ vet, onClose }) => {
    if (!vet) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content-custom"
                onClick={(e) => e.stopPropagation()}
                style={{ backgroundColor: "#E5E1EE" }}
            >
                <button
                    className="btn-close position-absolute top-0 end-0 m-4"
                    onClick={onClose}
                    style={{ filter: "invert(40%)" }}
                ></button>

                <div className="text-center mb-4">
                    <img
                        src={vet.image}
                        alt={vet.name}
                        className="rounded-circle shadow-sm mb-3"
                        style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                        }}
                    />
                    <h4 className="fw-bold" style={{ color: "#7472C6" }}>
                        {vet.name}
                    </h4>
                    <p style={{ color: "#7472C6" }}>{vet.address}</p>
                </div>

                <div
                    className="p-3 rounded-3 mb-3"
                    style={{ backgroundColor: "#E5E1EE" }}
                >
                    <h6
                        className="fw-bold d-flex align-items-center gap-2"
                        style={{ color: "#7472C6" }}
                    >
                        <FaInfoCircle /> About
                    </h6>
                    <p className="small m-0" style={{ color: "#7472C6" }}>
                        A top-rated veterinary clinic specializing in small
                        animals. Equipped with modern X-ray and lab facilities.
                    </p>
                </div>

                <div className="d-flex justify-content-between border-top pt-3">
                    <span className="fw-bold" style={{ color: "#7472C6" }}>
                        Consultation Fee
                    </span>
                    <span className="fw-bold" style={{ color: "#7472C6" }}>
                        $45.00
                    </span>
                </div>
            </div>
        </div>
    );
};
