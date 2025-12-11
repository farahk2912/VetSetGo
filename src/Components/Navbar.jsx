// Navbar.jsx - Safe with optional chaining
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { usePet } from "./petContext"; // ✅ Now safe because PetProvider wraps App
import { authAPI } from "../services/api";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pet } = usePet(); // pet may be null → handle safely!
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = authAPI.isAuthenticated();
      setIsAuthenticated(authenticated);
      if (authenticated) {
        const currentUser = authAPI.getCurrentUser();
        setUser(currentUser);
      }
    };

    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    authAPI.logout();
    setIsAuthenticated(false);
    setUser(null);
    navigate('/login');
  };

  // Safe fallbacks
  const displayName = pet?.name || user?.name || 'User';
  const avatarImg = pet?.img || '/images/default-avatar.png';

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
          <Link to="/Community" className='pt-2 fs-4 fw-medium nav-link-custom'>Community</Link>
          <Link to="/adopt-home" className='pt-2 fs-4 fw-medium nav-link-custom'>Adopt Me</Link>
          <Link to="/Vets" className='pt-2 fs-4 fw-medium nav-link-custom'>Vets</Link>
          
          {!isAuthenticated && (
            <>
              <Link to="/login" className='pt-2 fs-4 fw-medium nav-link-custom'>Login</Link>
              <Link to="/signup" className='pt-2 fs-4 fw-medium nav-link-custom'>Sign Up</Link>
            </>
          )}
        </div>

        {/* User info - ONLY show when authenticated */}
        {isAuthenticated && (
          <div className='d-none d-lg-flex ms-auto me-5 pt-2 align-items-center'>
            <p className='text-secondary pt-2 fs-4 fw-medium m-0'>Hi,</p>

            <Link to="/profile" className='pt-4 fs-4 fw-medium ms-1'
              style={{ color: "#7472C6", textDecoration: "none" }}>
              {displayName}
            </Link>

            <div
              onClick={() => navigate("/profile")}
              className='pt-1 ms-1'
              style={{
                width: "3em",
                height: "3em",
                borderRadius: "50%",
                backgroundImage: `url(${avatarImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer"
              }}
            ></div>

            <button 
              onClick={handleLogout}
              className='btn btn-sm btn-outline-danger ms-3'
              style={{ borderRadius: '20px' }}
            >
              Logout
            </button>
          </div>
        )}

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
            <Link to="/" className='fs-4 fw-medium nav-link-custom'>Home</Link>
            <Link to="/Community" className='fs-4 fw-medium nav-link-custom'>Community</Link>
            <Link to="/adopt-home" className='fs-4 fw-medium nav-link-custom'>Adopt Me</Link>
            <Link to="/Vets" className='fs-4 fw-medium nav-link-custom'>Vets</Link>
            
            {!isAuthenticated ? (
              <>
                <Link to="/login" className='pt-2 fs-4 fw-medium nav-link-custom'>Login</Link>
                <Link to="/signup" className='pt-2 fs-4 fw-medium nav-link-custom'>Sign Up</Link>
              </>
            ) : (
              <>
                <div className='d-flex align-items-center gap-2 mt-2'>
                  <p className='text-secondary fs-4 m-0'>Hi,</p>
                  <Link to="/profile" className='fs-4 m-0'
                    style={{ color: "#7472C6", textDecoration: "none" }}>
                    {displayName}
                  </Link>

                  <div
                    onClick={() => navigate("/profile")}
                    className='rounded-circle'
                    style={{
                      width: "3em",
                      height: "3em",
                      backgroundImage: `url(${avatarImg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      cursor: "pointer"
                    }}
                  ></div>
                </div>

                <button 
                  onClick={handleLogout}
                  className='btn btn-sm btn-outline-danger mt-2'
                  style={{ borderRadius: '20px' }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;