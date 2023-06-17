import {loadStoreProductsSuccess, loadSuggestionsProductsSuccess} from './actions'

export const loadStoreProducts = () => async (dispatch, getState) => {

  try{
  const response = await fetch('https://fakestoreapi.com/products')
  const storeProducts = await response.json();
  dispatch(loadStoreProductsSuccess(storeProducts));
  } catch (e) {
    console.log('error');
  }
}

export const loadSuggestionsProducts = () => async (dispatch, getState) => {

  try{
  const response = await fetch('https://fakestoreapi.com/products')
  const storeProducts = await response.json();
  const suggestionsProducts = [storeProducts[1],storeProducts[3],storeProducts[5],storeProducts[7],storeProducts[9],storeProducts[11],storeProducts[13],storeProducts[15],storeProducts[17] ];
  dispatch(loadSuggestionsProductsSuccess(suggestionsProducts));
  } catch (e) {
    console.log('error');
  }
}