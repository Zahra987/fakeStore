import React from 'react'
import './cartItems.css'
import CartItem from '../cartItem/CartItem'
export default function CartItems() {
  return (
    <div className='cartItems-container'>
      <div className='cartItems'>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </div>
    </div>
  )
}
