import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Components/Routes/home/Home'
import Store from './Components/Routes/store/Store'
import Cart from './Components/Routes/cart/Cart'
import Orders from './Components/Routes/orders/Orders'
import Saved from './Components/Routes/saved/Saved'
import AboutUs from './Components/Routes/aboutUs/AboutUs'
import ContactUs from './Components/Routes/contactUs/ContactUs'
import LoginSignup from './Components/Routes/loginSignup/LoginSignup'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Navigate replace to="/" />} />
        <Route path='/store' element={<Store/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/saved' element={<Saved/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
