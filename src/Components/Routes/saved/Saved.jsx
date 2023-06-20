import React from 'react'
import './saved.css'
import Cards from '../../Subcomponents/cards/Cards'
export default function Saved() {
  return (
   <>
    <Cards storeProducts={[{id:1,category:"men's clothing",image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}]}/>
   </>
  )
}