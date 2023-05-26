import React from 'react'
import './cartItem.css'
import img1 from '../../../assets/images/store-img1.jpg'
import {MdOutlineAddBox} from 'react-icons/md'
import {VscDiffRemoved} from 'react-icons/vsc'
export default function CartItem() {
  return (
    <div className='cartItem-container' >
       <div className='cartItem-box'>
        <div className='cartItem'>
          <div className='img-box'><img src={img1} alt="image"/></div>
          <div className='product-name-price'>
            <div className='product-name'>menfgfgf</div>
            <div className='price' >100.95 $</div>
          </div>
          <div className='number'>33</div>
          <div className='counter'>
            <div className='decrease'><VscDiffRemoved/></div>
            <div className='increase'><MdOutlineAddBox/></div>
          </div>
        </div>
       </div>
    </div>
  )
}