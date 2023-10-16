import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
    const [action,setAction]= useState("Login")
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            
            
        <div className="inputs">
            {action ==="Login"?<div></div>:<div className="input">
            
            <input type='text' placeholder='Name'/>  
          </div>}
            
            <div className="input">
              <input type='email' placeholder='Email'/>  
            </div>
            <div className="input">
              <input type='password' placeholder='Password'/>  
            </div>
        </div> </div>
        {action==="Sign Up"?<div></div>:<div className="forget-pass">Forget Password? <span>Click here!</span></div>}
        
        <div className="submit-container">
        <div className={action==="Login"?"Submit gray":"Submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"Submit gray":"Submit"} onClick={()=>{setAction("Login")}}>Login</div>
       
       

      
    </div>
    </div>
  );
}

export default LoginSignup
