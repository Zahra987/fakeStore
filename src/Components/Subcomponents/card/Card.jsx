import React,{useEffect, useRef} from 'react'
import './card.css'
import {BsBookmarkStar} from 'react-icons/bs'
import {MdOutlineAddBox} from 'react-icons/md'
import {VscDiffRemoved} from 'react-icons/vsc'
import {RiDeleteBinLine} from 'react-icons/ri'
import { useDispatch,useSelector } from 'react-redux'
import {addToCartSuccess,saveProducts,unSaveProducts, 
        increasePurchases, decreasePurchases, increaseTotalPurchases, 
        decreaseTotalPurchases,decreaseTotalItems,
        increaseTotalItems} from '../../../redux/actions'

export default function Card({product}) {

  const {id,price,category,image}=product;
  const addToCardRef= useRef();
  const counterRef= useRef();
  const savedRef = useRef();
  const dispatch=useDispatch();
  let saved =[];
  const saveProduct= useSelector(state => state.saveProductsReducer);
  saved = saveProduct.filter(i => i.id == id);
 
  let cart=[];
  const cartProducts= useSelector(state => state.cartReducer);
  cart = cartProducts.filter(i => i.purchase.id == id);

  useEffect(()=>{
    if (saved.length > 0) {
      savedRef.current.classList.add('saved-element-color')
    }
    if (cart.length > 0) {
      addToCardRef.current.classList.add('element-display')
      counterRef.current.classList.remove('element-display')
    }
  },[])


  return (
    <div className='card-container'>
      <div className='card-box'>
        <div className='card'>
          <div className='img-box'><img src={image} alt='img1'/></div>
          <div className='product-name'>{category}</div>
          <div className='price-save-container'>
            <div className='price'>{price} $</div>
            <div className='save'
                 ref={savedRef}
                 onClick={() => {
                  savedRef.current.classList.toggle('saved-element-color')
                  if (saved.length > 0) {
                    dispatch(unSaveProducts(id))
                  }else{
                    dispatch(saveProducts(product))
                  }
                 }}
            
            ><BsBookmarkStar/></div>
          </div>
          <div className='details-addtocart'>
            <div className='details'>details</div>
            <div className='add-to-cart'
                 ref={addToCardRef}
                 onClick={(e) => {
                    e.target.classList.toggle("element-display")
                    counterRef.current.classList.toggle("element-display");
                    dispatch(addToCartSuccess(product))
                    dispatch(increaseTotalPurchases(price))
                    dispatch(increaseTotalItems())
                 }}
            
            >Add to cart</div>
            <div className='counter element-display'
                 ref={counterRef}
              >
              <div className='decrease' 
                   onClick={()=>{
                    if (cart[0].numberOfPurchases==1) {
                       counterRef.current.classList.toggle("element-display");
                       addToCardRef.current.classList.toggle('element-display')
                    }
                    dispatch(decreasePurchases(id,cart[0].numberOfPurchases))
                    dispatch(decreaseTotalPurchases(price))
                    dispatch(decreaseTotalItems())
                  }} 
               >{cart.length > 0 && cart[0].numberOfPurchases == 1 ?<RiDeleteBinLine/> :<VscDiffRemoved/>}</div>
              <div className='number'>{ cart.length > 0 ? cart[0].numberOfPurchases : 0 }</div>
              <div className='increase' 
                   onClick={()=>{
                    dispatch(increasePurchases(id))
                    dispatch(increaseTotalPurchases(price))
                    dispatch(increaseTotalItems())
                    }}
              ><MdOutlineAddBox/></div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
