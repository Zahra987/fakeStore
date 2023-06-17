import {LOAD_STORE_PRODUCTS_SUCCESS, LOAD_SUGGESTIONS_PRODUCTS_SUCCESS} from './actions'

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



