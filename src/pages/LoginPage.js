import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/images/yog.jpeg'

const Loginpage = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')

    const handleSubmit=()=>{
        
    }

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
                        <input type="email" className="form-control mt-3 mb-3" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" className="form-control mb-3" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <Link to="/dashboard"><button class="btn btn-primary me-md-2 mb-3" type="button" onClick={()=>handleSubmit()}>Login</button>
                       </Link> 
                             </div>
                        <Link to="/forgotPassword">
                        Forgot your password?
                        </Link>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center">
                <p>Don't have an account ?
                    <Link to="/register">Register</Link> </p>
               
            </div>
        </>
    );
}

export default Loginpage;
