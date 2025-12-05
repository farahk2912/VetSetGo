import React from "react";
import "./adoptHome.css";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa"; // Paw icon

function Home() {
    return (
        <div
            className="app-wrapper d-flex justify-content-center align-items-center min-vh-100 w-100"
            style={{
                backgroundColor: "#afaee1ff",
                padding: "1.25rem",
            }}
        >
            <div
                className="bg-white rounded-4 shadow p-4 p-md-5 d-flex flex-column justify-content-start"
                style={{
                    width: "100%",
                    maxWidth: "1100px",
                    boxSizing: "border-box",
                }}
            >
                {/* Header */}
                <header className="d-flex justify-content-between align-items-center mb-4 flex-nowrap">
                    <div className="d-flex align-items-center gap-2">
                        <FaPaw className="fs-3 Pawicon" />
                        <h5 className="fw-bold m-0 text-dark">Adopt a Pet</h5>
                    </div>

                    <nav className="d-flex align-items-center gap-3">
                        <Link
                            to="/adopt"
                            className="fw-semibold text-dark small nav-link-custom"
                        >
                            Adopt
                        </Link>
                        <Link
                  to="/Community"
                        className="fw-semibold text-dark small nav-link-custom">
                            Community
                        </Link>
                        <img
                            src="https://previews.123rf.com/images/21aozora/21aozora2402/21aozora240200012/231408867-default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette.jpg"
                            alt="User profile icon"
                            width="2.25rem"
                            height="2.25rem"
                            className="rounded-circle border shadow-sm"
                        />
                    </nav>
                </header>

                {/* Hero Section */}
                <section className="row align-items-center mb-4 g-0">
                    <div className="col-md-6">
                        <h1 className="fw-bold mb-2">Adopt a Pet</h1>
                        <p className="text-secondary fs-5 mb-3">
                            Find your new best friend
                        </p>

                        <Link
                            to="/adopt"
                            className="btn btn-primary-custom px-4 py-2"
                        >
                            View Pets
                        </Link>
                    </div>

                    <div className="col-md-6 text-center">
                        <div
                            className="dog-image-frame"
                            style={{
                                width: "100%",
                                maxWidth: "280px",
                                margin: "0 auto",
                            }}
                        >
                            <img
                                src="https://i.ibb.co/3mPST5bH/transparent-dog.png"
                                alt="Dog illustration"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    objectFit: "contain",
                                }}
                            />
                        </div>
                    </div>
                </section>

                {/* Community & Urgent Section */}
                <section className="row g-3 flex-grow-0">
                    <div className="col-md-6 d-flex flex-column">
                        <h6 className="fw-bold mb-2">Community</h6>
                        <div className="p-3 rounded-4 border shadow-sm flex-grow-1 d-flex flex-column justify-content-between">
                            <p className="mb-3 flex-grow-1 text-muted">
                                “Thanks everyone for the leash training tips! It
                                really helped.”
                            </p>
                            <div className="d-flex align-items-center gap-2 mt-auto">
                                <span className="fw-semibold text-dark">
                                    - Emma Watson
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex flex-column">
                        <h6 className="fw-bold mb-2">Urgent</h6>
                        <div className="p-3 rounded-4 border shadow-sm flex-grow-1 d-flex flex-column justify-content-between">
                            <p className="mb-3 flex-grow-1 text-danger fw-medium">
                                “My cat is not eating. What should I do?”
                            </p>

                             <Link
                            to="/Community"
                            className="btn btn-primary-custom px-4 py-2 align-self-start"
                        >
                          Ask
                        </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
