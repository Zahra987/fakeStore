import React from 'react'
import './cartItem.css'
import {MdOutlineAddBox} from 'react-icons/md'
import {VscDiffRemoved} from 'react-icons/vsc'
import {RiDeleteBinLine} from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import {increasePurchases, decreasePurchases} from '../../../redux/actions'

export default function CartItem({product}) {
  const {purchase, numberOfPurchases}= product;
  const {id}=purchase;
  const dispatch=useDispatch();
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
            <div className='decrease' 
                 onClick={()=>{dispatch(decreasePurchases(id,numberOfPurchases))}} 
            >{numberOfPurchases == 1 ?<RiDeleteBinLine/> :<VscDiffRemoved/>}</div>
            <div className='increase' 
                 onClick={()=>{dispatch(increasePurchases(id))}} 
            ><MdOutlineAddBox/></div>
          </div>
        </div>
       </div>
    </div>
  )
}