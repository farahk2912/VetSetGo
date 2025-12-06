import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeFirst.css";
import { Link } from "react-router-dom";


export default function HomeFirst() {

const servicesRef = useRef(null);

const scrollToServices = () => {
  servicesRef.current?.scrollIntoView({ behavior: "smooth" });
};


  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: "🏥",
      title: "ALL PET HOSPITALS IN ONE PLACE",
      description:
        "Finding the right care should be simple. VetSetGo brings together trusted veterinary hospitals across the country.",
      link: "/hospitals"
    },
    {
      icon: "🐾",
      title: "ADOPTION MADE EASY",
      description:
        "Looking for a new furry friend? Our adoption center connects you with pets ready for a loving home.",
      link: "/adopt-home"
    },
    {
      icon: "💜",
      title: "A COMMUNITY FOR PET LOVERS",
      description:
        "Share stories, ask questions, and connect with other pet owners.",
      link: "/Community"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="position-relative vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white hero-bg"
        style={{
          backgroundImage: "url('/images/petPhoto.jpg')",
          backgroundSize: "cover",
          backgroundPosition: `center ${-200 + scrollY * 0.3}px`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>

        {/* Hero Content */}
        <div className="position-relative z-1 hero-content-wrapper">
          <h1 className="display-3 fw-bold mb-4 text-shadow">
            Highest Quality Care For Pets <br />
            You'll Love
          </h1>

      <button
        onClick={scrollToServices}
        className="btn btn-lg rounded-pill px-5 fw-semibold text-uppercase gradient-btn"
        style={{ letterSpacing: "1px" }}
      >
        Learn More
      </button>

        </div>
      </section>

      {/* Features Section */}
      <section
  ref={servicesRef}
  className="py-5 position-relative"
  style={{ background: "linear-gradient(180deg, #faf5ff, #f3e8ff)" }}
>

        <div className="decorative-blob blob-1"></div>
        <div className="decorative-blob blob-2"></div>

        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6 text-purple">We created VetSetGo<br />to be different</h2>
            <p className="text-purple-600 mx-auto" style={{ maxWidth: "600px" }}>
              Everything your pet needs in one place — from trusted care to a loving community
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {features.map((feature, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <Link to={feature.link} className="text-decoration-none">
                  <div className="feature-card h-100 text-center clickable-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3 className="fw-bold text-primary mb-3">{feature.title}</h3>
                    <p className="text-muted">{feature.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/signup">
  <button className="btn btn-lg rounded-pill px-5 fw-semibold gradient-btn">
    Create Your Account
  </button>
</Link>

          </div>
        </div>
      </section>

      {/* Last Section: Image + Text */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            {/* Image Column */}
            <div className="col-12 col-md-6 mb-4 mb-md-0 text-center">
              <img
                src="/images/CatsHome.png"
                alt="cats"
                className="img-fluid rounded"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>

            {/* Text Column */}
            <div className="col-12 col-md-6">
              <h1 className="fw-bold" style={{ lineHeight: "1.2" }}>
                <span style={{ color: "#c30bd3ff" }}>Everything Your Pet Needs</span> All in
                <br />
                <span style={{ color: "#b307b3ff" }}>One Place</span>
              </h1>

              <p className="mt-3 text-muted">
                With VetSetGo, finding trusted care becomes effortless. Explore verified veterinary hospitals near you, 
                discover pets waiting for a loving home, and connect with a supportive community of pet owners. Whether 
                you’re searching for emergency care, hoping to adopt, or simply want advice, VetSetGo brings it all together.
              </p>

              <Link to="/adopt-home">
  <button className="btn gradient-btn rounded-pill px-4 mt-3">
    Learn More
  </button>
</Link>

            </div>
          </div>
        </div>
      </section>

      <footer className="bg-purple text-white text-center py-3">
        © {new Date().getFullYear()} VetSetGo. All rights reserved.
      </footer>

    </div>
  );
}
