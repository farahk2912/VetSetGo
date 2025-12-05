
const LeftPart = () => {
  return (

 <div className="w-50 d-flex flex-column justify-content-center align-items-center"style={{backgroundColor: "rgba(255,255,255,0.7)",borderTopLeftRadius: "0.5em",borderBottomLeftRadius: "0.5em",borderTopRightRadius: "5em",borderBottomRightRadius: "5em",
overflow: "hidden",color: "#7544A6",width: "25em",height: "100%",padding: "20px",margin: "auto"}}>
          <h2>Welcome Back!</h2>

          <input className="rounded-4 p-2 mb-2 mt-4" type="text" placeholder="Email Address" style={{ outline: "none", border: "none", width: "25em" }}/>

          <input className="rounded-4 p-2 mb-3" type="password" placeholder="Password" style={{ outline: "none", border: "none", width: "25em" }}/>

          <div className="d-flex gap-1" style={{ width: "25em",alignItems: "center",marginTop: "0.5em"}}
          >
            <input type="checkbox" style={{ width: "1em", border: "1.5px solid #7544A6" }} />
            <p className='fs-5 mt-0 mb-0'>Remember Me!</p>
          </div>

          <button className="p-2 text-light rounded-4 fs-5 text mt-3"style={{ backgroundColor: "#7544A6", outline: "none", border: "none", width: "20em" }}
          >
            Log In
          </button>
        </div>

  )
}

export default LeftPart

