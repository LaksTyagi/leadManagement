import React from 'react';
import Logo from '../assets/images/yog.jpeg'
import { Link } from 'react-router-dom'

const Recoverpassword = () => {
    return (
        <div className="container d-flex flex-column align-items-center p-5 mt-5 shadow">
        <div className="card w-50 border">
            <div style={{backgroundColor:'#626ed4',color:'white'}} className="border d-flex flex-column align-items-center p-4">
                 <h3>Reset Password</h3>
            </div>
            <div style={{placeSelf: 'center'}}>
                <img style={{height: '70px',width: '70px',position:'absolute',top:'55px',left:'190px',borderRadius:'35px'}} src={Logo} alt="image"/>
            </div>   
            <div className="d-flex flex-column align-items-center p-5">
            <p>Enter your Email and instructions will be sent to you!</p>
            <input type="email" className="form-control mt-3 mb-3" placeholder="Enter Email"/>
            <Link to="/"><button class="btn btn-primary me-md-2 mb-3" type="button" >Submit</button>
                       </Link> </div> 
        </div>
    </div>
    );
}

export default Recoverpassword;
