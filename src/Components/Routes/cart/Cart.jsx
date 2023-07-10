import React from 'react'
import './cart.css'
import CartItems from '../../Subcomponents/cartItems/CartItems'
import { useDispatch, useSelector } from 'react-redux'
import {clearCart,clearTotalPurchases,clearTotalItems} from '../../../redux/actions'

export default function Cart() {
  const totalPayments = useSelector(state => state.totalPurchasesReducer)
  const totalItems = useSelector(state => state.totalItemsReducer)

  const dispatch = useDispatch()
  return (
    <>
      <div className='information-cart'>
        <div className='total'>
          <div className='total-items'>Total items: <span>{totalItems}</span></div>
          <div className='total-payments'>Total payments: <span>{totalPayments ? totalPayments.toFixed(2) : 0} $</span></div>
        </div>
        <div className='clear-continue-container'>
          <div className='clear-btn' 
               onClick={()=>{
                dispatch(clearCart())
                dispatch(clearTotalPurchases())
                dispatch(clearTotalItems())
                }} 
          >clear</div>
          <div className='continue-btn'>continue</div>
        </div>
      </div>
      <CartItems/>
    </>
  )
}
