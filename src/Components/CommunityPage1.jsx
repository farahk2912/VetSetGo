import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';


const CommunityPage1 = () => {
  return (
    <div className='w-100 min-vh-100 d-flex flex-column' style={{background: "linear-gradient(to bottom, #FBF9FD, #DBCCF5, #AD8FE0)"}}>

   

      <div className='flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center gap-3'>
        <h1 className='fw-bold' style={{color: "#7472C6"}}>
          Discover Stories, Moments, and <br /> Insights from Pet Parents
        </h1>
        <h2 style={{color: "#7472C6"}}>
          Connect with pet lovers, share stories, and get expert advice
        </h2>
        <Link to="/Community2" style={{ textDecoration: "none" }}>
  <button
    className="border-0 rounded-5 p-2 text-light fs-5"
    style={{ outline: "none", background: "#7644A7", width: "12em" }}
  >
    See what's inside
  </button>
</Link>
      </div>

    </div>
  )
}

export default CommunityPage1
