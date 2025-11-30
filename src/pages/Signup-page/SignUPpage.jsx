import Left from "./Left";
import Right from "./Right";

const SignUPpage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{background: "linear-gradient(180deg, #B8A2DA 0%, #B49ACE 100%)",minHeight: "100vh",}}>

      <div className="rounded-4 d-flex flex-column flex-md-row"style={{background: "rgba(255,255,255,0.2)",width: "95%",height: "40em",boxShadow: "inset 0 0 0 10px white",padding: "10px",}}>

     <Left/> 

     <Right/>     
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .d-flex.flex-column.flex-md-row > div:last-child {
              border-radius: 2em !important;
              height: auto;
              margin: auto;
            }
          }
        `}
      </style>

    </div>
  );
};

export default SignUPpage;
