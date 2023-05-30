import React from 'react'
import './login.css'
import {FaUser} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {TbPassword} from 'react-icons/tb'
export default function Login() {
  return (
    <div className="login-container">
      <div className="form-box">
        <h1 id="title">sign up</h1>
        <form action="#" name="myForm" noValidate>
          <div className="input-group">
            <div className="input-field" id="username">
              <div className="input">
                <FaUser className='form-icon'/>
                <input  type="text" name="fusername" placeholder="username" />
              </div>
              <div className='err-msg-box'><div>at least 3 characters!</div></div>
            </div>

            <div className="input-field" id="email">
              <div className="input">
                <MdEmail/>
                <input  type="text" name="femail" placeholder="someone@gmail.com" />
              </div>
              <div className='err-msg-box'><div>The email entered is not valid!</div></div>
            </div>

            <div className="input-field" id="password">
              <div className='input'>
                <TbPassword/>
                <input type="password" name="fpassword" placeholder="password" />
              </div>
              <div className='err-msg-box'><div>password must have at least 8 characters!</div></div>
            </div>

            <div className="input-field" id="confirmpass">
              <div className='input'>
                <TbPassword/>
                <input  type="password" name="fconfirmpass" placeholder="confirmpassword" />
              </div>
              <div className='err-msg-box'><div>The entered passwords do not match!</div></div>
            </div>
            <p>you have an account? <a id="signin" href="#">sign in</a></p>
          </div>
          <div className="btn-field">
            <button id="btn" type="submit" >sign up</button>
          </div>
        </form>
      </div>
  </div>
  )
}
