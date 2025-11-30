import React from 'react'
import Form from './Form'
const PetsForm = () => {
  return (
    <div className='w-100 min-vh-100' style={{background: 'url("./petsFormPhoto.png")',backgroundSize: "100% 100%",backgroundRepeat: "no-repeat"}}>

      <div className='d-flex pt-4 ps-4'>
        <h2>Vet</h2>
        <h2 style={{ color: "#7544A6" }}>SetGo</h2>
      </div>

      <div className='d-flex flex-col justify-content-center'>
        
<Form/>

      </div>

      <style>
        {`
          @media (max-width: 920px) {
            .mt-5.rounded-4 {
              width: 95% !important;
              max-width: 95%;
              margin: auto;
              border-radius: 2em !important;
            }

            div.w-100.min-vh-100 {
              background-size: cover !important;
            }

            .d-flex.flex-col.justify-content-center {
              flex-direction: column !important;
              align-items: center !important;
            }

            .mt-5.rounded-4 h2,
            .mt-5.rounded-4 h5,
            .mt-5.rounded-4 p {
              text-align: center !important;
            }
          }
        `}
      </style>
    </div>
  )
}

export default PetsForm
