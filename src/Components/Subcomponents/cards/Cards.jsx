import React from 'react'
import './cards.css'
import Card from '../card/Card'

export default function Cards({storeProducts}) {

  return (
    <div className='cards-container'>
      <div className='cards'>
       {storeProducts.map((item,index)=><Card product={item}  key={index} />)}
      </div>
    </div>
  )
}
