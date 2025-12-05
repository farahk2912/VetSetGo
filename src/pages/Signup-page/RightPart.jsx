

const RightPart = () => {
  return (

   <div className="w-50 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "rgba(255,255,255,0.7)",borderTopLeftRadius: "5em" , borderBottomLeftRadius: "5em" , borderTopRightRadius: "0.5em", borderBottomRightRadius: "0.5em" , overflow: "hidden" , color: "#7544A6"}}>

<h2>Create Your Account</h2>

<input className="rounded-4  mt-4 mb-2 p-2 " type="text" placeholder="Full Name"  style={{outline: "none" , border: "none" , width: "58%"}}/>

<input className="rounded-4  p-2 mb-2" type="email" placeholder="Email Address" style={{outline: "none" , border: "none", width: "58%"}} />

<input className="rounded-4  p-2 mb-3" type="Password" placeholder="Password" style={{outline: "none" , border: "none", width: "58%"}} />


<div className="d-flex">

<button className="me-3 p-2 rounded-4 text-body-secondary fw-bold  " style={{outline: "none" , border: "none" , width: "12em" , backgroundColor: "white"}}><FcGoogle  className="fs-3"/>
oogle</button>

<button className="rounded-4 p-2 text-white fw-bold " style={{outline: "none" , border: "none", backgroundColor: "#4267B2" , width: "12em"}}><MdFacebook className="fs-3"/>
 acebook </button>

</div> 2 buttons

<div className="d-flex gap-2 mt-4">

<p className="fs-5 text-body-secondary">Already have an account?</p>

<a className="rounded-3  fs-5 fw-bold" href="" style={{ color: "#7544A6" , textDecoration: "none" , cursor: "pointer"}}>Log In</a>

</div>

<button className="p-2  text-light rounded-4 fs-5 text" style={{backgroundColor: "#7544A6" , outline: "none" , border: "none" ,width: "45%"}}>Join Us</button>

</div>

  )
}

export default RightPart;