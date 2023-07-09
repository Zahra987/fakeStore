import React, {useRef} from 'react'
import './header.css'
import {NavLink} from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {FaStoreAlt} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {HiOutlineSave} from 'react-icons/hi'
import {FcAbout} from 'react-icons/fc'
import {MdConnectWithoutContact} from 'react-icons/md'
import {MdLogin} from 'react-icons/md'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsInfoSquare} from 'react-icons/bs'
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
          <NavLink style={({isActive}) =>{return {color:isActive?"blue":"black"}}} to='/'><li><AiOutlineHome/><span>HOME</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {color:isActive?"blue":"black"}}} to='/store'><li><FaStoreAlt/><span>STORE</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {color: isActive?"blue":"black"}}} to='/cart'><li><AiOutlineShoppingCart/><span>CART</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {color: isActive?"blue":"black"}}} to='/orders'><li><AiOutlineUnorderedList/><span>ORDERS</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {color: isActive?"blue":"black"}}} to='/saved'><li><HiOutlineSave/><span>SAVED</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {color: isActive?"blue":"black"}}} to='/aboutus'><li className='aboutus-li'><BsInfoSquare/><span>ABOUTUS</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {color: isActive?"blue":"black"}}} to='/contactus'><li className='contactus-li'><MdConnectWithoutContact/><span>CONTACTUS</span></li></NavLink>
          <NavLink style={({isActive}) =>{return {color: isActive?"blue":"black"}}} to='/login'><li><MdLogin/><span>LOGIN</span></li></NavLink>
        </ul>
      </nav>
    </header>
  )
}
