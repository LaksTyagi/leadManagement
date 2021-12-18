import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/yog.jpeg";
import {useDispatch} from "react-redux"
import {handleRegisterData} from "../store/actions"

const Registerpage = () => {
    const dispatch = useDispatch()
  const [userName, setUserName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit =()=>{
      const body={userName,password,email}
      dispatch(handleRegisterData(body))

  }
  return (
    <>
      <div className="container d-flex flex-column align-items-center p-3 mt-5 shadow">
        <div className="card w-50 border">
          <div
            style={{ backgroundColor: "#626ed4", color: "white" }}
            className="border d-flex flex-column align-items-center p-4"
          >
            <h3>Free Register</h3>
            <p>Get your free account now.</p>
          </div>
          <div style={{ placeSelf: "center" }}>
            <img
              style={{
                height: "70px",
                width: "70px",
                position: "absolute",
                top: "90px",
                left: "190px",
                borderRadius: "35px",
              }}
              src={Logo}
              alt="image"
            />
          </div>
          <div className="d-flex flex-column align-items-center p-5">
            <input
              type="text"
              className="form-control mt-3 mb-3"
              placeholder="Enter Name"
              onChange={(e)=>setUserName(e.target.value)}
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter Email"
              onChange={(e)=>setEmail(e.target.value)}

            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Enter Password"
              onChange={(e)=>setPassword(e.target.value)}

            />
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <Link to="/login"> <button class="btn btn-primary me-md-2 mb-3" type="button" onClick={()=>handleSubmit()}>
                Register
              </button></Link>
             
            </div>
            <p>By registering you agree to the Terms of Use</p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <p>
          Already have an account ?<Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </>
  );
};

export default Registerpage;
