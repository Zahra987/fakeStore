import React, { useRef } from 'react'
import {FaUser} from 'react-icons/fa'
import {TbPassword} from 'react-icons/tb'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Login({changeFunction}) {
  const confirmpassRef=useRef();
  const emailRef=useRef();

  const formik = useFormik({
    initialValues:{
      fusername: '',
      fpassword: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      fusername: Yup.string().max(15, 'must be 15 characters or less').min(3, 'must be atleast 3 characters').required('required'),
      fpassword: Yup.string().min(8, 'password must have at least 8 characters!').required('required'),
         })
  })

  return (
    <div className="login-container">
      <div className="form-box">
        <h1 id="title">sign in</h1>
        <form action="#" name="myForm" onSubmit={formik.handleSubmit} noValidate>
          <div className="input-group">
            <div className="input-field" id="username">
              <div className="input">
                <FaUser className='form-icon'/>
                <input  type="text" placeholder="username" {...formik.getFieldProps('fusername')} />
              </div>
              <div className='err-msg-box'>
                {formik.touched.fusername && formik.errors.fusername ? (<div>{formik.errors.fusername}</div>) : null } 
              </div>
            </div>

            <div className="input-field" id="password">
              <div className='input'>
                <TbPassword/>
                <input type="password" placeholder="password" {...formik.getFieldProps('fpassword')} />
              </div>
              <div className='err-msg-box'>
               {formik.touched.fpassword && formik.errors.fpassword ? (<div>{formik.errors.fpassword}</div>) : null }
              </div>
            </div>

            <p>you have an account? <a id="signin" href="#" onClick={changeFunction}>sign up</a></p>
          </div>
          <div className="btn-field">
            <button id="btn" type="submit" >sign in</button>
          </div>
        </form>
      </div>
  </div>
  )
}
