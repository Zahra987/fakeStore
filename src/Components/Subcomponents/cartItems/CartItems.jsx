import React from 'react'
import './cartItems.css'
import CartItem from '../cartItem/CartItem'
import { useSelector } from 'react-redux'
export default function CartItems() {

  const cartItems=useSelector(state => state.cartReducer)
  return (
    <div className='cartItems-container'>
      <div className='cartItems'>
        {cartItems.map((item,index) => <CartItem product={item} key={index}/>)}
        {/* <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/> */}
      </div>
    </div>
  )
}
