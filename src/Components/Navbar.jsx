import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>

      {/* Main navbar row */}
      <div className='d-flex flex-wrap align-items-center pt-3 px-3' style={{ paddingLeft: "1.9em" }}>

        {/* Logo */}
        <div className='d-flex align-items-center pt-2 ps-4'>
          <h2>Vet</h2>
          <h2 style={{ color: "#7544A6" }}>SetGo</h2>
        </div>

        {/* Links for large screens */}
        <div className='d-none d-lg-flex justify-content-center flex-grow-1 pt-2 gap-5'>
          <Link to="/" className='pt-2 fs-4 fw-medium nav-link-custom'>Home</Link>
          <Link to="" className='pt-2 fs-4 fw-medium nav-link-custom'>Community</Link>
          <Link to="" className='pt-2 fs-4 fw-medium nav-link-custom'>Adopt Me</Link>
          <Link to="" className='pt-2 fs-4 fw-medium nav-link-custom'>Vets</Link>
        </div>

        {/* User info for large screens */}
        <div className='d-none d-lg-flex ms-auto me-5 pt-2 align-items-center'>
          <p className='text-secondary pt-2 fs-4 fw-medium m-0'>Hi,</p>
          <p className='pt-4 fs-4 fw-medium ms-1' style={{ color: "#7472C6" }}>Milo</p>
          <div
            className='pt-1 ms-1'
            style={{
              width: "3em",
              height: "3em",
              borderRadius: "50%",
              backgroundImage: "url('/dog1.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
        </div>

        {/* Hamburger for small screens */}
        <div className='d-lg-none ms-auto'>
          <button onClick={() => setMenuOpen(!menuOpen)} className="btn p-0">
            <GiHamburgerMenu size={28} color="#7472C6" />
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className='d-lg-none py-2'>
          <div className='d-flex flex-column align-items-start px-3 gap-2'>
            <Link to="" className='pt-2 fs-4 fw-medium nav-link-custom'>Home</Link>
            <Link to="" className='pt-2 fs-4 fw-medium nav-link-custom'>Community</Link>
            <Link to="" className='pt-2 fs-4 fw-medium nav-link-custom'>Adopt Me</Link>
            <Link to="" className='pt-2 fs-4 fw-medium nav-link-custom'>Vets</Link>

            <div className='d-flex align-items-center gap-2 mt-2'>
              <p className='text-secondary fs-4 m-0'>Hi,</p>
              <p className='fs-4 m-0' style={{ color: "#7472C6" }}>Milo</p>
              <div
                className='rounded-circle'
                style={{
                  width: "3em",
                  height: "3em",
                  backgroundImage: "url('/dog1.jpeg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Navbar;
