
const LeftPart = () => {
  return (
    <div
      className="w-50 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: "rgba(255,255,255,0.7)",
        borderTopLeftRadius: "0.5em",
        borderBottomLeftRadius: "0.5em",
        borderTopRightRadius: "5em",
        borderBottomRightRadius: "5em",
        overflow: "hidden",
        color: "#7544A6",
        width: "25em",
        height: "100%",
        padding: "20px",
        margin: "auto",
      }}
    >
      <h2>Welcome Back!</h2>

      <input
        className="rounded-4 p-2 mb-2 mt-4"
        type="text"
        placeholder="Email Address"
        style={{ outline: "none", border: "none", width: "25em" }}
      />

      <input
        className="rounded-4 p-2 mb-3"
        type="password"
        placeholder="Password"
        style={{ outline: "none", border: "none", width: "25em" }}
      />

      <div 
        className="d-flex justify-content-start" 
        style={{ width: "25em", marginTop: "0.5em" }}
      >
          <div
            className="d-flex align-items-center checkbox-container"
            style={{
              gap: "0.1em", 
              justifyContent: "flex-start",
            }}
          >
            <input
              type="checkbox"
              style={{ width: "1em", height: "1em", border: "1.5px solid #7544A6" }}
            />
            <span style={{ fontSize: "1rem", margin: 0 }}>Remember Me!</span>
          </div>
      </div>

      <button
        className="p-2 text-light rounded-4 fs-5 mt-3"
        style={{
          backgroundColor: "#7544A6",
          outline: "none",
          border: "none",
          width: "20em",
        }}
      >
        Log In
      </button>

      <style>
        {`
          @media (max-width: 480px) {
            .w-50 {
              width: 90% !important;
              max-width: 90%;
              min-height: 50vh !important;
              margin: 2em auto !important;
              padding: 2em !important;
            }

            input, button {
              width: 100% !important;
            }
            
            .d-flex.justify-content-start {
                width: 100% !important;
            }

            .checkbox-container {
              gap: 0.1em !important; 
              justify-content: flex-start !important; 
            }
          }
        `}
      </style>
    </div>
  );
};

export default LeftPart;
