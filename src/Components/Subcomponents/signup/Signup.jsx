import React, { useRef } from 'react'
import {FaUser} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {TbPassword} from 'react-icons/tb'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Signup({changeFunction}) {
  const confirmpassRef=useRef();
  const emailRef=useRef();

  const formik = useFormik({
    initialValues:{
      fusername: '',
      femail: '',
      fpassword: '',
      fconfirmpass: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      fusername: Yup.string().max(15, 'must be 15 characters or less').required('required'),
      femail: Yup.string().email('The email entered is not valid!').required('required'),
      fpassword: Yup.string().min(8, 'password must have at least 8 characters!').required('required'),
      fconfirmpass: Yup.string().required('required').oneOf([Yup.ref('fpassword'), null], 'The entered passwords do not match!')
    })
  })

  return (
    <div className="login-container">
      <div className="form-box">
        <h1 id="title">sign up</h1>
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

            <div className="input-field" id="email" ref={emailRef}>
              <div className="input">
                <MdEmail/>
                <input  type="text" placeholder="someone@gmail.com" {...formik.getFieldProps('femail')} />
              </div>
              <div className='err-msg-box'>
               {formik.touched.femail && formik.errors.femail ? (<div>{formik.errors.femail}</div>) : null }
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

            <div className="input-field" id="confirmpass" ref={confirmpassRef}>
              <div className='input'>
                <TbPassword/>
                <input type="password" placeholder="confirmpassword" {...formik.getFieldProps('fconfirmpass')} />
              </div>
              <div className='err-msg-box'>
               {formik.touched.fconfirmpass && formik.errors.fconfirmpass ? (<div>{formik.errors.fconfirmpass}</div>) : null }
              </div>
            </div>
            <p>you have an account? <a id="signin" href="#" onClick={changeFunction}>sign in</a></p>
          </div>
          <div className="btn-field">
            <button id="btn" type="submit" >sign up</button>
          </div>
        </form>
      </div>
  </div>
  )
}
