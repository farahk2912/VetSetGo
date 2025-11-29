import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div style={{ width: "100%", boxSizing: "border-box" }}>
            <div
                className="d-flex align-items-center px-3"
                style={{
                    height: "60px",
                    padding: "0 1rem",
                    backgroundColor: "#fff",
                }}
            >

                <div className="d-flex align-items-center">
                    <h5 style={{ margin: 0, fontSize: "1rem" }}>Vet</h5>
                    <h5
                        style={{
                            margin: 0,
                            fontSize: "1rem",
                            color: "#7544A6",
                        }}
                    >
                        SetGo
                    </h5>
                </div>

                <div className="d-none d-lg-flex flex-grow-1 justify-content-center gap-3">
                    <Link
                        to="/"
                        style={{
                            fontSize: "0.9rem",
                            color: "#7472C6",
                            textDecoration: "none",
                        }}
                    >
                        Home
                    </Link>
                    <Link
                        to="/"
                        style={{
                            fontSize: "0.9rem",
                            color: "#7472C6",
                            textDecoration: "none",
                        }}
                    >
                        Community
                    </Link>
                    <Link
                        to="/"
                        style={{
                            fontSize: "0.9rem",
                            color: "#7472C6",
                            textDecoration: "none",
                        }}
                    >
                        Adopt Me
                    </Link>
                    <Link
                        to="/"
                        style={{
                            fontSize: "0.9rem",
                            color: "#7472C6",
                            textDecoration: "none",
                        }}
                    >
                        Vets
                    </Link>
                </div>

                <div className="d-none d-lg-flex ms-auto align-items-center gap-2">
                    <p
                        className="m-0"
                        style={{ fontSize: "0.9rem", color: "#6c757d" }}
                    >
                        Hi,
                    </p>
                    <p
                        className="m-0"
                        style={{ fontSize: "0.9rem", color: "#7472C6" }}
                    >
                        Milo
                    </p>
                    <div
                        style={{
                            width: "2rem",
                            height: "2rem",
                            borderRadius: "50%",
                            backgroundImage: "url('/dog1.jpeg')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </div>

                <div className="d-lg-none ms-auto">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="btn p-0"
                    >
                        <GiHamburgerMenu size={20} color="#7472C6" />
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div
                    className="d-lg-none py-2"
                    style={{ backgroundColor: "#fff" }}
                >
                    <div className="d-flex flex-column gap-2 px-3">
                        <Link
                            to="/"
                            style={{
                                fontSize: "0.9rem",
                                color: "#7472C6",
                                textDecoration: "none",
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            to="/"
                            style={{
                                fontSize: "0.9rem",
                                color: "#7472C6",
                                textDecoration: "none",
                            }}
                        >
                            Community
                        </Link>
                        <Link
                            to="/"
                            style={{
                                fontSize: "0.9rem",
                                color: "#7472C6",
                                textDecoration: "none",
                            }}
                        >
                            Adopt Me
                        </Link>
                        <Link
                            to="/"
                            style={{
                                fontSize: "0.9rem",
                                color: "#7472C6",
                                textDecoration: "none",
                            }}
                        >
                            Vets
                        </Link>

                        <div className="d-flex align-items-center gap-2 mt-2">
                            <p
                                className="m-0"
                                style={{ fontSize: "0.9rem", color: "#6c757d" }}
                            >
                                Hi,
                            </p>
                            <p
                                className="m-0"
                                style={{ fontSize: "0.9rem", color: "#7472C6" }}
                            >
                                Milo
                            </p>
                            <div
                                style={{
                                    width: "2rem",
                                    height: "2rem",
                                    borderRadius: "50%",
                                    backgroundImage: "url('/dog1.jpeg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
