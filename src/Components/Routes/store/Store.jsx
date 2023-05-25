import React from 'react'
import './store.css'
import {AiTwotoneFilter} from 'react-icons/ai'
import Cards from '../../Subcomponents/cards/Cards'
export default function Store() {
  return (
    <div className='home-container'>
      <div className='search-container'>
        <div className='filters'>
          <span>Filters</span>
          <AiTwotoneFilter/>
        </div>
        <div className='search'>
          <label>Search</label>
          <input placeholder='Search' />
        </div>
      </div>
      <div className='cards-container'>
       <Cards/>
      </div>
    </div>
  )
}
