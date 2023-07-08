import React, { useEffect } from 'react'
import './store.css'
import {AiTwotoneFilter} from 'react-icons/ai'
import Cards from '../../Subcomponents/cards/Cards'
import { useDispatch, useSelector } from 'react-redux'
import {loadStoreProducts} from '../../../redux/reqFunctions'


  
export default function Store() {
  
  const storeProducts = useSelector((state) => state.storeProductsReducer);
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(loadStoreProducts())
  },[])

  return (
    <div className='store-container'>
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
      <Cards products={storeProducts}/>
    </div>
  )
}