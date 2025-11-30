
// const RightPart = () => {
//   return (

// <div className="w-50 d-none d-md-block" style={{ background: "url('/signup-photo.png')",backgroundSize: "100% 100%",backgroundRepeat: "no-repeat",borderRadius: "0.5em 5em 5em 0.5em"}}>
//           <div className="d-flex justify-content-end me-4 mt-4 mb-1">
//             <h2>Vet</h2>
//             <h2 style={{ color: "#7544A6" }}>SetGo</h2>
//           </div>
//         </div>

//   )
// }

// export default RightPart 

const RightPart = () => {
  return (
    <div
      className="w-50 d-none d-md-block"
      style={{
        background: "url('/images/signup-photo.png')",
        backgroundSize: "contain",        
        backgroundPosition: "center",       
        backgroundRepeat: "no-repeat",
        borderRadius: "0.5em 5em 5em 0.5em",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="d-flex justify-content-end me-4 mt-4 mb-1">
        <h2>Vet</h2>
        <h2 style={{ color: "#7544A6" }}>SetGo</h2>
      </div>
    </div>
  );
};

export default RightPart;


