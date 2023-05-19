import React from 'react'
import {FiTwitter,FiInstagram,FiFacebook} from 'react-icons/fi'
import {RiTelegramLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'

import './footer.css'
export default function Footer() {
  return (
    <footer>
      <div className='footer-section1' >
       <div className='column1' >
        <ul>
          <li><h3>Pages</h3></li>
          <Link to='/login'><li>Profile</li></Link>
          <Link to='/home'><li>Home</li></Link>
          <Link to='/store'><li>Store</li></Link>
          <Link to='/saved'><li>Saved</li></Link>
          <Link to='/cart'><li>Cart</li></Link>
          <Link to='/orders'><li>Orders</li></Link>
          <Link to='/aboutus'><li>AboutUs</li></Link>
          <Link to='/contactus'><li>ContactUs</li></Link>
        </ul>
       </div>
       <div className='column2' >
       <ul>
          <li><h3>Companies</h3></li>
          <li>Adidas</li>
          <li>Nike</li>
          <li>Intel</li>
          <li>Samsung</li>
          <li>LG</li>
        </ul>
       </div>
       <div className='column3'>
       <ul>
          <li><h3>Follow</h3></li>
          <li><FiTwitter/><span>Twitter</span></li>
          <li><FiFacebook/><span>Facebook</span></li>
          <li><FiInstagram/><span>Instagram</span></li>
          <li><RiTelegramLine/><span>Telegram</span></li>
        </ul>
       </div>
      </div>
      <div className='footer-section2'>
       <h5>
         All information on this site belongs only to the company Shotor Dar khoab Binad Panbe Daneh
       </h5>
       <div>
         The content submitted by the site is published under the license of CC BY-SA 3.0.
       </div>
      </div>
    </footer>
  )
}