import React ,{useState} from 'react'
import './loginSignup.css'
import Login from '../../Subcomponents/login/Login'
import Signup from '../../Subcomponents/signup/Signup'

export default function LoginSignup() {
  const [changeLoginSignup,setChangeLoginSignup]= useState(true);
  const changeFunction =() => {
      setChangeLoginSignup(!changeLoginSignup)
  }
  return (
    <>
    {changeLoginSignup?<Login changeFunction={changeFunction} />:<Signup changeFunction={changeFunction} />}
    </>
  )
}
