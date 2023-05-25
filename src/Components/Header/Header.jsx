import React, {useRef} from 'react'
import './header.css'
import {Link, NavLink} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {FaStoreAlt} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {HiOutlineSave} from 'react-icons/hi'
import {FcAbout} from 'react-icons/fc'
import {MdConnectWithoutContact} from 'react-icons/md'
import {MdLogin} from 'react-icons/md'
import {RxHamburgerMenu} from 'react-icons/rx'
export default function Header() {
  const navRightRef=useRef();
  const handleClick=() =>{
    navRightRef.current.classList.toggle('close');
  }
  return (
    <header className="header-box">
      <div className='nav-left'>
        <div className='hamberger hidden' onClick={handleClick}><RxHamburgerMenu/></div>
        <div className='store-name'>MY STORE</div>
      </div>
      <nav className='nav-right close' ref={navRightRef}>
        <ul>
          <li id='close-x'><span onClick={handleClick}>X</span></li>
          <NavLink style={({isActive}) =>{return {backgroundColor:isActive?"rgb(103,132,226)":"inherit"}}} to='/'><li><AiOutlineHome/><span>HOME</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {backgroundColor:isActive?"rgb(103,132,226)":"inherit"}}} to='/store'><li><FaStoreAlt/><span>STORE</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {backgroundColor: isActive?"rgb(103,132,226)":"inherit"}}} to='/cart'><li><AiOutlineShoppingCart/><span>CART</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {backgroundColor: isActive?"rgb(103,132,226)":"inherit"}}} to='/orders'><li><AiOutlineUnorderedList/><span>ORDERS</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {backgroundColor: isActive?"rgb(103,132,226)":"inherit"}}} to='/saved'><li><HiOutlineSave/><span>SAVED</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {backgroundColor: isActive?"rgb(103,132,226)":"inherit"}}} to='/aboutus'><li className='aboutus-li'><FcAbout/><span>ABOUTUS</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {backgroundColor: isActive?"rgb(103,132,226)":"inherit"}}} to='/contactus'><li className='contactus-li'><MdConnectWithoutContact/><span>CONTACTUS</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {backgroundColor: isActive?"rgb(103,132,226)":"inherit"}}} to='/login'><li><MdLogin/><span>LOGIN</span></li></NavLink>
        </ul>
      </nav>
    </header>
  )
}
