export const LOAD_STORE_PRODUCTS_SUCCESS='LOAD_STORE_PRODUCTS_SUCCESS'
export const loadStoreProductsSuccess= (storeProducts) => (
  {
    type:LOAD_STORE_PRODUCTS_SUCCESS,
    payload:{storeProducts}
  }
)

export const LOAD_SUGGESTIONS_PRODUCTS_SUCCESS ='LOAD_SUGGESTIONS_PRODUCTS'
export const loadSuggestionsProductsSuccess= (suggestionsProducts) => (
  {
    type:LOAD_SUGGESTIONS_PRODUCTS_SUCCESS,
    payload:{suggestionsProducts}
  }
)

export const ADD_TO_CART_SUCCESS='ADD_TO_CART_SUCCESS'
export const addToCartSuccess= (purchase) => (
  {
    type:ADD_TO_CART_SUCCESS,
    payload:{purchase}
  }
)

export const SAVE_PRODUCTS_SUCCESS='SAVE_PRODUCTS_SUCCESS'
export const saveProducts= (product) => (
  {
    type:SAVE_PRODUCTS_SUCCESS,
    payload:{product}
  }
)

export const UNSAVE_PRODUCTS_SUCCESS='UNSAVE_PRODUCTS_SUCCESS'
export const unSaveProducts= (id) => (
  {
    type:UNSAVE_PRODUCTS_SUCCESS,
    payload:{id}
  }
)

export const INCREASE_PURCHASES='INCREAE_PURCHASES'
export const increasePurchases=(id) => (
  {
    type:INCREASE_PURCHASES,
    payload:{id}
  }
)

export const DECREASE_PURCHASES= 'DECREASE_PURCHASES'
export const decreasePurchases= (id, num)=> (
  {
    type: DECREASE_PURCHASES,
    payload:{
      id,
      num
    }
  }
)


export const DECREASE_TOTAL_PURCHASES="DECREASE_TOTAL_PURCHASES"
export const decreaseTotalPurchases= (price) => (
  {
    type:DECREASE_TOTAL_PURCHASES,
    payload:{price}
  }
)

export const INCREASE_TOTAL_PURCHASES="INCREASE_TOTAL_PURCHASES"
export const increaseTotalPurchases= (price) => (
  {
    type:INCREASE_TOTAL_PURCHASES,
    payload:{price}
  }
)

export const CLEAR_CART="CLEAR_CART"
export const clearCart= ()=> (
  {
    type:CLEAR_CART
  }
)

export const CLEAR_TOTAL_PURCHASES='CLEAR_TOTAL_PURCHASES'
export const clearTotalPurchases= ()=> (
  {
    type: CLEAR_TOTAL_PURCHASES
  }
)

export const DECREASE_TOTAL_ITEMS="DECREASE_TOTAL_ITEMS"
export const decreaseTotalItems= () => (
  {
    type:DECREASE_TOTAL_ITEMS
  }
)

export const INCREASE_TOTAL_ITEMS="INCREASE_TOTAL_ITEMS"
export const increaseTotalItems= () => (
  {
    type:INCREASE_TOTAL_ITEMS
  }
)

export const CLEAR_TOTAL_ITEMS="CLEAR_TOTAL_ITEMS"
export const clearTotalItems= () => (
  {
    type:CLEAR_TOTAL_ITEMS
  }
)
