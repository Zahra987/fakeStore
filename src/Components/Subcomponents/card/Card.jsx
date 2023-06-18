import React from 'react'
import './card.css'
import {BsBookmarkStar} from 'react-icons/bs'
import {MdOutlineAddBox} from 'react-icons/md'
import {VscDiffRemoved} from 'react-icons/vsc'

export default function Card({product}) {
  
  return (
    <div className='card-container'>
      <div className='card-box'>
        <div className='card'>
          <div className='img-box'><img src={product.image} alt='img1'/></div>
          <div className='product-name'>{product.category}</div>
          <div className='price-save-container'>
            <div className='price'>{product.price} $</div>
            <div className='save'><BsBookmarkStar/></div>
          </div>
          <div className='details-addtocart'>
            <div className='details'>details</div>
            <div className='add-to-cart'>Add to cart</div>
            <div className='counter'>
              <div className='decrease'><VscDiffRemoved/></div>
              <div className='number'>55</div>
              <div className='increase'><MdOutlineAddBox/></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
