import {createStore, combineReducers, applyMiddleware} from 'redux'
import {storeProductsReducer, suggestionsProductsReducer,cartReducer,saveProductsReducer,totalPurchasesReducer,totalItemsReducer} from './reducers'
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers ={storeProductsReducer,suggestionsProductsReducer,cartReducer,saveProductsReducer,totalPurchasesReducer,totalItemsReducer}
const rootReducer = combineReducers(reducers)
export const configureStore = () => createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))