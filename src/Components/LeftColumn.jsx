
import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import "../index.css"
const LeftColumn = () => {
  return (
    <div className='d-flex flex-column gap-3'>

      <div className='bg-light rounded-4 d-flex align-items-center p-4' style={{minHeight: "10em"}}>
        <div className='flex-shrink-0' style={{width: "5em", height: "5em", borderRadius: "50%", backgroundImage: "url('/images/dog1.jpeg')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
        <div className='ms-3'>
          <p className='fs-4 fw-medium m-0' style={{color: "#7472C6"}}>Milo</p>
          <p className='m-0 text-secondary'>
            Orange tabby , <br />
            Female , 2 years
          </p>
        </div>
      </div>

      <div className='bg-light rounded-4 d-flex flex-column p-3' style={{minHeight: "20em"}}>

        <div className='d-flex justify-content-between align-items-center mb-2'>
          <p className='fs-5 fw-medium m-0' style={{color: "#7472C6"}}>Tips & Tricks</p>
          <MdKeyboardArrowDown className='fs-5' style={{color: "#7472C6"}} />
        </div>

        <div className='mb-2' style={{width: "100%", height: "0.15em", background: "#7472C6"}}></div>

        <div className='text-secondary'>
          <p>Brush long-hair pets daily to prevent matting.</p>
          <p>Trim nails regularly; long nails cause pain.</p>
          <p>Bathe your pet every 2-4 weeks depending on coat type.</p>
          <p>Watch for early signs of allergies: itching, sneezing, or red skin.</p>
        </div>

      </div>

    </div>
  );
};

export default LeftColumn;
