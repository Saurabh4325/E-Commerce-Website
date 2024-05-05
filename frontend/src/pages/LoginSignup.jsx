import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup_container">
          <h1>Sign Up</h1>
          <div className="loginSignup_fields">
            <input type="text" name="" placeholder='Your name' id="" />
            <input type="email" name="email address" placeholder='Email Address' id="" />
            <input type="password" name="password" placeholder='password' id="" />
          </div>
          <button>Continue</button>
          <p className='loginsignup_login'>
            Already have an account? <span>login here</span>
          </p>
          <div className="loginsignup_agree">
            <input type="checkbox" name="" id="" />
            <p>By continue, i agree to the terms of the use & privacy policy.</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup
