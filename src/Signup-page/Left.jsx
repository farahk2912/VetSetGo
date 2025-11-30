
  const Left = () => {
  return (
    <div
      className="w-100 w-md-50 d-none d-md-block rounded-3"
      style={{
        background: "url('/signup-photo.png')",
        backgroundSize: "contain",      
        backgroundPosition: "center",    
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%"
      }}
    >
      <div className="d-flex ms-4 mt-4 mb-1">
        <h2>Vet</h2>
        <h2 style={{ color: "#7544A6" }}>SetGo</h2>
      </div>
    </div>
  );
};

export default Left;

