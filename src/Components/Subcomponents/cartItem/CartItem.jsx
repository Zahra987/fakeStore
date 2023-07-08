import React from 'react'
import './cartItem.css'
import {MdOutlineAddBox} from 'react-icons/md'
import {VscDiffRemoved} from 'react-icons/vsc'

export default function CartItem({product}) {
  const {purchase, numberOfPurchases}= product;
  return (
    <div className='cartItem-container' >
       <div className='cartItem-box'>
        <div className='cartItem'>
          <div className='img-box'>
            <img src={purchase.image} alt="image"/>
          </div>
          <div className='product-name-price'>
            <div className='product-name'>{purchase.category}</div>
            <div className='price' >{purchase.price} $</div>
          </div>
          <div className='number'>{numberOfPurchases}</div>
          <div className='counter'>
            <div className='decrease'><VscDiffRemoved/></div>
            <div className='increase'><MdOutlineAddBox/></div>
          </div>
        </div>
       </div>
    </div>
  )
}
//https://cdn.mashreghnews.ir/d/2020/02/16/4/2718373.jpg