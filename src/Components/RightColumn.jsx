
import React from 'react';
import '../index.css'
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

const RightColumn = () => {
  const navigate = useNavigate();

  const handleAdoptClick = () => {
    navigate("/adopt-home");
  };

  return (
    <div className="d-flex flex-column gap-3 w-100">

      <div className="bg-light rounded-4 border border-primary w-100" style={{minHeight: "16rem"}}>
        <div className="rounded-3 d-flex gap-1 justify-content-center align-items-center text-light w-100" style={{height: "4rem", background: "#7472C6"}}>
          <HiOutlineCalendarDateRange className="fs-3" />
          <p className="m-0 fs-4">Upcoming Events</p>
        </div>

        <div className="d-flex flex-column gap-2 p-2 ms-5">
          <div className="d-flex flex-wrap align-items-center text-warning gap-2">
            <div className="text-center">
              <p className="m-0 fw-bold">23</p>
              <p className="m-0">Dec</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div style={{width: "2px", height: "2rem", background: "#FF8D28"}}></div>
              <p className="m-0 fw-bold">Pet Health Workshop</p>
            </div>
          </div>

          <div className="d-flex flex-wrap align-items-center text-info gap-2">
            <div className="text-center">
              <p className="m-0 fw-bold">10</p>
              <p className="m-0">Jan</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div style={{width: "2px", height: "2rem", background: "#00C3D0"}}></div>
              <p className="m-0 fw-bold">Pet Adoption Day</p>
            </div>
          </div>

          <div className="d-flex flex-wrap align-items-center text-danger gap-2">
            <div className="text-center">
              <p className="m-0 fw-bold">20</p>
              <p className="m-0">Jan</p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <div style={{width: "2px", height: "2rem", background: "#FF2D55"}}></div>
              <p className="m-0 fw-bold">Pet Health Workshop</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-4 w-100 position-relative" style={{minHeight: "22rem", background: 'url("adoptionBoxPhoto.png")', backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
        <div className="d-flex flex-column h-100 justify-content-between p-3">

          <div className="d-flex justify-content-between align-items-center">
            <p className="fw-bold fs-5 text-light m-0">Adoption Corner</p>
            <p className="text-light" style={{textDecoration: "none"}}>View All</p>
          </div>

          <div className="d-flex justify-content-center align-items-end gap-3 flex-wrap">
            <div className="rounded-circle" style={{width: "4rem", height: "4rem", backgroundImage: 'url("/images/Adopt2.jpg")', backgroundSize: "cover", opacity: 0.6}}></div>
            <div className="rounded-circle" style={{width: "8rem", height: "8rem", backgroundImage: 'url("/images/Adobt1.jpeg")', backgroundSize: "cover"}}></div>
            <div className="rounded-circle" style={{width: "4rem", height: "4rem", backgroundImage: 'url("/images/Adopt3.jpeg")', backgroundSize: "cover", opacity: 0.6}}></div>
          </div>

          <div className="text-center text-light">
            <p className="fs-2 m-0">Cleo</p>
            <div className="d-flex justify-content-center gap-3">
              <p className="m-0">Cargo</p>
              <p className="m-0">3 months</p>
            </div>
            <button 
              className="btn bg-light rounded-4 mt-2 w-50 fs-5" 
              style={{color: "#7472C6"}}
              onClick={handleAdoptClick} 
            >
              Adopt me
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}

export default RightColumn;
