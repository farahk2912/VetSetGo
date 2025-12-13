import React from 'react'
import LeftPart from './LeftPart'
import RightPart from './RightPart'

const LogInpage = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center'style={{background: "linear-gradient(180deg, #B8A2DA 0%, #B49ACE 100%)",minHeight: "100vh"}}>
      <div className='rounded-4 d-flex flex-column flex-md-row'style={{background: "rgba(255,255,255,0.2)",width: "90%",height: "40em", boxShadow: "inset 0 0 0 10px white",padding: "10px"}}>
       
<LeftPart/>
<RightPart/>
        
      </div>
<style>
  {`
    @media (max-width: 920px) {
      .d-md-block {
        display: none !important;
      }

      .w-50 {
        width: 95% !important; 
        max-width: 95%;
        height: auto !important; 
        min-height: 55vh !important; 
        margin: 2em auto !important; 
        border-radius: 2em !important; 
        padding-top: 2em;  
        padding-bottom: 2em;
      }

      .d-flex.flex-column.flex-md-row {
        flex-direction: column !important;
        height: auto !important;
        padding: 20px 10px;
      }
    }
  `}
</style>

     
    </div>
  )
}

export default LogInpage
