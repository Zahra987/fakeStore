import React from 'react'
import './saved.css'
import Cards from '../../Subcomponents/cards/Cards'
import { useSelector } from 'react-redux'
export default function Saved() {

  const savedProducts=useSelector(state => state.saveProductsReducer);
  console.log(savedProducts);
  return (
   <>
    <Cards products={savedProducts}/>
   </>
  )
}