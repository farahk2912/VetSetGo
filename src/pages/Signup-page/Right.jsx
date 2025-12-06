

import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";

const Right = () => {
  return (
    <div
      className="w-100 w-md-50 d-flex flex-column justify-content-center align-items-center" style={{backgroundColor: "rgba(255,255,255,0.7)",borderRadius: "5em 0.5em 0.5em 5em",padding: "20px",boxSizing: "border-box",}}>
      <h2>Create Your Account</h2>

      <input className="rounded-4 mt-4 mb-2 p-2"type="text" placeholder="Full Name"style={{ outline: "none", border: "none", width: "58%" }}/>

      <input className="rounded-4 p-2 mb-2" type="email" placeholder="Email Address"style={{ outline: "none", border: "none", width: "58%" }}/>

      <input className="rounded-4 p-2 mb-3" type="password" placeholder="Password"style={{ outline: "none", border: "none", width: "58%" }}/>

      <div className="d-flex flex-column flex-md-row w-100 justify-content-center align-items-center">
        <button className="me-md-3 mb-3 mb-md-0 p-2 rounded-4 text-body-secondary fw-bold" style={{outline: "none",border: "none",width: "100%",maxWidth: "12em",backgroundColor: "white",}}>
          <FcGoogle className="fs-3" /> oogle
        </button>

        <button
          className="rounded-4 p-2 text-white fw-bold"style={{outline: "none",border: "none",width: "100%",maxWidth: "12em",backgroundColor: "#4267B2",}}>
          <MdFacebook className="fs-3" /> acebook
        </button>
      </div>

      <div className="d-flex gap-2 mt-4">
        <p className="fs-5 text-body-secondary">Already have an account?</p>
        <a href="/Login" className="rounded-3 fs-5 fw-bold"  style={{ color: "#7544A6", textDecoration: "none", cursor: "pointer" }}>
          Log In
        </a>
      </div>

      <button
        className="p-2 text-light rounded-4 fs-5 text"style={{backgroundColor: "#7544A6",outline: "none",border: "none",width: "45%",}}>
        Join Us
      </button>

      <style>
        {`
          @media (max-width: 767px) {
            div.w-100.w-md-50 {
              width: 95% !important;
              max-width: 95%;
              margin: 0 20px; /* add space from left & right */
              border-radius: 2em !important; /* rounded corners on all sides */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Right;

        