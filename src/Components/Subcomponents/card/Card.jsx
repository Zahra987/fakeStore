import React from 'react'
import './card.css'
import img1 from '../../../assets/images/store-img1.jpg'
import {BsBookmarkStar} from 'react-icons/bs'
import {MdOutlineAddBox} from 'react-icons/md'
import {VscDiffRemoved} from 'react-icons/vsc'
export default function Card() {
  return (
    <div className='card-container'>
      <div className='card-box'>
        <div className='card'>
          <div className='img-box'><img src={img1} alt='img1'/></div>
          <div className='product-name'>productName</div>
          <div className='price-save-container'>
            <div className='price'>109.9 $</div>
            <div className='save'><BsBookmarkStar/></div>
          </div>
          <div className='details-addtocart'>
            <div className='details'>details</div>
            <div className='add-to-cart'>Add to cart</div>
            <div className='counter addtocart-counter-hidden'>
              <div className='decrease'><VscDiffRemoved/></div>
              <div className='number'>1</div>
              <div className='increase'><MdOutlineAddBox/></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
