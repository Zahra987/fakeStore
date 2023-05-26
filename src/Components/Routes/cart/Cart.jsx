import React from 'react'
import './cart.css'
import CartItems from '../../Subcomponents/cartItems/CartItems'
export default function Cart() {
  return (
    <>
      <div className='information-cart'>
        <div className='total'>
          <div className='total-items'>Total items: <span>30</span></div>
          <div className='total-payments'>Total payments: <span>1796.57</span></div>
        </div>
        <div className='clear-continue-container'>
          <div className='clear-btn'>clear</div>
          <div className='continue-btn'>continue</div>
        </div>
      </div>
      <CartItems/>
    </>
  )
}
