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
  
