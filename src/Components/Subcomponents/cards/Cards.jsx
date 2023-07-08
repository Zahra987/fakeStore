import React from 'react'
import './cards.css'
import Card from '../card/Card'

export default function Cards({products}) {

  return (
    <div className='cards-container'>
      <div className='cards'>
       {products.map((item,index)=><Card product={item}  key={index} />)}
      </div>
    </div>
  )
}
