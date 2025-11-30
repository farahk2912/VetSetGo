import React from 'react'

const Form = () => {
  return (
    <div
      className='mt-5 rounded-4 d-flex flex-column align-items-center form-container'
      style={{
        background: "linear-gradient(180deg, #D4C4EB 0%, #E6D9F3 50%, #F4EFFB 100%)",
        width: "40em",
        margin: "auto",
        padding: "20px"
      }}
    >
      <h2 className='pt-5' style={{ color: "#8453b4ff" }}>Pet Profile Form</h2>
      <h5 style={{ color: "#9a55e3ff" }}>We’d love to get to know your furry family member.</h5>

      <input
        type="text"
        placeholder="Pet's name"
        className='rounded-3 border-0 p-2 mt-4 form-input'
        style={{ width: "25em", outline: "none" }}
      />

      <input
        type="text"
        placeholder='Pet Type'
        className='rounded-3 border-0 p-2 mt-2 form-input'
        style={{ width: "25em", outline: "none" }}
      />

      <input
        type="text"
        placeholder='Breed'
        className='rounded-3 border-0 p-2 mt-2 form-input'
        style={{ width: "25em", outline: "none" }}
      />

      <div className='d-flex mt-2 gap-3 flex-wrap justify-content-center'>
        <input
          type="number"
          placeholder="Pet's age"
          className='rounded-3 border-0 p-2 form-input'
          min="0"
          style={{ width: "12em", outline: "none" }}
        />

        <select
          className='p-1 p-2 border-0 rounded-3 form-input'
          style={{ width: "12em", outline: "none", color: "#84828C" }}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button
        className='rounded-3 border-0 mt-4 text-light p-2 form-input'
        style={{ width: "25em", background: "#7544A6", marginBottom: "4em" }}
      >
        Share My Pet
      </button>

      <style>
        {`
          @media (max-width: 920px) {
            .form-container {
              width: 95% !important;
              min-height: 55vh !important;
              border-radius: 2em !important;
              margin: 3em auto !important;
              padding: 20px !important;
            }

           
            .form-container .form-input {
              width: 20em !important;
              max-width: 90%;
            }

            .form-container .d-flex.flex-wrap {
              flex-direction: column !important;
              gap: 1em !important;
              align-items: center;
            }
          }

           @media (max-width: 370px) {
      .form-container {
        padding: 15px !important;
      }

      .form-container .form-input {
        width: 95% !important;  
      }

      .form-container h2 {
        font-size: 1.4rem !important;
      }

      .form-container h5 {
        font-size: 1rem !important;
      }

      .form-container button {
        font-size: 0.9rem !important;
      }
        `}
      
      </style>
    </div>
  )
}

export default Form




