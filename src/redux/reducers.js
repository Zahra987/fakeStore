import {LOAD_STORE_PRODUCTS_SUCCESS, LOAD_SUGGESTIONS_PRODUCTS_SUCCESS,ADD_TO_CART_SUCCESS,SAVE_PRODUCTS_SUCCESS,UNSAVE_PRODUCTS_SUCCESS, INCREASE_PURCHASES, DECREASE_PURCHASES} from './actions'

export const storeProductsReducer= (state=[], action) =>
{ 
  const {type, payload}= action;
  switch (type) {
    case LOAD_STORE_PRODUCTS_SUCCESS:
      const {storeProducts} = payload
      return storeProducts;
    default:
      return state;
  }
}

export const suggestionsProductsReducer= (state=[], action) =>
{ 
  const {type, payload}= action;
  switch (type) {
    case LOAD_SUGGESTIONS_PRODUCTS_SUCCESS:
      const {suggestionsProducts} = payload
      return suggestionsProducts;
    default:
      return state;
  }
}

export const cartReducer= (state=[], action) =>
{ 
  const {type, payload}= action;
  switch (type) {
    case ADD_TO_CART_SUCCESS:
      const {purchase} = payload
      const newPurchase={
        purchase: purchase,
        numberOfPurchases: 1
      }
      return state.concat(newPurchase);
    case INCREASE_PURCHASES:{
      return state.map((item,index) => {
        if(item.purchase.id == payload.id){
          return {
            purchase: item.purchase,
            numberOfPurchases: item.numberOfPurchases + 1
          }
        }else return item;
      })
    }
    case DECREASE_PURCHASES:{
      if (payload.num == 1){
        return state.filter(item => item.purchase.id != payload.id);
      }
      return state.map((item,index) => {
        if(item.purchase.id == payload.id){
          return {
            purchase: item.purchase,
            numberOfPurchases: payload.num - 1
          }
        }else return item;
      })
    }
    default:
      return state;
  }
}

export const saveProductsReducer= (state=[], action) =>
{ 
  const {type, payload}= action;
  switch (type) {
    case SAVE_PRODUCTS_SUCCESS:
      const {product} = payload
      return state.concat(product);
    case UNSAVE_PRODUCTS_SUCCESS:
      const {id} = payload
     return state.filter(product => product.id != id)
    default:
      return state;
  }
}

