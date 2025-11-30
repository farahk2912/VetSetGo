

import React from 'react';
import '../index.css'


import { SlLocationPin } from "react-icons/sl";
import { CiImageOn } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { CgPoll } from "react-icons/cg";
import { FiSend } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { IoHeartSharp } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";
import { RiShareForwardFill } from "react-icons/ri";
import { BsBookmarkDash } from "react-icons/bs";

const MiddleColumn = () => {
  return (
    <div className="d-flex flex-column gap-3">

      <div className="rounded-4 bg-light p-3 w-100">
        <input 
          type="text" 
          className="form-control rounded-4 mb-2 input" 
          placeholder="What's on your mind?" 
          style={{background: "#E4E1EE", height: "5em"}} 
        />

        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="d-flex flex-wrap gap-3">
            <div className="d-flex align-items-center gap-1 text-primary">
              <SlLocationPin className="fs-5"style={{color: "#7472C6"}} />
              <button className="btn btn-link p-0 m-0" style={{textDecoration: "none" , color: "#7472C6" }}>Location</button>
            </div>
            <div className="d-flex align-items-center gap-1"  style={{textDecoration: "none" , color: "#7472C6" }}>
              <CiImageOn className="fs-4" style={{color: "#7472C6"}}/>
              <button className="btn btn-link p-0 m-0"  style={{textDecoration: "none" , color: "#7472C6" }}>Image</button>
            </div>
            <div className="d-flex align-items-center gap-1" style={{textDecoration: "none" , color: "#7472C6" }}>
              <IoVideocamOutline className="fs-3"style={{color: "#7472C6"}} />
              <button className="btn btn-link p-0 m-0"  style={{textDecoration: "none" , color: "#7472C6" }}>Video</button>
            </div>
            <div className="d-flex align-items-center gap-1"  style={{textDecoration: "none" , color: "#7472C6" }}>
              <CgPoll className="fs-4" style={{color: "#7472C6"}} />
              <button className="btn btn-link p-0 m-0" style={{textDecoration: "none" , color: "#7472C6" }}>Poll</button>
            </div>
          </div>
          <button className="btn text-light" style={{background: "#7472C6"}}>
             Post
          </button>
        </div>
      </div>

    <div className='rounded-4 pt-3 ps-3 bg-light d-flex flex-column w-100' style={{ maxWidth: "50em", height: "auto" }}>

  <div className='d-flex gap-3 justify-content-between'>

    <div className='d-flex gap-3'>

      <div className='mt-2' style={{width: "3em", height: "3em", borderRadius: "50%", backgroundImage: "url('/dog2.jpeg')", backgroundSize: "cover", backgroundPosition: "center", flexShrink: "0"}}></div>

      <div className='d-flex flex-column pt-2'>
        <p className='m-0 fw-medium fs-5' style={{color: "#7472C6"}}>Belly Adams</p>
        <p className='m-0' style={{color: "#8C8BB9"}}>44 min.</p>
      </div>

    </div>

    <HiDotsVertical className='mt-3 me-3 fs-4' style={{color: "#8C8BB9" , fontSize: "1.3em"}} />

  </div>

  <p className='mt-3 m-0 ms-2 fs-5'>Terrfic day!!</p>

  <div className='rounded-4 mt-2 w-100' style={{ aspectRatio: "43/30", maxHeight: "35em", backgroundImage: 'url("communityPost1.jpg")', backgroundSize: "cover", backgroundRepeat: "no-repeat" , marginLeft: "-0.5em"}}></div>

  <div className='d-flex mt-3 ms-2 gap-3 justify-content-between mb-3 flex-wrap'>

    <div className='d-flex gap-3 flex-wrap'>

      <div className='d-flex gap-1'>
        <button className='border-0 bg-transparent p-0' style={{color: "#8C8BB9", outline: "none"}}><IoHeartSharp className='text-danger fs-4' /></button>
        <button className='m-0 fs-6 border-0 bg-transparent p-0' style={{color: "#8C8BB9"}}>44K</button>
      </div>

      <div className='d-flex gap-1'>
        <button className='border-0 bg-transparent p-0' style={{color: "#8C8BB9", outline: "none"}}><FaRegCommentDots  className='fs-4'/></button>
        <button className='m-0 fs-6 border-0 bg-transparent p-0' style={{color: "#8C8BB9"}}>120</button>
      </div>

      <div className='d-flex gap-1'>
        <button className='border-0 bg-transparent p-0' style={{color: "#8C8BB9", outline: "none"}}><RiShareForwardFill className='fs-4'/></button>
        <button className='m-0 fs-6 border-0 bg-transparent p-0' style={{color: "#8C8BB9"}}>236</button>
      </div>

    </div>

    <div className='d-flex gap-1 me-4'>
      <button className='border-0 bg-transparent p-0' style={{color: "#8C8BB9", outline: "none"}}><BsBookmarkDash className='fs-4' /></button>
      <button className='m-0 fs-6 border-0 bg-transparent p-0' style={{color: "#8C8BB9"}}>Save</button>
    </div>

  </div>

</div>


<div className='rounded-4 pt-3 ps-3 bg-light d-flex flex-column ' style={{ maxwidth : "50em" , height: "auto"}}>

<div className='d-flex gap-3 justify-content-between'>

<div className='d-flex gap-3'>

<div className='mt-2' style={{width: "3em", height: "3em", borderRadius: "50%", backgroundImage: "url('/bird1.jpeg')", backgroundSize: "cover", backgroundPosition: "center " , flexShrink: "0"}}></div>

<div className='d-flex flex-column pt-2'>

<p className='m-0 fw-medium fs-5' style={{color: "#7472C6"}}>Dodo Wells</p>

<p className='m-0' style={{color: "#8C8BB9"}}>26 min.</p>

</div>

</div>

<HiDotsVertical className='mt-3 me-3 fs-5' style={{color: "#8C8BB9" , fontSize: "1.3em"}} />

</div>

<p className='mt-3 m-0 ms-2 fs-5'>What a sweet moment!</p>

  <div className='rounded-4 mt-2 w-100' style={{ aspectRatio: "43/30", maxHeight: "35em", backgroundImage: 'url("bird2.jpeg")', backgroundSize: "cover", backgroundRepeat: "no-repeat" , marginLeft: "-0.5em"}}></div>

<div className='d-flex mt-3 ms-2 gap-3 justify-content-between mb-3'>

<div className='d-flex gap-3'>


<div className='d-flex gap-1 '>

<button className='border-0 bg-transparent p-0'style={{color: "#8C8BB9" , outline: "none"}}><IoHeartSharp className='text-danger fs-4' /></button>

<button className='m-0 fs-6 border-0 bg-transparent p-0' style={{color: "#8C8BB9"}}>86K</button>

</div>

<div className='d-flex gap-1' style={{color: "#8C8BB9"}}>

<button className='border-0 bg-transparent p-0'style={{color: "#8C8BB9" , outline: "none"}} ><FaRegCommentDots  className='fs-4'/></button>

<button className='m-0 fs-6  border-0 bg-transparent p-0' style={{color: "#8C8BB9"}}>197</button>

</div>

<div className='d-flex gap-1' style={{color: "#8C8BB9"}}>

<button className='border-0 bg-transparent p-0'>< RiShareForwardFill className='fs-4'style={{color: "#8C8BB9" , outline: "none"}}/></button>

<button className='m-0 fs-6 border-0 bg-transparent p-0' style={{color: "#8C8BB9"}}>140</button>

</div>

</div>

<div className='d-flex me-4 gap-1'>

<button className='border-0 bg-transparent p-0'><BsBookmarkDash className='fs-4'style={{color: "#8C8BB9" , outline: "none"}} /></button>

<button className='m-0 fs-6 border-0 bg-transparent p-0' style={{color: "#8C8BB9"}}>Save</button>

</div>

</div>

</div>

</div>

  );
}

export default MiddleColumn;
