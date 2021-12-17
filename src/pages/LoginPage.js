import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/images/yog.jpeg'

const Loginpage = () => {
    return (
        <>
            <div className="container d-flex flex-column align-items-center p-5 mt-5 shadow">
                <div className="card w-50 border">
                    <div style={{ backgroundColor: '#626ed4', color: 'white' }} className="border d-flex flex-column align-items-center p-4">
                        <h3>Welcome Back!</h3>
                        <p>Sign in to continue to Site</p>
                    </div>
                    <div style={{ placeSelf: 'center' }}>
                        <img style={{ height: '70px', width: '70px', position: 'absolute', top: '90px', left: '190px', borderRadius: '35px' }} src={Logo} alt="image" />
                    </div>
                    <div className="d-flex flex-column align-items-center p-5">
                        <input type="email" className="form-control mt-3 mb-3" placeholder="Enter Email" />
                        <input type="password" className="form-control mb-3" placeholder="Enter Password" />
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="btn btn-primary me-md-2 mb-3" type="button">Register</button>
                        </div>
                        <Link to="/forgotPassword">
                        Forgot your password?
                        </Link>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center">
                <p>Already have an account ?
                    <Link to="/register">Login</Link> </p>
                <p>© 2021. Crafted with  by Themesbrand</p>
            </div>
        </>
    );
}

export default Loginpage;
